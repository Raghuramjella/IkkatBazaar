import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './style.css';
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { Button, Rating } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <aside className='sidebar py-5'>
            <div className='box'>
                <h3 className=' w-full mb-3 text-[17px] font-[600] flex items-center pr-5'>
                    Filter by 
                    <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black' onClick={()=> setIsOpen(!isOpen)}>
                        {
                            isOpen === true ? <FaAngleDown className='rotate-180' /> : <FaAngleDown />
                        }
                    </Button>
                </h3>

                <Collapse isOpened={isOpen}>
                    <div className='scroll px-4 relative -left-[9px]'>
                        <FormControlLabel control={<Checkbox size='small' />} label="Fabric" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Sarees" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Salwar sets" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Dupattas" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Combo" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Label" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Label" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Label" className='w-full' />
                    </div>
                </Collapse>
            </div>



            <div className='box'>
                <h3 className=' w-full mb-3 text-[17px] font-[600] flex items-center pr-5'>
                    Availability 
                    <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black' onClick={()=> setIsOpen1(!isOpen1)}>
                        {
                            isOpen === true ? <FaAngleDown className='rotate-180' /> : <FaAngleDown />
                        }
                    </Button>
                </h3>

                <Collapse isOpened={isOpen1}>
                    <div className='scroll px-4 relative -left-[9px]'>
                        <FormControlLabel control={<Checkbox size='small' />} label="In stock (170)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Out of stock (2)" className='w-full' />
                    </div>
                </Collapse>
            </div>


            <div className='box mt-5'>
                <h3 className=' w-full mb-3 text-[17px] font-[600] flex items-center pr-5'>
                    Price
                </h3>
                <RangeSlider/>
                <div className='d-flex pt-4 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong> Rs: {100}</strong>
                    </span>

                     <span className='ml-auto text-[13px]'>
                        To: <strong> Rs: {1000}</strong>
                    </span>
                </div>
            </div>


            <div className='box mt-5'>
                <h3 className=' w-full mb-3 text-[17px] font-[600] flex items-center pr-5'>
                    Rating
                </h3>
                <div className='w-full'>
                    <Rating name='size-small' defaultValue={5} size='small' readOnly/>
                </div>
                <div className='w-full'>
                    <Rating name='size-small' defaultValue={4} size='small' readOnly/>
                </div>
                <div className='w-full'>
                    <Rating name='size-small' defaultValue={3} size='small' readOnly/>
                </div>
                <div className='w-full'>
                    <Rating name='size-small' defaultValue={2} size='small' readOnly/>
                </div>
               
            </div>
        </aside>
    )
}

export default Sidebar
