import { createContext, useContext, useState } from "react";

const StateContext = createContext(null);


export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ user_no: 2 });
    const [userToken, setUserToken] = useState();

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
