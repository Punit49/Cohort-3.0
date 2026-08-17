import React from 'react'
import { NavLink } from 'react-router'
import useAuthHook from '../../../feature/auth/hooks/useAuthHook'
import { Box, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const { logoutHandler } = useAuthHook();

    return (
        <nav className='w-full bg-gray-950 text-white px-8 py-4 flex items-center justify-between shadow-lg'>
            <h1 className='text-2xl font-bold tracking-wide'>
                Logo
            </h1>

            <div className='flex items-center gap-8'>
                <NavLink
                    className='text-gray-300 hover:text-white transition duration-200'
                    className={({isActive}) => isActive ? "text-red-700 font-bold" : "text-white" }
                    to='/'
                    end
                >
                    Home
                </NavLink>

                <NavLink
                    className='text-gray-300 hover:text-white transition duration-200'
                    className={({isActive}) => isActive ? "text-red-700 font-bold" : "text-white" }
                    to='/products'
                >
                    Shop
                </NavLink>

                <NavLink
                    className='text-gray-300 hover:text-white transition duration-200'
                    className={({isActive}) => isActive ? "text-red-700 font-bold" : "text-white" }
                    to='/about'
                >
                    About
                </NavLink>
            </div>

            <div className='flex items-center gap-6'>
                <NavLink className={({isActive}) => isActive ? "text-red-700 font-bold" : "text-white" } to={"/cart"}>
                    <ShoppingCart className='cursor-pointer' />
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-700 font-bold" : "text-white" } to={"/orders"}>
                    <Box className='cursor-pointer' />
                </NavLink>
                <button
                    onClick={() => logoutHandler()}
                    className='px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition duration-200'
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar