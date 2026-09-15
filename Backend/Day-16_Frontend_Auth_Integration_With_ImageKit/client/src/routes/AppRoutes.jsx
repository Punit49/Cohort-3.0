import React, { useContext, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../shared/Home'
import Profile from '../features/profile/Profile'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import ProfileLayout from '../layouts/ProfileLayout'
import useAPI from '../features/auth/hooks/useApi'
import { MyStore } from '../context/ContextProvider'
 
const AppRoutes = () => {
    const API = useAPI();
    const {setUser, accessToken} = useContext(MyStore);
    
    const getUserAccessToken = async () => {
        try {
            const res = await API.get("/auth/me");
            setUser(res.data.user);
        } catch (error) {
            console.error(`Error in getting access token - ${error.message}`);
        }
    } 

    useEffect(() => {
        getUserAccessToken();
    }, []);

    const router = createBrowserRouter([
        {
            path: "/", 
            element: <Home /> 
        },
        { 
            path: "profile",
            element: <ProfileLayout />,
            children: [
                    {
                    path: "",
                    element: <Profile />
                }
            ]
        }, 
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes