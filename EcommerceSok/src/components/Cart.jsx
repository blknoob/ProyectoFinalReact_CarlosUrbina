import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { CheckOut } from "./CheckOut";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    TotalPrice,
    TotalItems,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold mb-6">Carrito de Compras</h2>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">
                Precio: ${item.price} | Cantidad: {item.quantity}
              </p>
              <p className="text-gray-600">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() =>
                  item.quantity < item.stock
                    ? (console.log("Incrementando cantidad"),
                      updateQuantity(item.id, item.quantity + 1))
                    : console.log("Stock máximo alcanzado")
                }
              >
                +
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() =>
                  item.quantity > 1
                    ? updateQuantity(item.id, item.quantity - 1)
                    : item.quantity
                }
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">
          Total ({TotalItems()} productos): ${TotalPrice()}
        </h3>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mt-4"
          onClick={clearCart}
        >
          Vaciar Carrito
        </button>
        <CheckOut />
      </div>
    </div>
  );
};
