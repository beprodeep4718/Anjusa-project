
import SplitText from "gsap-trial/SplitText"

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


const Textanimation = ({refer}) => {
  // gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(SplitText, ScrollTrigger);

  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     const split = new SplitText(".wrapper p", {
  //       type: "chars",
  //     });
      
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#text-target",
  //         start: "top top",
  //         end: "+=150%",
  //         pin: true,
  //         scrub: 0.75,
  //         markers: false,
  //       }
  //     })
  //       .set(split.chars, {
  //         color: "#000000",
  //         stagger: 0.1,
  //       }, 0.1);
  //   },
  //   {scope: refer}
    
  // );

  return (
    <>
    <div className=" p-5 border-b-2 border-[#CF7500]">
        <h1 className="text-6xl font-[acta] font-bold">Establishment</h1>
    </div>
        <div className="main-text-cont">
          <section id="textSection" className="p-5">
            <div className="container">
              <div className="wrapper">
                <p className="white text-5xl font-[gilroy] font-light leading-[70px]">
                  Our Anjusa Academy started its <br /> journey in 2003 and it has been <br />
                  21 long years since then. <br /> Currently, we are constantly <br /> painting the picture of the future with 400+ students.
                </p>
              </div>
            </div>                                   
          </section>
        </div>
    </>
  )
}

export default Textanimation