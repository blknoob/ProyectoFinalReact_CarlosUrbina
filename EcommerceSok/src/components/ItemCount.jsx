import { useState } from "react";

function ItemCount({ stock, aggregateCart }) {
  const [count, setCount] = useState(1);

  const amountProduct = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const sustrabProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white border border-gray-200 rounded-xl shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Cantidad: {count}</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={sustrabProduct}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 text-xl font-bold rounded-full shadow-md hover:bg-gray-300 transition-all"
        >
          -
        </button>

        <span className="text-xl font-bold text-gray-800">{count}</span>

        <button
          onClick={amountProduct}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 text-xl font-bold rounded-full shadow-md hover:bg-gray-300 transition-all"
        >
          +
        </button>
      </div>

      <button
        onClick={() => aggregateCart(count)}
        className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
