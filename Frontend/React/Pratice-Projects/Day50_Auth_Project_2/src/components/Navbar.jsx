import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router"
import Home from "./Home";
import About from "./Users";
import Contact from "./Products";
import { MeraStore } from '../context/AppContext';

const Navbar = () => {

  const {user, setUser} = useContext(MeraStore);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    return navigate("/");
  }

  return (
    <div className='bg-white h-screen text-black border-r flex flex-col gap-15 p-4'>
      <h1 className='text-center text-blue-600 text-4xl font-extrabold border-b pb-5 mt-6'>Shopify</h1>

      <div className='flex flex-col gap-6 py-5 text-lg text-center h-full justify-between'>
        <div className='flex gap-6 flex-col'>
          <NavLink className={({isActive}) => 
            `border-b border-b-gray-500 ${isActive ? "text-blue-600 font-bold"  : "text-gray-500"}` 
          } to={"/main"} end >Home</NavLink>
          <NavLink className={({isActive}) => 
            `border-b border-b-gray-500 ${isActive ? "text-blue-600 font-bold"  : "text-gray-500"}`
          } to={"/main/users"}>Users</NavLink>
          <NavLink className={({isActive}) => 
            `border-b border-b-gray-500 ${isActive ? "text-blue-600 font-bold"  : "text-gray-500"}`
          } to={"/main/products"}>Products</NavLink>
        </div>

        <div>
            {
              user && <button className='text-white text-xl font-bold cursor-pointer w-full py-3 bg-blue-600' onClick={() => handleLogout()}>Logout</button> 
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar
