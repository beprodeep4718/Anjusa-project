import { createContext, useEffect, useState } from "react";

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const serverUrl = "https://anjusa-backend.onrender.com";

  const getNotice = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${serverUrl}/api/notices`);
      if (!response.ok) {
        throw new Error("Failed to get notices");
      }
      const data = await response.json();
      setLoading(false);
      if (!data) {
        setNotice([{ desc: "No notices found" }]);
        return; // Return early if no data is received. This prevents unnecessary API calls.  // This is a good practice to prevent potential bugs.
      }
      setNotice(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getNotice();
  }, []);
  return (
    <NoticeContext.Provider value={{ notice, serverUrl, loading, getNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};
