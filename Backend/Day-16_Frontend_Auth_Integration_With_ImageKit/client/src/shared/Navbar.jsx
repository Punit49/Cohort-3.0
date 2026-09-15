import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MyStore } from "../context/ContextProvider";

const Navbar = () => {

  const { user } = useContext(MyStore);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-white tracking-wide">
        <NavLink to={"/"}>App</NavLink>
      </div>
      <div className="flex items-center space-x-6 text-gray-300 text-sm font-medium">
        {
          !user ? (
            <div className="flex gap-6">
                <NavLink to={'/auth/login'} className="hover:text-white transition-colors">Login</NavLink>
                <NavLink to={'/auth/register'} className="hover:text-white transition-colors">Register</NavLink>
            </div>
          ) : (
              <NavLink to={'/profile'} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-gray-600 hover:border-gray-400 transition-colors">
                    <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
                  </div>
              </NavLink>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
