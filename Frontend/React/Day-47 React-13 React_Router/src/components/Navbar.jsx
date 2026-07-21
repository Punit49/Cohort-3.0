import React from 'react'
import { NavLink } from 'react-router';

const Navbar = ({ setPage }) => {

  return (
    <nav className='p-3 flex items-center justify-between'>
      <h1>Logo</h1>
      <div className='flex gap-10'>
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/about"} >About</NavLink>
        <NavLink to={"/contact"} >Contact</NavLink>
      </div>
      <button>Login</button>
    </nav>
  )
}

export default Navbar;
