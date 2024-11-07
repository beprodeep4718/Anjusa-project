import { Link } from "react-router-dom";

const CardWorkshop = ({ data }) => {

  return (
    <div className="card flex flex-col items-center justify-center gap-2">
      <div className="relative h-48 w-full rounded-lg overflow-hidden flex items-center justify-center">
        <img src={data.img} alt="" className="object-cover h-full w-full" />
        <div className="absolute h-full w-full bg-gradient-to-b from-zinc-50/5 to-zinc-900/75"></div>
        <h1 className="absolute bottom-4 left-4  font-[gilroy-light] font-extralight tracking-wide text-xl border-b-[1px]">
          <Link to={'/'}>Explore More ↗</Link>
        </h1>
      </div>
      <div className="w-full px-4 flex items-center justify-between font-[gilroy-light] text-lg">
        <span>{data.place} <i className="ri-map-pin-line"></i></span>
        <span>{data.date} <i className="ri-calendar-event-line"></i></span>
      </div>
      <span className="w-3/4 h-[1px] bg-zinc-600"></span>
    </div>
  );
};

export default CardWorkshop;
