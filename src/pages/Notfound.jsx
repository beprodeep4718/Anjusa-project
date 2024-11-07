import { Link } from 'react-router-dom'
import NotFound from '../assets/images/404-Error-bro.svg'

const Notfound = () => {
  return (
    <div className="h-screen w-full flex items-center lg:justify-start flex-col justify-center">
      <img src={NotFound} alt="" className='lg:w-1/3 w-full'/>
      <Link to='/' className='px-6 py-4 text-2xl tracking-wide leading-none font-[gilroy] font-bold bg-primary-100 rounded-full shadow-lg hover:bg-primary-50 text-gray-800'>Go Back !</Link>
    </div>
  )
}

export default Notfound