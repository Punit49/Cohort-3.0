import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../shared/Home"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import Profile from "../features/profile/Profile"

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />, 
        },
        {
            path: 'profile', 
            element: <Profile />
        },
        {
            path: 'auth',
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

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes