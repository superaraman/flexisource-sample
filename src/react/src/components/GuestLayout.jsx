import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

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
