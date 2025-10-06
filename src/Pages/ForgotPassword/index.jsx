import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { CgPassword } from 'react-icons/cg';
import { MyContext } from '../../App';


const Forgot_Password = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);



    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12'>
                    <h3 className='text-center text-[26px] text-black'>Forgot Password</h3>

                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={showPassword === false ? 'password' : 'text'}
                                id="password"
                                label="New Password"
                                variant="filled"
                                className='w-full'
                                name='name'
                            />
                            <Button
                                type='submit'
                                className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword === true ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={showPassword2 === false ? 'password' : 'text'}
                                id="confirm_password"
                                label="Confirm Password"
                                variant="filled"
                                className='w-full'
                                name="password"
                            />
                            <Button
                                type='submit'
                                className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => setShowPassword2(!showPassword2)}
                            >
                                {
                                    showPassword2 === true ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className='flex items-center w-full mt-3 pt-5 pb-5'>
                            <Button className='btn-org btn-lg w-full'>Change Password</Button>
                        </div>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Forgot_Password
