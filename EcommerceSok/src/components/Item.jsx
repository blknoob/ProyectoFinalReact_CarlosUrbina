import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="flex flex-col max-w-64 p-4 bg-gray-200 shadow-lg rounded-lg m-6">
      <img
        src={prod.img}
        alt={prod.tittle}
        className="size-full w-auto object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {prod.tittle}
        </h2>
        <p className="mt-2 text-gray-700 text-lg">${prod.price}</p>

        <div className="flex flex-col space-y-2 mt-4">
          <Link
            className="w-full px-4 py-2 text-center bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors"
            to={`/detail/${prod.id}`}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
