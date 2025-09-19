import { Button } from '@mui/material'
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import CategoryPanel from './CategoryPanel';


const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    
  return (

    <>
        <nav className='py-2'>
        <div className='container flex items-center justify-end gap-5'>
            <div className='col1 w-[20%]'>
                <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                    <IoMenuSharp className='text-[18px]'/>
                    <b>Categories</b>
                    <GoTriangleDown className='text-[12px] ml-auto font-bold'/>
                </Button>
            </div>

            <div className='col2 w-[80%]'>
                <ul className='flex items-center gap-10'>
                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'></a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Fabric</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Sarees</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Salwar sets</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Dupattas</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Combo</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Accessories</a>
                    </li>

                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>more</a>
                    </li>




                </ul>
            </div>

        </div>
        </nav>

        <CategoryPanel setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel}/>
    </>
  )
}

export default Navigation
