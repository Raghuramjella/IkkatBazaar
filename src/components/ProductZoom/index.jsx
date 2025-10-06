import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';


const ProductZoom = () => {
    const [bigSwiper, setBigSwiper] = React.useState(null);
    const [thumbSwiper, setThumbSwiper] = React.useState(null);

    const goto = (index) => {
        if (bigSwiper) bigSwiper.slideTo(index);
        if (thumbSwiper) thumbSwiper.slideTo(index);
    };

    return (
        <>
            <div className='flex gap-3'>
                <div className='slider w-[30%] h-[350px]'>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSwiper h-full hide-zoom-indicator"
                        onSwiper={setThumbSwiper}
                    >
                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(0)}>
                                <img src="/icon.png" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(1)}>
                                <img src="https://m.media-amazon.com/images/I/71VyYAzJoFL._SX569_.jpg" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(2)}>
                                <img src="https://m.media-amazon.com/images/I/71-OdVpJE+L._SX679_.jpg" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(3)}>
                                <img src="/icon.png" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(4)}>
                                <img src="https://m.media-amazon.com/images/I/71VyYAzJoFL._SX569_.jpg" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='item group h-[80px] flex items-center justify-center rounded-md overflow-hidden border border-gray-300 '
                                onClick={() => goto(5)}>
                                <img src="https://m.media-amazon.com/images/I/71-OdVpJE+L._SX679_.jpg" className="w-full h-full object-contain transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className='zoomContainer w-[59%] h-full flex items-center justify-center bg-white overflow-hidden rounded-md'>

                    <Swiper
                        
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                        onSwiper={setBigSwiper}
                    >
                        <SwiperSlide>
                            <InnerImageZoom
                                src="/icon.png"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom
                                src="https://m.media-amazon.com/images/I/71VyYAzJoFL._SX569_.jpg"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom
                                src="https://m.media-amazon.com/images/I/71-OdVpJE+L._SX679_.jpg"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom
                                src="/icon.png"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom
                                src="https://m.media-amazon.com/images/I/71VyYAzJoFL._SX569_.jpg"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom
                                src="https://m.media-amazon.com/images/I/71-OdVpJE+L._SX679_.jpg"
                                zoomType='hover'
                                zoomScale={1}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductZoom
