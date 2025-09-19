import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';



const HomeSlider = () => {
  return (
    <div className="homeSlider">
        <div className="container">

            <Swiper spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className = "item rounded-[20px] overflow-hidden">
                <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="Banner" className="w-full" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className = "item rounded-[20px] overflow-hidden">
                <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="banner2" className="w-full"/>

             </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className = "item rounded-[20px] overflow-hidden">
                <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="banner3" className="w-full"/>
             </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className = "item rounded-[20px] overflow-hidden">
                <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="banner4" className = "w-full"/>
            </div>
        </SwiperSlide>
      </Swiper>

        </div>

    </div>  
  )
}

export default HomeSlider;
