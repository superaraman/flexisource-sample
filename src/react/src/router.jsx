import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Index from "./views/Index";



const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            }
        ]
    },
]);

export default router;
