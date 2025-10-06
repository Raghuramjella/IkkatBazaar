import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
import Product from './Pages/productDetails'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import ProductZoom from './components/ProductZoom';
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsComponent from './components/productDetails'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Verify from './Pages/Verify'
import toast, { Toaster } from 'react-hot-toast';
import Forgot_Password from './Pages/ForgotPassword'

const MyContext = createContext();


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [openProductDetails1, setOpenProductDetails1] = React.useState(false);
  const [maxWidth,] = React.useState('lg');
  const [fullWidth,] = React.useState(true);


  const handleCloseProductDetails1 = () => {
    setOpenProductDetails1(false);
  };

  const openAlertBox =(status, msg) => {
    if(status ==="success"){
      toast.success(msg);
    }
    if(status ==="error"){
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetails1,
    openAlertBox
  };


  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path='/' exact={true} element={<Home />} />
            <Route path='/productListing' exact={true} element={<ProductListing />} />
            <Route path='/product/:id' exact={true} element={<Product />} />
            <Route path='/login' exact={true} element={<Login />} />
            <Route path='/register' exact={true} element={<Register />} />
            <Route path="/verify" exact={true} element={<Verify/>} />
            <Route path="/forgot-password" exact={true} element={<Forgot_Password/>} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />


      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetails1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseProductDetails1}
        aria-describedby="alert-dialog-slide-description"
        className='productDetailModel'
      >
        <DialogContent>
          <div className='flex items-center w-full productDetailModelContainer relative'>
            <Button className='!w-[40px] !h-[40px] !min-h-[40px] !rounded-full !text-black !absolute !top-[0] !right-[0]' onClick={handleCloseProductDetails1}><IoCloseSharp/></Button>
            <div className='col1 w-[40%]'>
              <ProductZoom />
            </div>

            <div className='col2 w-[60%]'>
              <ProductDetailsComponent/>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App;
export {MyContext}
