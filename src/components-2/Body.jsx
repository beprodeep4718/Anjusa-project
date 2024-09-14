import Slider from "../components/Slider";
import HeroSec from "../components-2/Hero-sec";
import NoticeSection from "./Notice-Section";
import Workshop from "./Workshop";

const Body = () => {
  return (
    <div className="main relative overflow-x-hidden w-full pt-6 min-h-screen bg-zinc-900">
      <div className="w-52 h-52 bg-[#F0A500] absolute rounded-full top-24 -left-32 blur-[100px]"></div>
      <div className="w-52 h-52 bg-[#F0A500] absolute rounded-full top-36 -right-32 blur-[100px]"></div>

      <div className="w-full flex justify-center items-center mt-20">
        <Slider />
      </div>
      <HeroSec />
      <NoticeSection />
      <div className="relative w-full py-6 px-4">
        <div className="relative w-full mb-10">
          <span className="flex items-center justify-start gap-2 text-3xl">
            <span className="font-[Kausan] text-[#F0A500]">WorkShop</span>
            <span className="font-[gilroy] text-zinc-300">Tour</span>
          </span>
        </div>
        <Workshop />
      </div>
    </div>
  );
};

export default Body;
