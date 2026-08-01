import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { MyStore } from '../context/AppContext'

const AuthProtection = () => {

    const { loggedInUser } = useContext(MyStore);

    if(loggedInUser){
        return history.back(); // returns backs to where the user came - 
    }

    return <Outlet />
}

export default AuthProtection;
