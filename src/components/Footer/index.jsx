import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { MdPolicy } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <footer className = "py -6 bg-[#fafafa]"> 
        <div className='container'>
          <div className="flex items-center justify-center gap-2 py-8 pb-5">
            <div className = "col flex items-center justify-center flex-col group w-[20%]">
              <FcOnlineSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
              <h3 className='text-[18px] font-[600] mt-3'>Support 24/7</h3>
            </div>

            <div className = "col flex items-center justify-center flex-col group w-[20%]">
              <FaQuestion className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
              <h3 className='text-[18px] font-[600] mt-3'>FAQ</h3>
            </div>

            <div className = "col flex items-center justify-center flex-col group w-[20%]">
              <FaShippingFast className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
              <h3 className='text-[18px] font-[600] mt-3'>Shipping</h3>
            </div>

            <div className = "col flex items-center justify-center flex-col group w-[20%]">
              <GiReturnArrow className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
              <h3 className='text-[18px] font-[600] mt-3'>Returns</h3>
            </div>

            <div className = "col flex items-center justify-center flex-col group w-[20%]">
              <MdPolicy className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1"/>
              <h3 className='text-[18px] font-[600] mt-3'>Privacy Policy</h3>
            </div>

          </div>

  <hr />

<div className="w-full mt-10 border-t border-gray-300 pt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-600">📍 Address: IkkatBazaar HQ, Hyderabad, India</p>
      <p className="text-gray-600">📞 Phone: +91-9494383217</p>
      <p className="text-gray-600">📧 Email: support@ikkatbazaar.com</p>
      
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
        <a href="#" className="text-gray-600 hover:text-sky-400">Twitter</a>
        <a href="#" className="text-gray-600 hover:text-pink-500">Instagram</a>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-3">Subscribe to get latest offers and product updates</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-l-md border border-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>

<div className="mt-10 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} IkkatBazaar. All Rights Reserved.
</div>

        
        </div>

      </footer>
    </div>
  )
}

export default Footer
