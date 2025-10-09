import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoMail } from "react-icons/io5";

const Footer = ({isDark}) => {
    return (
        <div className='flex px-10   items-center justify-center flex-col  lg:mt-20'>
            <Image src={isDark?assets.logo:assets.logo3} width={171} height={57} alt='logo' className='px-10 md:px-0' />
            <div className='flex items-center justify-center gap-1 text-[12px] text-[#797979]'>
                <IoMail />
                <p>divyanshutiwari173@gmail.com</p>
            </div>
            <div className='border-t border-gray-400 w-[80%] flex flex-col justify-between mt-4 lg:mt-10'> 
                    <p className='text-center text-[12px]'>© 2025 Divyanshu Tiwari. All rights reserved.</p>
                    <div className='hidden justify-between gap-3'>
                        <p>Terms of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer