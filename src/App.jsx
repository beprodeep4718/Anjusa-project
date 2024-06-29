import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Notfound from "./components/Notfound";
import 'react-toastify/dist/ReactToastify.css';
import { inject } from "@vercel/analytics"

const App = () => {
  inject();
  return (
    <div className="w-full bg-zinc-200 overflow-hidden">
      <Navbar name="bepro" />
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
