import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <header className="bg-imgHeader bg-center bg-cover h-64">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-full mx-auto p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              className="h-16 w-16 rounded-full border-2 border-black object-contain"
              src="/images/logoSokCores2.jpg"
              alt="Logo Sok Cores"
            />
          </Link>
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition"
          >
            Sok Cores
          </Link>
        </div>

        <div className="ml-auto">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
