import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  const head = "Anjusa";
  const splitText = head.split("");

  useGSAP(() => {
    gsap.from(".header span", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      delay: 0.5,
    });
    gsap.from(".header-line", {
      width: 0,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 1.5,
    })
  });

  return (
    <div className="w-full px-8 text-center py-4 top-0 z-50">
      <h1 className="font-[acta] text-6xl header overflow-hidden">
        {splitText.map((item, index) => (
          <span key={index} className="inline-block">
            {item}
          </span>
        ))}
      </h1>
      <div className="w-full mt-2 h-[1px] bg-zinc-900 header-line"></div>
    </div>
  );
};

export default Navbar;
