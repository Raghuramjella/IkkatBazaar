import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import QtyBox from '../../components/Qtybox';
import { Button, Rating } from '@mui/material';

const ProductDetailsComponent = () => {
    return (
        <>
            <h1 className='text-[24px] font-[600] mb-2'>Double Ikkat Silk Saree </h1>
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-[13px]'>
                Sold by: <span className='text-black font-[500] opacity-75'>Kalanikethan</span>
              </span>
              <Rating name="size-small" defaultValue={2} size='small' readOnly />
              <span className='text-[13px] cursor-pointer text-gray-400'>Review(5)</span>
            </div>

            <div className='flex items-center gap-3 mt-4'>
              <span className='oldprice line-through text-gray-500 text-[22px] font-bold'>₹1400</span>
              <span className='oldprice text-primary font-bold text-[22px]'>₹1200</span>
            </div>

            <div className='mt-4'>
              <span className='text-[14px] font-[500] text-gray-500 '>Available in Stock: <span className='text-green-600'>147 items</span></span>
            </div>


            <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dignissimos natus quasi nesciunt,
              repellat, at porro iure maxime consequatur molestiae veritatis ea quaerat molestias delectus eaque
              doloribus harum nobis enim.
            </p>


            <p className='text-[14px] mt-5'>Free shipping (Est. Delivery Time 5-7 Days)</p>
            <div className='flex items-center mt-2 gap-4 py-4'>
              <div className='qtyBoxWrap w-[25%]'>
                <QtyBox/>
              </div>

              <Button className='btn-org flex gap-2'><BsCart3 className='text-[22px]' />Add to Cart</Button>
            </div>

            <div className='flex items-center gap-4 mt-6'>
              <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><FaRegHeart className='text-[18px]' /> Add to Wishlist</span>
            </div>

        </>
    )
}

export default ProductDetailsComponent
