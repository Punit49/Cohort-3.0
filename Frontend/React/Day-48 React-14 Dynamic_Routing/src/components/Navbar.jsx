import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-[10%] flex justify-between px-4 py-3 bg-gray-800 text-white items-center'>
      <div className="logo text-2xl">Logo</div>
      <nav className='flex gap-10'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          {/* <NavLink to={"/products"}>Products</NavLink>  */}
      </nav>
      <button className='bg-blue-600 px-3 py-1 rounded'>Create User</button>
    </div>
  )
}

export default Navbar
