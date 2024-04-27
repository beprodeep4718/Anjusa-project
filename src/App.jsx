
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Textanimation from "./components/Textanimation";
import Footer from "./components/Footer";
import outdoorimg from './assets/images/img7.webp'

const App = () => {
  return (
    <div className="w-full bg-zinc-200 overflow-hidden">
      <Navbar name="bepro"/>
      <div className="w-full flex items-center justify-center mt-3">
        <Slider />
      </div>
      <div>
        <div className="text-animation-cont w-full max-h-screen p-16 mt-[30px]" id="text-target">
          <Textanimation/>
        </div>
      </div>
      <div className="workshop-cont relative max-h-screen w-full flex p-16">
        <div className="w-1/2 h-full">
          <img src={outdoorimg} alt="outdoor imge" width={400} className="rounded-lg w-[80%]" />
        </div>
        <div className="w-1/2 h-full">
            <h1 className="font-bold font-[acta] text-[4vw] text-[#2C2E43]">OutDoor Workshop</h1>
            <p className="font-semibold font-[gilroy] w-[70%] mt-6 tracking-wide text-[1.6vw] text-[#595260]">At Anjusa, we believe that creativity knows no bounds. That&apos;s why we&apos;ve taken our passion for art beyond the studio walls and into the great outdoors. Join us for our captivating Outdoor Drawing Workshops, where nature becomes both muse and canvas.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
