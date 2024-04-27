import logo from "../assets/images/favicon.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
  //https://www.facebook.com/ashim.saha.77582?mibextid=ZbWKwL
  //https://www.youtube.com/@anjusa
  return (
    <>
      <div className="footer w-full p-10 pb-14 flex flex-col items-center justify-center gap-4 flex-wrap bg-[#F0A500] rounded-t-[50px]">
        <div className="footer-head flex items-center justify-center flex-wrap gap-6">
          <div className="logo">
            <img src={logo} alt="logo" width={100} className="rounded-full" />
          </div>

          <h1 className="border-b-2 border-zinc-900 heading text-5xl font-extrabold  pb-4 font-[acta] ">
            Anjusa Art & Computer Academy
          </h1>
        </div>
        <p className="text-4xl font-bold font-[gilroy]">We are social</p>
        <div className="links flex gap-5 ">
          <div className="link border-2 border-zinc-900 rounded-full p-4">
            <a
              href="https://www.facebook.com/ashim.saha.77582?mibextid=ZbWKwL"
              target="_blank"
              className="text-4xl"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="link border-2 border-zinc-900 rounded-full p-4">
            <a
              href="https://www.youtube.com/@anjusa"
              target="_blank"
              className="text-4xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-contact w-full p-[5vw] px-[7vw] bg-[#CF7500]">
        <h1 className="text-[4vw] font-[gilroy] text-bold">Contact Us</h1>
        <div className="contat-links mt-8 text-[1.3vw] font-semibold">
          <span className="flex items-center gap-2 mt-2">
            <IoMdCall /> <p>+91 9775550000</p>
          </span>
          <span className="flex items-center gap-2 mt-2">
            <IoMdMail /> <p>ashim.anjusa@gmail.com</p>
          </span>
          <span className="flex items-center gap-2 mt-2">
            <FaLocationDot /> <p>Kalna, East Burdwan, West Bengal, 713409</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
