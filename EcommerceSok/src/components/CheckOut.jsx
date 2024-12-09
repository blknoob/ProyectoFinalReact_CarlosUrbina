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

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const [pay, setpay] = useState("");
  const [error, setError] = useState("");

  const { cart, TotalPrice, clearCart, TotalItems } = useCart();
  const totalPrice = TotalPrice();
  const totalItems = TotalItems();

  const createOrder = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !direccion || !telefono || !email) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!pay) {
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
      pay,
      totalItems,
      totalPrice,
      date: new Date(),
    };

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
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {order ? (
          <p className="text-center text-green-600 font-bold text-2xl">
            Compra realizada con éxito!
          </p>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Ingresa tus Datos
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={createOrder} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">
                    Apellido:
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Dirección:
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Teléfono:
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Métodos de Pago
                </h3>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="Tarjeta de Crédito"
                      checked={pay === "Tarjeta de Crédito"}
                      onChange={(e) => setpay(e.target.value)}
                    />
                    Tarjeta de Crédito
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="PayPal"
                      checked={pay === "PayPal"}
                      onChange={(e) => setpay(e.target.value)}
                    />
                    PayPal
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      value="Transferencia Bancaria"
                      checked={pay === "Transferencia Bancaria"}
                      onChange={(e) => setpay(e.target.value)}
                    />
                    Transferencia Bancaria
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 font-bold rounded-lg hover:bg-green-800 transition duration-300"
              >
                Finalizar Compra
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
