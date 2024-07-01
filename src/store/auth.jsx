import { createContext, useContext, useEffect, useState } from "react";



export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    //

    const [notice, setNotice] = useState([]);
    const [loading, setLoading] = useState(true);
    const serverUrl = "https://anjusa-backend.onrender.com"

    const getNotice = async () => {
        const response = await fetch(`${serverUrl}/api/auth/notices`);
        if (!response.ok) {
            throw new Error("Failed to get notices");
        }
        const data = await response.json();
        setLoading(false);
        setNotice(data);
    }

    useEffect(() => {
        getNotice();
    })
    return (
        <Authcontext.Provider value={{notice, serverUrl, loading}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth = () => {
    return useContext(Authcontext);
}