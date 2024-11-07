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
import AllNotice from "./pages/AllNotice";
import Login from "./pages/Login";

const App = () => {
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
          <Route path="/all-notices" element={<AllNotice />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
