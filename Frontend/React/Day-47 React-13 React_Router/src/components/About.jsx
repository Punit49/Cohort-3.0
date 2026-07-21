import React from 'react'
import { NavLink, Outlet } from 'react-router'

const About = () => {
  return (
    <div className='flex gap-10 flex-col'>
      <h1>About Section</h1>

      <NavLink to={"/about/nested"}>Nested about dikhao</NavLink>
      
      <Outlet />
    </div>
  )
}

export default About
