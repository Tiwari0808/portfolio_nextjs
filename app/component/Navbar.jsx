"use client"

import { assets } from '@/assets/assets'
import { motion } from 'framer-motion';
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='fixed w-full bg-white bg-opacity-80 backdrop-blur-md z-50'>
                <div className='flex items-center justify-between px-5 md:px-[60px] mt-[21px] gap-5'>
                    <div className='cursor-pointer'>
                        <Image alt='logo' priority src={assets.logo} className='w-[130px] h-[42px] md:w-[171px] md:h-[55px] bg-cover bg-center' />
                    </div>
                    <ul className='hidden md:flex text-[#2F2F2F] text-[17px] bg-white shadow bg-opacity-50 rounded-[100px] items-center justify-around w-[713px] h-[60px] border-[1px] border-[#FFFFFF80] '>
                        <li className={`hover:underline`}>Home</li>
                        <li>About me</li>
                        <li>Services</li>
                        <li>My work</li>
                        <li>Testimonials</li>
                    </ul>
                    <div className='flex items-center justify-between gap-5'>
                        <a href=""><Image alt='toggle-btn' src={assets.moon_icon} className='w-5 h-5  md:w-6 md:h-6' /></a>
                        <div className='md:flex hidden cursor-pointer items-center border rounded-[100px] w-[163px] shadow-sm h-[44px] text-[18px] justify-center '>
                            <a href="">Connect</a>
                            <Image src={assets.arrow_icon} alt='arrow-icon' className='h-3 w-3 ml-4' />
                        </div>

                        {isOpen ? <RxCross1 onClick={() => isOpenHandler()} className='w-6 h-6' /> :
                            <HiOutlineBars3 onClick={() => isOpenHandler()} className='w-7 h-7 md:hidden cursor-pointer' />
                        }

                    </div>
                </div>
                <div>
                    <motion.ul
                        initial={{ x: "100%" }}
                        animate={{ x: isOpen ? 0 : "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`h-screen w-[75vw] md:hidden absolute top-0 right-0 flex flex-col bg-white py-20 px-8 gap-6 z-40 shadow-lg`}
                    >                        
                        <li onClick={()=>setIsOpen(false)} className='cursor-pointer'>Home</li>
                        <li onClick={()=>setIsOpen(false)} className='cursor-pointer'>About me</li>
                        <li onClick={()=>setIsOpen(false)} className='cursor-pointer'>Services</li>
                        <li onClick={()=>setIsOpen(false)} className='cursor-pointer'>My work</li>
                        <li onClick={()=>setIsOpen(false)} className='cursor-pointer'>Testimonials</li>
                    </motion.ul>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar;