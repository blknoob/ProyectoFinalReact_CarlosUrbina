import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamburger, sethamburger] = useState(false);

  const hamMenu = () => sethamburger(!hamburger);

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={hamMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      <ul
        className={`${
          hamburger ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex md:space-x-8 md:items-center md:justify-center`}
      >
        <li>
          <Link
            to="/"
            className="block text-white hover:text-yellow-600 p-2 text-lg font-semibold"
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            to="/allProducts"
            className="block text-white hover:text-yellow-600 p-2 text-lg font-semibold"
          >
            Todos Nuestros Productos
          </Link>
        </li>

        <li className="relative group">
          <span className="block text-white hover:text-yellow-600 p-2 text-lg font-semibold cursor-pointer">
            Bicicletas
          </span>
          <ul className="hidden group-hover:block md:absolute bg-white rounded-md shadow-lg">
            <li>
              <Link
                to="/category/bicicleta"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Todo Bicicletas
              </Link>
            </li>
            <li>
              <Link
                to="/category/bicicletas/ruta"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Ruta
              </Link>
            </li>
            <li>
              <Link
                to="/category/bicicletas/montana"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Montaña
              </Link>
            </li>
            <li>
              <Link
                to="/category/bicicletas/paseo"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Paseo
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative group">
          <span className="block text-white hover:text-yellow-600 p-2 text-lg font-semibold cursor-pointer">
            Indumentaria
          </span>
          <ul className="hidden group-hover:block md:absolute bg-white rounded-md shadow-lg">
            <li>
              <Link
                to="/category/indumentaria"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Todo Indumentaria
              </Link>
            </li>
            <li>
              <Link
                to="/category/indumentaria/camiseta"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Camiseta
              </Link>
            </li>
            <li>
              <Link
                to="/category/indumentaria/casco"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Casco
              </Link>
            </li>
            <li>
              <Link
                to="/category/indumentaria/guante"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Guante
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative group">
          <span className="block text-white hover:text-yellow-600 p-2 text-lg font-semibold cursor-pointer">
            Componentes y Accesorios
          </span>
          <ul className="hidden group-hover:block md:absolute bg-white rounded-md shadow-lg">
            <li>
              <Link
                to="/category/componentes"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Todo Componentes y Accesorios
              </Link>
            </li>
            <li>
              <Link
                to="/category/componentes/freno"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Frenos
              </Link>
            </li>
            <li>
              <Link
                to="/category/componentes/llantas"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Llantas
              </Link>
            </li>
            <li>
              <Link
                to="/category/componentes/plato"
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-600 hover:text-white"
              >
                Platos
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
