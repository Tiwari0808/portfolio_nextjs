'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";



const Header = ({ isDark }) => {
  return (
    <div id='Home' className={`${isDark ? 'text-white' : 'text-[#242424]'} flex flex-col justify-center items-center h-screen`}>
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='flex flex-col items-center justify-center gap-2'>
          <Image src={assets.profile_circle} priority width={168} height={168} alt='profile-picture rounded-full' />
        </motion.div>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-center text-[18px]   md:text-[28px] leading-[40px] font-normal`}>Hi! I’m Divyanshu Tiwari <span>👋🏻</span></motion.p>
      </div>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='md:mt-3 text-center text-[33px]  md:text-[65px] font-normal  md:px-0 md:leading-[85px] md:w-[847px] md:h-[170px]'>frontend web developer <br /> <span>based in pune.</span></motion.p>
      <div className='mt-10 gap-5 md:gap-0 flex flex-col md:flex-row justify-evenly items-center'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          href="#Connect" className={`${isDark ? 'bg-transparent border-[1px]' : 'bg-[#202020]'} cursor-pointer lg:mr-8 w-[180px] md:w-[226px] md:h-[64px] h-[45px] rounded-full gap-1 flex items-center justify-center {isDark?'text-white':'text-[#242424]'} text-[#FFFFFF]`}>
          <button className='text-center cursor-pointer'>connect with me</button>
          <IoArrowForward />
        </motion.a>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`w-[180px] md:w-[226px] md:h-[64px] h-[45px] cursor-pointer rounded-full gap-1 flex items-center justify-center border-2 ${isDark ? 'bg-white text-black' : 'border-[#A7A7A7]'}`}>
          <motion.a
            href='/sample-resume.pdf' className='flex items-center justify-center gap-2' download>
            <button className={`text-center cursor-pointer`}>my resume</button>
            <FaDownload />
          </motion.a>
        </motion.div>
      </div>

    </div>
  )
}

export default Header