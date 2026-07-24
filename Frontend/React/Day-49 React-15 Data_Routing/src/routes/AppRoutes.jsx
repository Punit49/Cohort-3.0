import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from '../components/Navbar';
import MainLayout from '../pages/MainLayout';
import AuthLayout from '../pages/AuthLayout';
import LoginForm from '../components/LoginForm';
import Signup from '../components/Signup';

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }, {
                    path: "about",
                    element: <About />
                }, {
                    path: "contact",
                    element: <Contact />
                }
            ]
        }, {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <LoginForm />
                },
                {
                    path: "register",
                    element: <Signup />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes
