import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-8 justify-center">

      <li>
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Inicio
          </Link>
        </li>


        <li>
          <Link
            to="/allProducts"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Todos Nuestros Productos
          </Link>
        </li>

        <li className="relative group">
          <Link
            to="/category/bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Bicicletas
          </Link>
          <ul className="absolute hidden group-hover:block bg-gray-800 p-2 space-y-2">
            <li>
              <Link
                to="/category/bicicletas/ruta"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Ruta
              </Link>
            </li>
            <li>
              <Link
                to="/category/bicicletas/montana"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Montaña
              </Link>
            </li>
            <li>
              <Link
                to="/category/bicicletas/paseo"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Paseo
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative group">
          <Link
            to="/category/indumentaria"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Indumentaria
          </Link>
          <ul className="absolute hidden group-hover:block bg-gray-800 p-2 space-y-2">
            <li>
              <Link
                to="/category/indumentaria/camiseta"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Camiseta
              </Link>
            </li>
            <li>
              <Link
                to="/category/indumentaria/casco"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Casco
              </Link>
            </li>
            <li>
              <Link
                to="/category/indumentaria/guante"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Guante
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative group">
          <Link
            to="/category/componentes"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Componentes y Accesorios
          </Link>
          <ul className="absolute hidden group-hover:block bg-gray-800 p-2 space-y-2">
            <li>
              <Link
                to="/category/componentes/freno"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Frenos
              </Link>
            </li>
            <li>
              <Link
                to="/category/componentes/llantas"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
              >
                Llantas
              </Link>
            </li>
            <li>
              <Link
                to="/category/componentes/plato"
                className="text-gray-400 hover:text-white transition duration-200 text-lg"
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
