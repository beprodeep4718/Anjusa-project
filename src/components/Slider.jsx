// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


//import images 
import slide_img1 from '../assets/images/WhatsApp Image 2024-07-19 at 23.07.20_8d93ccfd.webp'
import slide_img2 from '../assets/images/WhatsApp Image 2024-07-19 at 23.07.20_91ae0e1f.webp'
import slide_img3 from '../assets/images/WhatsApp Image 2024-07-19 at 23.07.20_9ef06dd0.webp'
import slide_img4 from '../assets/images/img4.webp'
import slide_img5 from '../assets/images/img5.webp'
import slide_img6 from '../assets/images/img6.webp'
import slide_img7 from '../assets/images/img7.webp'
import slide_img8 from '../assets/images/img8.webp'
import slide_img9 from '../assets/images/img9.webp'
import slide_img10 from '../assets/images/img10.webp'


// import required modules
import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide_img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_img10} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider