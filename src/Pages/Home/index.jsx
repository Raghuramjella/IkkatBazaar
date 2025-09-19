import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiSmileyStickerFill } from "react-icons/pi";


const Home = () => {
  return (
    <>
      <HomeSlider/>  

      <section className="py-5 bg-white mt-5">
        <div className="container">
          <div className='freeShipping w-full p-4 border-[1px] border-black flex items-center justify-between rounded-md mb-5'>
            <div className=' col1 flex items-center gap-5'>
              <LiaShippingFastSolid className='text-[50px]'/>
              <span className='text-[20px] font-[700] uppercase'>Free Shipping</span>
            </div>

            <div className='col2'>
              <p className='mb-0 font-[500]'>Free Delivery on Your First Order</p>
            </div>
            <p className='font-[500]'>10% off on every delivery charge</p>
            <PiSmileyStickerFill className='text-[50px]'/>
          </div>
        </div>

      </section>


      <br/><br/><br/><br/><br/>

    </>
  )
}

export default Home
