import React from 'react'
import ProductZoom from '../../components/ProductZoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductSlider from '../../components/ProductSlider';
import ProductDetailsComponent from '../../components/productDetails';



const Product = () => {

  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <section className='bg-white py-5'>
        <div className="container flex gap-1">
          <div className='product-zoom w-1/2 max-w-[600px]'>
            <ProductZoom />
          </div>

          <div className='product-content w-[60%] pr-10 pl-10'>
            <ProductDetailsComponent/>
          </div>
        </div>


        <div className='container pt-10 pl-10'>
          <div className='flex items-center gap-8 pb-5'>
            <span
              className={`link text-[19px] cursor-pointer font-[500] ${activeTab === 0 && `text-primary`}`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[19px] cursor-pointer font-[500] ${activeTab === 1 && `text-primary`}`}
              onClick={() => setActiveTab(1)}
            >
              Reviews (5)
            </span>
          </div>

          {
            activeTab === 0 && (
              <div className='shadow-md w-full p-5 py-5 px-8 rounded-md'>
                <p>Step into the world of timeless tradition and vibrant artistry with this Ikkat  mubbery Silk Saree,
                  a true masterpiece of handwoven heritage.
                  Crafted with precision by skilled artisans, this saree showcases the rich cultural legacy of Ikkat weaving,
                  known for its intricate dyeing technique and bold, geometric patterns.
                </p>

                <ol>
                  <li><span className='font-[500]'>Saree length :</span>5.5 meters</li>
                  <li><span className='font-[500]'>Blouse Piece :</span>80 centimeters (unstitched)</li>
                  <li><span className='font-[500]'>Fabric Width :</span>47 inches (approx. 119 cm)</li>
                </ol>

                <p className='mt-5'>The luxurious silk drapes gracefully, making it perfect for festive occasions, weddings, or cultural celebrations.
                  With its soft texture and lustrous sheen, this saree blends comfort with sophistication.
                  The accompanying blouse piece allows you to tailor it to your preferred style—classic, modern, or fusion.
                </p>
              </div>
            )
          }

          {
            activeTab === 1 && (
              <div className='shadow-md w-[80%] p-5 py-5 px-8 rounded-md'>
                <div className='w-full productReviewContainer'>
                  <h2 className='text-[18px]'>Customer questions & answers</h2>

                  <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
                    <div className='review w-full pt-5 pb-5 border-b border-black-500 flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="/default1.jpg" className='w-full'></img>
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Raghuram Jella</h4>
                          <h5 className='text-[14px] mb-0'>2025-10-5</h5>
                          <p className='mt-0 mb-0'>Nice Product. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam quisquam repellendus eum cupiditate exercitationem laborum dolor natus vitae quos inventore nulla debitis,
                            veniam quis eaque nesciunt quod eos doloribus consectetur!
                          </p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>

                    <div className='review w-full pt-5 pb-5 border-b border-black-500 flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="/default1.jpg" className='w-full'></img>
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Raghuram Jella</h4>
                          <h5 className='text-[14px] mb-0'>2025-10-5</h5>
                          <p className='mt-0 mb-0'>Nice Product. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam quisquam repellendus eum cupiditate exercitationem laborum dolor natus vitae quos inventore nulla debitis,
                            veniam quis eaque nesciunt quod eos doloribus consectetur!
                          </p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>

                    <div className='review w-full pt-5 pb-5 border-b border-black-500 flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="/default1.jpg" className='w-full'></img>
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Raghuram Jella</h4>
                          <h5 className='text-[14px] mb-0'>2025-10-5</h5>
                          <p className='mt-0 mb-0'>Nice Product. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam quisquam repellendus eum cupiditate exercitationem laborum dolor natus vitae quos inventore nulla debitis,
                            veniam quis eaque nesciunt quod eos doloribus consectetur!
                          </p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>

                    <div className='review w-full pt-5 pb-5 border-b border-black-500 flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="/default1.jpg" className='w-full'></img>
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Raghuram Jella</h4>
                          <h5 className='text-[14px] mb-0'>2025-10-5</h5>
                          <p className='mt-0 mb-0'>Nice Product. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam quisquam repellendus eum cupiditate exercitationem laborum dolor natus vitae quos inventore nulla debitis,
                            veniam quis eaque nesciunt quod eos doloribus consectetur!
                          </p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>

                    <div className='review w-full pt-5 pb-5 border-b border-black-500 flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="/default1.jpg" className='w-full'></img>
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Raghuram Jella</h4>
                          <h5 className='text-[14px] mb-0'>2025-10-5</h5>
                          <p className='mt-0 mb-0'>Nice Product. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam quisquam repellendus eum cupiditate exercitationem laborum dolor natus vitae quos inventore nulla debitis,
                            veniam quis eaque nesciunt quod eos doloribus consectetur!
                          </p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>


                  </div>

                  <br />

                  <div className='reviewForm bg-[#f5f5f5] p-4 rounded-md'>
                    <h2 className='text-[18px]'>Add a Review</h2>

                    <form className='w-full mt-5'>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Write a Review"
                        className='w-full bg-white'
                        multiline
                        rows={5}
                      />
                      <br /><br />
                      <Rating name='size-small' defaultValue={4} />

                      <div className='flex items-center mt-5'>
                        <Button className='btn-org'>Submit</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
          }



        </div>

        <div className="container pt-10">
          <div className='flex items-center justify-between'>
            <div className='lestsec'>
              <h2 className='text-[30px] font-[600]'>You might Also Like</h2>
              <p className='text-[14px]'>Don't miss the Current Offers</p>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  )
}

export default Product
