import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router'

const MainProtection = () => {

    const { isAuthenticated, isLoading } = useSelector((store) => store.auth);

    if(isLoading) return;

    if(!isAuthenticated){
        console.log(isLoading)
        return <Navigate to={"/auth/login"} />
    }
    
    return <Outlet />
}

export default MainProtection
