import React from 'react'
import Sidebar from '../../components/Sidebar'
import ProductItem from '../../components/ProductItem';
import Button from '@mui/material/Button';
import { IoGridOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';


const ProductListing = () => {
    const [isItemView, setIsItemView] = React.useState("grid");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <section className='py-5'>
            <div className='bg-white p-3'>
                <div className='container flex gap-3'>
                    <div className='sidebarwrapper w-[20%] h-full bg-white'>
                        <Sidebar />
                    </div>

                    <div className='rightside w-[80%] h-full bg-white py-3 '>

                        <div className='bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between'>
                            <div className='col1 flex items-center gap-3 ItemViewActions'>
                                <Button
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${isItemView === 'grid' && 'active'}`}
                                    onClick={() => setIsItemView("grid")}
                                >

                                    <IoGridOutline />
                                </Button>
                                <Button
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${isItemView === 'list' && 'active'}`}
                                    onClick={() => setIsItemView("list")}
                                >
                                    <HiMenu />
                                </Button>

                                <span className='text-[14px] text-gray-600'>Showing 170 results</span>
                            </div>

                            <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                                <span className='text-[14px] text-gray-600'>Sort by</span>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-[#000]'
                                >
                                    relevance
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-[#000]'>Name A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-[#000]'>Name Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-[#000]'>Price high to low</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !text-black !capitalize !border-2 !border-[#000]'>Price low to high</MenuItem>
                                </Menu>

                            </div>


                        </div>
                        <div className={`grid ${isItemView === 'grid' ? 'grid-cols-4 md:grid-cols-4 gap-4' : 'grid-cols-1 md:grid-cols-1 gap-4'} `}>
                            {
                                isItemView === "grid" ?
                                    <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </>
                                    :
                                    <>
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />

                                    </>
                            }
                        </div>

                        <div className='flex items-center justify-center mt-10'>
                            <Pagination count={10} color="standard" />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ProductListing
