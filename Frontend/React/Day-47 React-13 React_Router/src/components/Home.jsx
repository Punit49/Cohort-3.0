import React from 'react'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div className='flex gap-10'>
      <h1>Home Section</h1>

      <NavLink to={"/profile"} className='bg-red-400'>Go to profile</NavLink>

      <Outlet />
    </div>
  )
}

export default Home;
