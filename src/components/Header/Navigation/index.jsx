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
        <nav className='p-2'>
        <div className='container flex items-center justify-end gap-5'>
            <div className='col1 w-[20%]'>
                <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                    <IoMenuSharp className='text-[18px]'/>
                    <b>Categories</b>
                    <GoTriangleDown className='text-[12px] ml-auto font-bold'/>
                </Button>
            </div>

            <div className='col2 w-[80%]'>
                <ul className='flex items-center gap-10 nav'>
                    <li className='list-none'>
                        <a href='/' className=' link transition text-[16px] font-[500]'></a>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Fabric</a>

                        <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Cotton Fabric</Button>
                                        </a>
                                    </li>
                                
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Kalamkari Fabric</Button>
                                        </a>
                                    </li>
                                    

                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Silk Fabric</Button>
                                        </a>
                                    </li>
                            </ul>

                        </div>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Sarees</a>

                        <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Cotton Saree</Button>
                                        </a>
                                    </li>
                                    
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Silk Saree</Button>
                                        </a>
                                    </li>
                            </ul>

                        </div>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Salwar sets</a>

                        <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Cotton Salwar sets</Button>
                                        </a>
                                    </li>
                                    
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Silk Salwar sets</Button>
                                        </a>
                                    </li>
                            </ul>

                        </div>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Dupattas</a>
                        <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                            <ul>
                                
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Cotton Duppatas</Button>
                                        </a>
                                    </li>
                                    
                                    <li className='list-none w-full'>
                                        <a href="/" className='w-full'>
                                           <Button className='!text-[rgba(0,0,0,0.87)] w-full !text-left !justify-start !rounded-none' >Silk Duppatas</Button>
                                        </a>
                                    </li>
                            </ul>

                        </div>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Combo</a>
                    </li>

                    <li className='list-none relative'>
                        <a href='/' className=' link transition text-[16px] font-[500]'>Accessories</a>
                    </li>

                    <li className='list-none relative'>
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
