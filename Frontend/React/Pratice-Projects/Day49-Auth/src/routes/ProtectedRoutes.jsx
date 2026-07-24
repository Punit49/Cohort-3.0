import {React, useContext} from 'react'
import { MyStore } from '../context/AppContext'
import { Navigate } from 'react-router';

const ProtectedRoutes = ({ children }) => {

    const { loggedInUser } = useContext(MyStore);

    if(loggedInUser) return children;

    else {
        alert("Login First");
        return <Navigate to={"/login"} />
    }
}

export default ProtectedRoutes
