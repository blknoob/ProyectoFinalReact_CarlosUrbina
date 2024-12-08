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
        <li>
          <Link
            to="/category/vestimenta+bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Vestimenta Bicicleta
          </Link>
        </li>
        <li>
          <Link
            to="/category/componentes+bicicleta"
            className="text-gray-400 hover:text-white transition duration-200 text-lg"
          >
            Componentes Bicicleta
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
