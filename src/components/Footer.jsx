import logo from "../assets/images/favicon.jpg"


const Footer = () => {
  return (
    <div className="footer w-full p-10 flex items-center justify-center gap-4 flex-wrap bg-[#F0A500] rounded-t-[50px]">
        <div className="logo">
                <img src={logo} alt="logo" width={100} className="rounded-full"/>
        </div>
        <div className="heading text-5xl font-extrabold border-b-2 border-zinc-700 pb-4 font-[acta]">
            <h1>Anjusa Art & Computer Academy</h1>
        </div>
    </div>
  )
}

export default Footer