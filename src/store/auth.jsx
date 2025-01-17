import { createContext, useContext, useEffect, useState } from "react";
import { NoticeContext } from "./noticeContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { serverUrl } = useContext(NoticeContext);

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  console.log(user)
  
  const isLoggedIn = !!token;

  const checkAdmin = () => {
    if (user && user.role === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  const storeToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const userAuthentication = async () => {
    if (!token) return;
  
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user/userinfo`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to authenticate user");
      }
  
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Authentication error:", error.message);
      logout(); 
    }
  };
  
  const logout = () => {
    setUser(null);
    setToken(null);
    setAdmin(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    userAuthentication();
  }, [token]); // Run authentication whenever token changes

  useEffect(() => {
    checkAdmin();
  }, [user]); // Run checkAdmin whenever user changes

  return (
    <AuthContext.Provider value={{ storeToken, user, isLoggedIn, logout, admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
