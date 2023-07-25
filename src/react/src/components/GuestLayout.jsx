import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { useEffect } from "react";

export default function GuestLayout() {

    const { userToken, setUserToken } = useStateContext();

    if (userToken) {
        return <Navigate to='/' />;
    }

    return (
        <div className="bg-white">
            <Outlet />
        </div>
    )
}
