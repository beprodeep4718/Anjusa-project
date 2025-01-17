import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Notfound from "./pages/Notfound";
import "react-toastify/dist/ReactToastify.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import NoticePage from "./pages/NoticePage";
import Login from "./pages/Login";
import { useAuth } from "./store/auth";

const App = () => {
  const {admin} = useAuth();
  useEffect(() => {
    injectSpeedInsights();
    inject();
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notices/:id" element={<NoticePage />} />
          <Route path="/admin" element={admin ? <Admin /> : <Login/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
