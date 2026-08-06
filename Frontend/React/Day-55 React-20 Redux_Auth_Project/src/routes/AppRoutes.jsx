import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainProtection from './MainProtection'
import AuthProtection from './AuthProtection'
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))
const AuthLayout = lazy(() => import('../layouts/AuthLayout'))
const MainLayout = lazy(() => import('../layouts/MainLayout'))
import { Heading1 } from 'lucide-react'
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))

const AppRoutes = () => {

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
                            element: 
                                <Suspense fallback={<h1>Home Is Loading...</h1>}>
                                    <Home />
                                </Suspense>
                        }, {
                            path: "about",
                            element: 
                                <Suspense fallback={<h1>About Is Loading...</h1>}>
                                    <About />
                                </Suspense>
                        }, {
                            path: "contact",
                            element: 
                                <Suspense fallback={<h1>Contact Is Loading...</h1>}>
                                    <Contact />
                                </Suspense>
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
                            element: 
                                <Suspense fallback={<h1>Login Page Is Loading...</h1>}>
                                    <Login />
                                </Suspense>
                        }, {
                            path: "register",
                            element: 
                                <Suspense fallback={<h1>Register Page Is Loading...</h1>}>
                                    <Register />
                                </Suspense>
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
