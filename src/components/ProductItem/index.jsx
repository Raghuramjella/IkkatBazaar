import React, { useContext } from 'react';
import "./style.css";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MyContext } from '../../App';

const ProductItem = () => {

    const context = useContext(MyContext);

  return (
    <div className='productItem rounded-md shadow-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)] relative'>
        <div className='group imagewrap w-[100%]  rounded-md border-2 border-[rgba(0,0,0,0.1)]'>
           <a>
            <div className='img h-[220px] overflow-hidden'>
                 <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70" className='w-full'/>
            </div>
           </a>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg text-[12px] p-1'>20%</span>

            <div className='actions absolute transition-all top-[-120px] right-[15px] z-50 flex items-center gap-1 flex-col w-[30px] group-hover:top-[15px]'>
                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group' onClick={() => {context.setOpenProductDetails1(true)}}>
                    <FaEye className='text-[18px] text-black hover:text-white'/>
                </Button>

                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group'>
                    <CiHeart className='text-[18px] text-black hover:text-white'/>
                </Button>

                <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group'>
                    <IoBagOutline className='text-[18px] text-black hover:text-white'/>
                </Button>
            </div>
        </div>

        <div className='info p-3 bg-[#f1f1f1]'>
            <h6 className='text-[13px]'><a href='/' className='link transition-all'>hello mobile</a></h6>
            <h3 className='text-[14px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)] mb-1'><a href="/" className='link transition-all'>Its a good mobile made by me brohggk</a></h3>
            <Rating name="size-small" defaultValue={2} size='small' readOnly/>

            <div className='flex items-center gap-3'>
                <span className='oldprice line-through text-gray-500 text-[16px] font-bold'>₹1400</span>
                <span className='oldprice text-primary font-bold'>₹1200</span>
            </div>
        </div>
      
    </div>
  )
}

export default ProductItem
