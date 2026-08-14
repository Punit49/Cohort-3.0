import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router'
import { Navigate } from 'react-router'
import useAuthHook from '../../../feature/auth/hooks/useAuthHook'

const Navbar = () => {

    const navigate = useNavigate();
    const { logoutHandler } = useAuthHook();

    return (
        <nav className='flex justify-between p-3 bg-black text-white'>
            <h1>Logo</h1>

            <div className='flex gap-3'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/cart'}>Cart</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/products'}>Products</NavLink>
            </div>

            <button onClick={() => navigate("/auth/login")}>Login</button>
            <button onClick={() => logoutHandler ()}>logout</button>
        </nav>
    )
}

export default Navbar
