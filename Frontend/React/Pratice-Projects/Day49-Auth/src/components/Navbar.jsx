import React from 'react'
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className='bg-black text-white p-3 border flex justify-between'>
      <NavLink to={"/"} >Home</NavLink>
      <NavLink to={"/about"} >About</NavLink>
      <NavLink to={"/contact"} >Contact</NavLink>
    </div>
  )
}

export default Navbar
