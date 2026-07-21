import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoutes = ({children}) => {
    let isAdmin = true;
    if(!isAdmin){
        alert("You don't have access to this route");
        return <Navigate to={"/"} />
    }
    return children;
}

export default ProtectedRoutes
