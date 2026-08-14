import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainProtection from './protection/MainProtection'
import MainLayout from '../app/Layouts/MainLayout'
const HomePage = lazy(() => import('../shared/ui/pages/HomePage'))
const AboutPage = lazy(() => import('../shared/ui/pages/AboutPage'))
const CartPage = lazy(() => import('../feature/cart/ui/pages/CartPage'))
const ProductsPage = lazy(() => import('../feature/products/ui/pages/ProductsPage' ))
import AuthProtection from './protection/AuthProtection'
import AuthLayout from '../app/Layouts/AuthLayout'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hydrateUserAction } from '../feature/auth/state/authAction'
const LoginPage = lazy(() => import("../feature/auth/ui/pages/LoginPage"))
const RegisterPage = lazy(() => import("../feature/auth/ui/pages/RegisterPage"))

const AppRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        (() => {
            try {
                dispatch(hydrateUserAction());
            } catch (error) {
                console.error("Error in hydrating User -> ", error);
            }
        })()
    }, []);

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
                        element: <Suspense  fallback={<h1>Home Is Loading...</h1>} >
                            <HomePage />
                        </Suspense>
                    }, {
                        path: "about",
                        element: <Suspense fallback={<h1>About Is Loading...</h1>} > 
                            <AboutPage />
                        </Suspense>
                    }, {
                        path: "cart",
                        element: <Suspense  fallback={<h1>Cart Is Loading...</h1>} >
                            <CartPage />
                        </Suspense>
                    }, {
                        path: "products",
                        element: <Suspense fallback={<h1>Product Is Loading...</h1>} >
                                    <ProductsPage />
                                </Suspense>
                    }
                ]
            }]
        }, {
            path: "auth",
            element: <AuthProtection />,
            children: [{
                path: "", 
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Suspense fallback={<h1>LoginPage Is Loading...</h1>} > 
                            <LoginPage />
                        </Suspense>
                    }, {
                        path: "register",
                        element: <Suspense fallback={<h1>Signup Page Is Loading...</h1>} >
                             <RegisterPage />
                        </Suspense>
                    }
                ]
            }]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
