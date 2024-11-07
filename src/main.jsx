import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import { ToastContainer } from "react-toastify";
import { NoticeProvider } from "./store/noticeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoticeProvider>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
    </NoticeProvider>
  </React.StrictMode>
);
