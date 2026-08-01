import {React, useContext} from 'react'
import { MyStore } from '../context/AppContext'
import { Navigate, Outlet } from 'react-router';
import Navbar from '../components/Navbar';


const ProtectedRoutes = () => {

    const { loggedInUser } = useContext(MyStore);

    if(!loggedInUser){
        alert("Login First");
        return <Navigate to={"/"} />
    }
    return <Outlet />
}

export default ProtectedRoutes
