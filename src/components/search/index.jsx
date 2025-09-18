import React from 'react'
import "./style.css";
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (

    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
        <input type='text' placeholder='search here...' className='w-[100%] h-[35px] focus:outline-none bg-inherit p-2 text-[15px]'/>
        <Button className='!absolute top-[7px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black !text-[20px]'><FaSearch className='text-black' /></Button>
    </div>
  )
}

export default Search
