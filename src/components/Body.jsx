import Slider from "./Slider"
import Textanimation from "./Textanimation"
import outdoorimg from '../assets/images/img7.webp'
import { useAuth } from "../store/auth"

const Body = () => {
  const {notice} = useAuth();
  
  return (
    <div className="px-4 py-2 space-y-6 lg:px-16 lg:space-y-16">
        <div className="w-full flex items-center justify-center mt-3">
          <Slider />
        </div>
        <section className="notice">
          <h1 className="font-bold text-2xl leading-none tracking-wide font-[acta] text-[#2C2E43]">Notice</h1>
          <ol className="py-8 px-4 ring-1 ring-gray-500 rounded-xl mt-5 shadow-md">
            {notice.length == 0 && <p className="text-primary-100 font-semibold">No notice Yet!</p>}
            {notice.map((item)=> {
              return (
                <div key={item._id} className="flex items-center mt-2">
                  <li className="text-[#595260] font-[gilroy]">{item.desc}</li>
                </div>
              )
            })}
          </ol>
        </section>
        <div>
          <div className="text-animation-cont w-full max-h-screen mt-[30px]" id="text-target">
            <Textanimation/>
          </div>
        </div>
        <div className="workshop-cont relative max-h-screen w-full flex">
          <div className="w-1/2 h-full">
            <img src={outdoorimg} alt="outdoor imge" width={400} className="rounded-lg w-[80%]" />
          </div>
          <div className="w-1/2 h-full">
              <h1 className="text-center lg:text-right font-bold font-[acta] text-[4vw] text-[#2C2E43]">OutDoor Workshop</h1>
              <p className="text-center lg:text-right font-semibold font-[gilroy] mt-6 tracking-wide text-[1.6vw] text-[#595260]">At Anjusa, we believe that creativity knows no bounds. That&apos;s why we&apos;ve taken our passion for art beyond the studio walls and into the great outdoors. Join us for our captivating Outdoor Drawing Workshops, where nature becomes both muse and canvas.</p>
          </div>
        </div>
      </div>
  )
}

export default Body