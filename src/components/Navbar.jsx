import { useGSAP } from "@gsap/react";
import logo from "../assets/images/output-onlinepngtools.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".header-line", {
      width: 0,
      duration: 0.6,
      delay: 1,
    });
    gsap.from(".header-line-v", {
      height: 0,
      duration: 0.6,
      delay: 1,
    });
    gsap.to(".nav", {
      backgroundColor: "rgba(39, 39, 42, 0.8)",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
      },
    });
  });
  const [close, setclose] = useState(false);
  const menuRef = useRef(null);
  useGSAP(() => {
    if (close) {
      gsap.to(menuRef.current, { left: 0, duration: 0.5, ease: "power3.inOut" });
    } else {
      gsap.to(menuRef.current, {
        left: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [close]);

  const {isLoggedIn, admin} = useAuth();

  return (
    <div className="nav fixed z-50 backdrop-blur-sm top-0 left-0 w-full px-5 py-1">
      <div className="w-full pt-2 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-24" />
        <div className="flex items-start">
          <div className="w-[1px] h-8 bg-zinc-200 header-line-v"></div>
          <i
            className="ri-menu-line text-2xl pl-6 cursor-pointer"
            onClick={() => setclose(!close)}
          ></i>
        </div>
      </div>
      <div className="w-full h-[1px] bg-zinc-200 header-line mt-2"></div>

      <div
        ref={menuRef}
        className="fixed top-0 -left-full w-1/2 h-screen bg-zinc-800 py-10 px-5 lg:px-10"
      >
        <i
          className="ri-close-large-line text-2xl"
          onClick={() => setclose(!close)}
        ></i>
        <div className="mt-5 flex flex-col gap-5 lg:text-2xl">
          <Link
            to="/"
            className="font-semibold text-gray-300"
            onClick={() => setclose(!close)}
          >
            Home
          </Link>
          {admin && <Link
            to="/admin"
            className="font-semibold text-gray-300"
            onClick={() => setclose(!close)}
          >
            Admin Panel
          </Link>}
          {!isLoggedIn && <Link
            to="/login"
            className="font-semibold text-gray-300"
            onClick={() => setclose(!close)}
          >
            Log In
          </Link>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
