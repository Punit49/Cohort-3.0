import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoutes>
                        <MainLayout />
                    </ProtectedRoutes>,
            children: [
                {
                    path: "",
                    element: <Home />
                }, 
                {
                    path: "about",
                    element: <About />
                }, 
                {
                    path: "contact",
                    element: <Contact />
                }
            ]
        },
        {
            path: "/",
            element: <AuthLayout />,
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
