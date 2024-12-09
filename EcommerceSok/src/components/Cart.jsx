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
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800">Tu carrito está vacío</h2>
        <Link 
          to="/" 
          className="text-gray-600 underline mt-6 text-lg"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Carrito de Compras</h2>

      <div className="flex flex-col space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain rounded-md border border-gray-200"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-700 mt-1">
                Precio: <span className="font-bold">${item.price}</span>
              </p>
              <p className="text-gray-700">
                Cantidad: <span className="font-bold">{item.quantity}</span>
              </p>
              <p className="text-gray-700 mt-1">
                Subtotal: <span className="font-bold">${item.price * item.quantity}</span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 items-center">
              <button
                className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>

              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantity(item.id, item.quantity - 1)
                      : console.log("Cantidad mínima alcanzada")
                  }
                >
                  -
                </button>

                <button
                  className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                  onClick={() =>
                    item.quantity < item.stock
                      ? updateQuantity(item.id, item.quantity + 1)
                      : console.log("Stock máximo alcanzado")
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 text-center">Resumen de Compra</h3>

        <div className="flex justify-between mt-4">
          <p className="text-lg text-gray-800 font-semibold">Total de productos:</p>
          <p className="text-lg font-bold text-gray-900">{TotalItems()}</p>
        </div>

        <div className="flex justify-between mt-2">
          <p className="text-lg text-gray-800 font-semibold">Precio total:</p>
          <p className="text-lg font-bold text-gray-900">${TotalPrice()}</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            className="mx-auto p-5 bg-gray-700 text-white py-3 rounded-md text-lg font-bold hover:bg-gray-800"
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>

          
        </div>
      </div>

      <CheckOut />
    </div>
  );
};
