import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { db } from "../services/firebase";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

export const CheckOut = () => {
  const [order, setOrder] = useState(false);

  // Campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  // Método de pago seleccionado
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");

  const { cart, TotalPrice, clearCart, TotalItems } = useCart();
  const totalPrice = TotalPrice();
  const totalItems = TotalItems();

  const createOrder = async (e) => {
    e.preventDefault(); // Evitar recarga de la página

    // Validaciones
    if (!nombre || !apellido || !direccion || !telefono || !email) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!paymentMethod) {
      setError("Selecciona un método de pago.");
      return;
    }

    const objectOrder = {
      buyer: {
        firstName: nombre,
        lastName: apellido,
        phone: telefono,
        email: email,
        address: direccion,
      },
      paymentMethod, // Agregar método de pago
      items: cart,
      totalItems,
      totalPrice,
      date: new Date(),
    };

    console.log(objectOrder);

    try {
      const ids = cart.map((item) => item.id);
      const productRef = collection(db, "products");

      const querySnapshot = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = querySnapshot;
      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const product = cart.find((item) => item.id === doc.id);
        if (doc.data().stock >= product.quantity) {
          batch.update(doc.ref, { stock: doc.data().stock - product.quantity });
        } else {
          outOfStock.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        await addDoc(collection(db, "orders"), objectOrder);
        await batch.commit();
        clearCart();
        setOrder(true);
      } else {
        setError("Algunos productos están fuera de stock.");
      }
    } catch (err) {
      console.error("Error al crear la orden:", err);
      setError("Hubo un problema al procesar tu orden. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      {order ? (
        <p>Compra realizada con éxito</p>
      ) : (
        <>
          <h2>Ingresa tus Datos</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={createOrder}>
            {/* Formulario para datos del comprador */}
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label>Apellido:</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div>
              <label>Dirección:</label>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Selección de método de pago */}
            <div>
              <h3>Métodos de Pago</h3>
              <label>
                <input
                  type="radio"
                  value="Tarjeta de Crédito"
                  checked={paymentMethod === "Tarjeta de Crédito"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Tarjeta de Crédito
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="PayPal"
                  checked={paymentMethod === "PayPal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Transferencia Bancaria"
                  checked={paymentMethod === "Transferencia Bancaria"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Transferencia Bancaria
              </label>
            </div>

            <button type="submit">Finalizar Compra</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckOut;
