import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../MainLayout'
import App from '../App'
import { getUsers } from '../apis/userApi';

const About = lazy(() => import("../About"));
const Contact = lazy(() => import("../Contact"));

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <App />
                }, 
                {   
                    path: "about",
                    loader: getUsers, 
                    hydrateFallbackElement: (
                        <h1>Loading Users data from api...</h1>
                    ),
                    element: (
                        <Suspense fallback={<h1>Loading About...</h1>}>
                            <About />
                        </Suspense>
                    )
                }, {
                    path: "contact",
                    element: (
                        <Suspense fallback={<h1>Contact Load hora hai...</h1>}>
                            <Contact />
                        </Suspense>
                    )
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
