import { useRef } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Textanimation from "./components/Textanimation";
import Footer from "./components/Footer";

const App = () => {
  const container = useRef(null);
  return (
    <div className="w-full bg-zinc-200 overflow-hidden">
      <Navbar name="bepro"/>
      <div className="w-full flex items-center justify-center mt-3">
        <Slider />
      </div>
      <div ref={container}>
        <div className="w-full max-h-screen p-16 mt-10" id="text-target">
          <Textanimation refer={container}/>
        </div>
      </div>
      {/* <div className="h-screen w-full">

      </div> */}
      <Footer />
    </div>
  );
};

export default App;
