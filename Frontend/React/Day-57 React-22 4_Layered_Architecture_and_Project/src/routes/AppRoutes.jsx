import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import MainProtection from './protected/MainProtection'
import MainLayout from '../app/layouts/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import AboutPage from '../shared/ui/pages/AboutPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import ProductsPage from '../features/products/ui/pages/ProductsPage'
import OrdersPage from '../features/orders/ui/pages/OrdersPage'
import AuthProtection from './protected/AuthProtection'
import AuthLayout from '../app/layouts/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'

export const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainProtection />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {   
                            index: true,
                            path: "",
                            element: <HomePage />
                        }, {
                            path: "about",
                            element: <AboutPage />
                        }, {
                            path: "cart",
                            element: <CartPage />
                        }, {
                            path: "products",
                            element: <ProductsPage />
                        }, {
                            path: "orders",
                            element: <OrdersPage />
                        }
                    ]
                }
            ]
        }, 
        {
            path: "auth",
            element: <AuthProtection />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {   
                            path: "login",
                            element: <LoginPage />
                        }, {
                            path: "register",
                            element: <RegisterPage />
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}