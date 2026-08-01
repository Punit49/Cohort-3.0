import React, { useContext, useEffect, useEffectEvent } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { MeraStore } from '../context/AppContext';

const AppProtection = () => {

    const navigate = useNavigate();
    const { user } = useContext(MeraStore);
        
    useEffect(() => {
        if(!user){
            navigate("/");
            return alert("Login First");
        }
    }, [user, navigate]);
    
    return <Outlet />
}

export default AppProtection
