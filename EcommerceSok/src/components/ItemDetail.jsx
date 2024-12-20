import ItemCount from "./ItemCount";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const { isInCart, addToCart } = useCart();

  const isProductInCart = isInCart(detail.id);

  const buttonAdd = (count) => {
    const aggregateProduct = {
      id: detail.id,
      tittle: detail.tittle,
      price: detail.price,
      quantity: count,
      stock: detail.stock,
      img: detail.img,
    };
    addToCart(aggregateProduct, count);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mt-20 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="lg:w-1/2">
        <img
          src={detail.img}
          alt={detail.tittle}
          className="w-80 h-auto object-cover mx-auto"
        />
      </div>

      <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{detail.tittle}</h1>

        <p className="text-2xl font-semibold text-blue-600">
          Precio: ${detail.price}
        </p>

        <p className="text-gray-600">
          <strong>Disponible:</strong> {detail.stock} unidades
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link
            to="/cart"
            className={`py-2 px-4 rounded-lg font-semibold shadow-md transition-all ${
              isProductInCart
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-blue-800 text-white hover:bg-blue-900"
            }`}
          >
            Ir al carrito
          </Link>
        </div>

        <div className="mt-6">
          <ItemCount stock={detail.stock} aggregateCart={buttonAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
