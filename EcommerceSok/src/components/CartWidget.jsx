import { useCart } from "../hooks/useCart"; // Importar el hook personalizado

function CartWidget() {
  const { TotalItems } = useCart(); // Obtener la cantidad total de productos en el carrito

  return (
    <div className="relative">
      <a href="#" className="CartWidget">
        <svg
          className="h-8 w-8 text-gray-800"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="9" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
        </svg>
      </a>

      {/* Mostrar el total de productos si es mayor que 0 */}
      {TotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {TotalItems()}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
