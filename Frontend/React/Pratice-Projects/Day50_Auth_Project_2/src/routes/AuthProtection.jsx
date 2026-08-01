import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MeraStore } from '../context/AppContext'

const AuthProtection = () => {
    const { user } = useContext(MeraStore);
    
    if(user){
        return <Navigate to={"/main"} />;
    }

    return <Outlet />
}

export default AuthProtection;
