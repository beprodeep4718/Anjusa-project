import { useGSAP } from "@gsap/react";
import logo from "../assets/images/output-onlinepngtools.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        scrub: 3
      },
      
    })
  });

  return (
    <div className="nav fixed z-50 backdrop-blur-sm top-0 left-0 w-full px-5 py-1">
      <div className="w-full pt-2 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-24" />
        <div className="flex items-start">
        <div className="w-[1px] h-8 bg-zinc-200 header-line-v"></div>
          <i className="ri-menu-line text-2xl pl-6"></i>
        </div>
      </div>
      <div className="w-full h-[1px] bg-zinc-200 header-line mt-2"></div>
    </div>
  );
};

export default Navbar;
