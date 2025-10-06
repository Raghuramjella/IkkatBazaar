import React, { useState } from 'react'
import OTPInput from '../../components/Otpbox';

const Verify = () => {
    const [otp, setOtp] = useState("");
    const handleOtpSubmit = (otpValue) => {
        alert(`Entered OTP is: ${otpValue}`);
        setOtp(otpValue);
    };
    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12'>
                    <div className='flex items-center justify-center mb-5'>
                        <img src='/shield.png' width={'80'} />
                    </div>
                    
                    <h3 className='text-center text-[26px] text-black'>Verify OTP</h3>
                    <p className='text-center'>OTP sent to <span className='text-black font-bold'>ram@gmail.com</span></p>

                    <OTPInput length={4} onSubmit={handleOtpSubmit} />
                    
                </div>

            </div>

        </section>
    )
}

export default Verify;
