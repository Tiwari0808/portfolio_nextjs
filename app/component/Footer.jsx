import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-20'>
            <Image src={assets.logo3} width={171} height={57} alt='logo' />
            <div className='flex items-center justify-center gap-1 text-[#797979]'>
                <IoMail />
                <p>divyanshutiwari173@gmail.com</p>
            </div>
            <div className='border-t border-gray-400 w-[80%] flex justify-between mt-10'> 
                    <p>© 2025 Divyanshu Tiwari. All rights reserved.</p>
                    <div className='flex justify-between gap-3'>
                        <p>Terms of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer