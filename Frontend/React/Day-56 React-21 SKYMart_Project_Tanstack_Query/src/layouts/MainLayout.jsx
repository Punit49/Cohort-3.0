import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='text-white min-h-screen p-8 text-3xl bg-gray-950'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
