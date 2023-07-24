import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { useEffect } from "react";

export default function GuestLayout() {

    const { userToken, setUserToken } = useStateContext();

    if (userToken) {
        return <Navigate to='/' />;
    }

    useEffect(() => {
        axiosClient.post('/signup').then(() => {
            console.log('wew');
        }).catch(e => console.log(e));
    }, [])

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                </div>

                <Outlet />
            </div>
        </div>
    )
}
