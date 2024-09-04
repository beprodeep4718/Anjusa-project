import Navbar from "./components-2/Navbar";
import Footer from "./components/Footer";
import Body from "./components-2/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Notfound from "./components/Notfound";
import 'react-toastify/dist/ReactToastify.css';
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';
import 'remixicon/fonts/remixicon.css';
import { useEffect } from "react";

const App = () => {
  useEffect(()=>{
    injectSpeedInsights();
    inject();
  },[]);

  return (
    <div className="w-full bg-zinc-900 text-zinc-200 min-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
