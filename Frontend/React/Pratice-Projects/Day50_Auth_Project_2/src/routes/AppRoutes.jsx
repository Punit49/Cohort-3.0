import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthProtection from './AuthProtection'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import AppProtection from './AppProtection'
import Users from '../components/Users'
import Products from '../components/Products'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthProtection />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        }, {
                            path: "register",
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/main", 
            element: <AppProtection />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        }, {
                            path: "users",
                            element: <Users />
                        }, {
                            path: "products",
                            element: <Products />
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default AppRoutes
