import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))
const AuthLayout = lazy(() => import('../layouts/AuthLayout'))
const MainLayout = lazy(() => import('../layouts/MainLayout'))
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "",
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
        },
        {
            path: "auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />
                }, {
                    path: "register",
                    element: <Register />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
