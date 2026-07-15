import React from "react";

const Navbar = ({ setIsFormVisible }) => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-indigo-600">User Manager</h1>

      <button
        onClick={() => setIsFormVisible(true)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition"
      >
        + Create User
      </button>
    </nav>
  );
};

export default Navbar;
