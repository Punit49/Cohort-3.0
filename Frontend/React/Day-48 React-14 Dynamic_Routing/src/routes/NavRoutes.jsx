import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import ProtectedRoutes from './ProtectedRoutes'

const NavRoutes = () => {

    return (
        <div className='h-[90%] bg-gray-950 text-white'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={
                    <ProtectedRoutes>
                        <About />
                    </ProtectedRoutes>
                } />
                <Route path='/detail/:id' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default NavRoutes
