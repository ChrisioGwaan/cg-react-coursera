import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold hover:text-gray-400">
        CG Plant Store 🍀
      </Link>

      <nav className="flex space-x-6">
        <Link to="/products" className="hover:text-gray-400">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-400">
          Shopping Cart
        </Link>
      </nav>

      <Link to="/cart" className="relative">
        <FaShoppingCart size={28} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-2">
            {cart.length}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;
