import ItemCount from "./ItemCount";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const { isInCart, addToCart } = useCart();

  const buttonAdd = (count) => {
    const aggregateProduct = {
      id: detail.id,
      tittle: detail.tittle,
      price: detail.price,
      quantity: count,
    };
    addToCart(aggregateProduct);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-4xl  m-20 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="lg:w-1/2">
        <img
          src={detail.img}
          alt={detail.tittle}
          className="w-fit h-72 object-contain rounded-md shadow-lg"
        />
      </div>

      <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 mt-4 lg:mt-0">
          {detail.tittle}
        </h1>
        <p className="text-xl text-gray-700 font-semibold mt-2">
          ${detail.price}
        </p>
        <p>Disponible: {detail.stock}</p>
        {/* <p className="text-gray-600 mt-4">{detail.description}</p> */}
      </div>
      <div>
        <Link to="/cart">Ir al carrito</Link>
        <ItemCount stock={detail.stock} aggregateCart={buttonAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
