import { createContext, useContext, useEffect, useState } from "react";



export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {

    const [notice, setNotice] = useState([]);
    const serverUrl = "https://anjusa-backend.onrender.com"

    const getNotice = async () => {
        const response = await fetch("https://anjusa-backend.onrender.com/api/auth/notices");
        if (!response.ok) {
            throw new Error("Failed to get notices");
        }
        const data = await response.json();
        setNotice(data);
    }

    useEffect(() => {
        getNotice();
    })
    return (
        <Authcontext.Provider value={{notice, serverUrl}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth = () => {
    return useContext(Authcontext);
}