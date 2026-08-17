import React, { lazy, Suspense, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainProtection from './protection/MainProtection'
import MainLayout from '../app/layouts/MainLayout'
import AuthProtection from './protection/AuthProtection'
import AuthLayout from '../app/layouts/AuthLayout'
import { useDispatch } from 'react-redux'
import { hydrateUserAction } from '../feature/auth/state/authAction'

const HomePage = lazy(() => import("../shared/ui/pages/HomePage"))
const AboutPage = lazy(() => import("../shared/ui/pages/AboutPage"))
const CartPage = lazy(() => import("../feature/cart/ui/pages/CartPage"))
const ProductsPage = lazy(() => import("../feature/products/ui/pages/ProductsPage"))
const OrdersPage = lazy(() => import("../feature/orders/ui/pages/OrdersPage"))
const LoginPage = lazy(() => import("../feature/auth/ui/pages/LoginPage"))
const RegisterPage = lazy(() => import("../feature/auth/ui/pages/RegisterPage"))

const AppRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        (() => {
            try {
                dispatch(hydrateUserAction());
            } catch (error) {
                console.error("Error in hydratiing user - ", error);
            }
        })()
    });

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainProtection />,
            children: [{
                path: "",
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        index: true,
                        element: <Suspense fallback={<h1>HomePage Is Loading...</h1>}>
                            <HomePage />
                        </Suspense>
                    },{
                        path: "about",
                        element: <Suspense fallback={<h1>AboutPage Is Loading...</h1>}>
                            <AboutPage />
                        </Suspense>
                    },{
                        path: "cart",
                        element: <Suspense fallback={<h1>CartPage Is Loading...</h1>}>
                            <CartPage />
                        </Suspense>
                    },{
                        path: "orders",
                        element: <Suspense fallback={<h1>OrdersPage Is Loading...</h1>}>
                            <OrdersPage />
                        </Suspense>
                    },{
                        path: "products",
                        element: <Suspense fallback={<h1>ProductsPage Is Loading...</h1>}>
                            <ProductsPage />
                        </Suspense>
                    }
                ]
            }]
        },
        {
            path: "auth",
            element: <AuthProtection />,
            children: [{
                path: "",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Suspense fallback={<h1>LoginPage Is Loading...</h1>}>
                            <LoginPage />
                        </Suspense>
                    },{
                        path: "login",
                        element: <Suspense fallback={<h1>RegisterPage Is Loading...</h1>}>
                            <RegisterPage />
                        </Suspense>
                    }
                ]
            }]
        },
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
