import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='grid w-full grid-cols-[1fr_6fr] h-screen'>
        <Navbar />
        <div className='p-3 text-lg overflow-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
