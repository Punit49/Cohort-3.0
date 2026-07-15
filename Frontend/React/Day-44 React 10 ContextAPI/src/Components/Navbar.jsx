import React from "react";

const Navbar = ({setIsCartOpen}) => {

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex max-w-full px-8 items-center justify-between py-4">

        <h1 className="cursor-pointer text-3xl font-bold">
          Shop<span className="text-blue-600">Kart</span>
        </h1>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <button className="cursor-pointer transition hover:text-blue-600" onClick={() => setIsCartOpen(false)}>
              Home
            </button>
          </li>

          <li className="relative">
            <button onClick={() => setIsCartOpen(true)} className="cursor-pointer transition hover:text-blue-600">
              Cart
            </button>

            <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            </span>
          </li>
        </ul>

        <button className="rounded-lg bg-black px-6 py-2.5 font-medium text-white transition duration-300 hover:bg-gray-800">
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;