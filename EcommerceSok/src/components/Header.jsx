import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  bg-imgHeader bg-center bg-cover h-80 p-6">
      <div className="flex space-x-4 h-24">
        <Link to="/">
          <img
            className="flex flex-row justify-center rounded-full h-16 md:h-20 p-2 border-4 border-black"
            src="/../src/assets/logoSokCores.jpg"
            alt="Logo Sok Cores"
          />
        </Link>
        <Link to="/" className="text-3xl font-bold text-gray-500">Sok Cores</Link>
      </div>

      <CartWidget />
    </div>
  );
};

export default Header;