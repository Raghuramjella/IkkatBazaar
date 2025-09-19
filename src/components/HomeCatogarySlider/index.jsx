import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

const HomeCatogarySlider = () => {
  return (
    <div className="homeCatSlider">
        <div className="container">
            <h1>Catogory List</h1>
            <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item p-3 bg-white rounded-sm text-center flex-col justify-center items-center">
            <img src="https://fullstack-ecommerce.netlify.app/products/category/670f544ce86c762e3cad6c8b" alt="silk" />
            <h3 className='mt-2'>Saree</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item p-3 bg-white rounded-sm text-center flex justify-center items-center"> 
            <img src="https://fullstack-ecommerce.netlify.app/products/category/670f544ce86c762e3cad6c8b" alt="ikkat" />
            <h3 className='mt-2'>Ikkat</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

        </div>      
    </div>
  )
}

export default HomeCatogarySlider;
