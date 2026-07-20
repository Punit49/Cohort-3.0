import React from "react";
import { useContext } from "react";
import { MyStore } from "../Context/ProductContext";

const Navbar = () => {

    const { setIsCartOpen } = useContext(MyStore);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          ShopNest
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li onClick={() => setIsCartOpen(false)} className="cursor-pointer hover:text-purple-600 transition">
            Products
          </li>
          <li onClick={() => setIsCartOpen(true)} className="cursor-pointer hover:text-purple-600 transition">
            Cart
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;