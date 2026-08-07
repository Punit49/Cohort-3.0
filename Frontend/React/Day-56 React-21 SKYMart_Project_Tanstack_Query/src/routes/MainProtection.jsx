import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtection = () => {
    const { user } = useSelector((store) => store.auth);
    
    useEffect(() => {
        if(!user){
            toast.error("Please Login First");
        }
    }, []);

    if(!user){
        return <Navigate to={"/auth/login"} replace />
    }

    return <Outlet />
}

export default MainProtection
