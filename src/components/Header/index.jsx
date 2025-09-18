import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { HiShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';

import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (

    <header className='bg-white'>
      <div className='top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='col1 w-[50%]'>
              <p className='text-[12px] font-[500]'>Get upto 50% off new season styles, limited time only</p>
            </div>
            
            <div className='col2 flex items-center justify-end'>
              <ul className='flex item-center gap-2'>
                <li className='list-none'>
                    <a href="/help-center" 
                    className='text-[13px] link font-[500] transition'>
                    Help Center
                    </a>
                </li>

                <li className='list-none'>
                    <a href="/order-tracking" 
                    className='text-[13px] link font-[500] transition'>
                     Order Tracking
                    </a>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className='header py-3 border-b-[1px] border-gray-300'>
        <div className='container flex items-center justify-between'>

          <div className='col1 w-[30%]'>
            <a href={'/'}><img src="/src/components/Header/hi.png" width={150} height="auto"/></a> 
          </div>

          <div className='col2 w-[40%]'>
            <Search />
          </div>

          <div className='col3 w-[30%] flex items-center pl-7'>
            <ul className='flex items-center justify-end gap-3 w-full'>
              <li className='list-none'>
                <a href="/login" className='link transition text-[15px]'>Login</a> | <a href="/register" className='link transition text-[15px]'>Register</a>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart/>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <HiShoppingCart/>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Become a Seller">
                  <IconButton aria-label="cart">
                    <StyledBadge color="secondary">
                      <IoHomeOutline/>
                    </StyledBadge>
                  </IconButton>  
                </Tooltip>        
              </li>

            </ul>
          </div>

        </div>
      </div>

      <Navigation/>

    </header>
  )
}

export default Header
