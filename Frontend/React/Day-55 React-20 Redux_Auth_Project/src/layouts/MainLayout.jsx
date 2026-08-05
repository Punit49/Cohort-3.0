import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='p-3 text-3xl'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
