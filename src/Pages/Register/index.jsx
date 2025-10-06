import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12'>
                    <h3 className='text-center text-[26px] text-black'>Sign Up</h3>

                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type='text'
                                id="name"
                                label="Full Name"
                                variant="filled"
                                className='w-full'
                            />
                        </div>

                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type='email'
                                id="email"
                                label="Email-Id"
                                variant="filled"
                                className='w-full'
                            />
                        </div>

                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={showPassword === false ? 'password' : 'text'}
                                id="password"
                                label="Password"
                                variant="filled"
                                className='w-full'
                            />
                            <Button
                                className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword === true ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>



                        <div className='flex items-center w-full mt-3 pt-5 pb-5'>
                            <Button className='btn-org btn-lg w-full'>Sign Up</Button>
                        </div>

                        <p className='text-center text-[15px]'>Already have an Account? <a className='link cursor-pointer text-[16px] font-[600]' href='/login'>Sign In</a></p>


                        <p className='text-center font-[500]'>Or continue with social account</p>
                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'><FcGoogle className='text-[20px]' />Login with Google</Button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Register
