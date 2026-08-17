import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthProtection = () => {

    const { user, isLoading } = useSelector((store) => store.auth);

    if(isLoading) return;

    if(user){
        return <Navigate to={"/"} />
    }

    return <Outlet />
}

export default AuthProtection
