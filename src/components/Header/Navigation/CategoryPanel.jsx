import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import "../Navigation/style.css";
import { IoCloseSharp } from "react-icons/io5";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className='text-[20px] p-3 font-[500] flex items-center justify-between'>
        Categories
        <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' />
      </h3>

      <div className='scroll'>
        <ul className='w-full'>
          {/* Fabric Category */}
          <li className='list-none mb-2'>
            <Button
              className='w-full !text-left !justify-start !px-3 !text-black'
              onClick={() => openSubmenu(0)}
            >
              Fabric
            </Button>
            {submenuIndex === 0 && (
              <ul className='submenu pl-3 w-full'>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Cotton Fabric
                    </Button>
                  </a>
                </li>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Kalamkari Fabric
                    </Button>
                  </a>
                </li>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Silk Fabric
                    </Button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Sarees Category */}
          <li className='list-none mb-2'>
            <Button
              className='w-full !text-left !justify-start !px-3 !text-black'
              onClick={() => openSubmenu(1)}
            >
              Sarees
            </Button>
            {submenuIndex === 1 && (
              <ul className='submenu pl-3 w-full'>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Cotton Saree
                    </Button>
                  </a>
                </li>
                
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Silk Saree
                    </Button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Add more categories below as needed */}
          <li className='list-none mb-2'>
            <Button
              className='w-full !text-left !justify-start !px-3 !text-black'
              onClick={() => openSubmenu(2)}
            >
              Salwar-sets
            </Button>
            {submenuIndex === 2 && (
              <ul className='submenu pl-3 w-full'>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Cotton Salwar-sets
                    </Button>
                  </a>
                </li>
                
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Silk Salwar-sets
                    </Button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className='list-none mb-2'>
            <Button
              className='w-full !text-left !justify-start !px-3 !text-black'
              onClick={() => openSubmenu(3)}
            >
              Duppatas
            </Button>
            {submenuIndex === 3 && (
              <ul className='submenu pl-3 w-full'>
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Cotton Duppatas
                    </Button>
                  </a>
                </li>
                
                <li className='list-none'>
                  <a href="/">
                    <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                      Silk Duppatas
                    </Button>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;