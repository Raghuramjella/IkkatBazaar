import { Button } from '@mui/material'
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";


const Navigation = () => {
  return (

    <nav className='py-2'>
        <div className='container flex items-center justify-end gap-5'>
            <div className='col1 w-[20%]'>
                <Button className='!text-black gap-2 w-full '>
                    <IoMenuSharp className='text-[18px]'/>
                    Categories
                    <GoTriangleDown className='text-[12px] ml-auto font-bold'/>
                </Button>
            </div>

            <div className='col2 w-[80%]'>
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Home</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Ikkat Cotton Fabric</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Sarees</a>
                    </li>


                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navigation
