import Slider from "../components/Slider";
import HeroSec from "../components-2/Hero-sec";
import NoticeSection from "./Notice-Section";
import outdoorimg from "../assets/images/img7.webp"


const Body = () => {

  return (
    <div className="main relative overflow-x-hidden w-full pt-6">
      <div className="w-52 h-52 bg-[#F0A500] absolute rounded-full top-24 -left-32 blur-[100px]"></div>
      <div className="w-52 h-52 bg-[#F0A500] absolute rounded-full top-36 -right-32 blur-[100px]"></div>

      <div className="w-full flex justify-center items-center mt-20">
        <Slider />
      </div>
      <HeroSec />
      <NoticeSection />
      <div className="workshop-cont relative max-h-screen w-full flex px-4 py-6 text-zinc-200">
        <div className="w-1/2 h-full">
          <img
            src={outdoorimg}
            alt="outdoor imge"
            width={400}
            className="rounded-lg w-[80%]"
          />
        </div>
        <div className="w-1/2 h-full">
          <h1 className="text-center lg:text-right font-bold font-[acta] text-[4vw]">
            OutDoor Workshop
          </h1>
          <p className="text-center lg:text-right font-semibold font-[gilroy] mt-6 tracking-wide text-[1.6vw] text-zinc-400">
            At Anjusa, we believe that creativity knows no bounds. That&apos;s
            why we&apos;ve taken our passion for art beyond the studio walls and
            into the great outdoors. Join us for our captivating Outdoor Drawing
            Workshops, where nature becomes both muse and canvas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
