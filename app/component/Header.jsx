import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";



const Header = () => {
  return (
    <div id='Home' className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={assets.profile_circle} priority width={168} height={168} alt='profile-picture rounded-full' />
        <p className='text-[#242424] text-center text-[18px]  md:text-[28px] leading-[40px] font-normal'>Hi! I’m Divyanshu Tiwari <span>👋🏻</span></p>
      </div>
      <p className='md:mt-3 text-center text-[#242424] text-[33px]  md:text-[65px] font-normal  md:px-0 md:leading-[85px] md:w-[847px] md:h-[170px]'>frontend web developer <br /> <span>based in pune.</span></p>
      <div className='mt-5 gap-5 md:gap-0 flex flex-col md:flex-row justify-evenly'>
        <a href="#Connect" className='bg-[#202020] cursor-pointer mr-8 w-[180px] md:w-[226px] md:h-[64px] h-[45px] rounded-full gap-1 flex items-center justify-center text-[#FFFFFF]'>
          <button className='text-center cursor-pointer'>connect with me</button>
          <IoArrowForward />
        </a>
        <div className=' w-[180px] md:w-[226px] md:h-[64px] h-[45px] cursor-pointer rounded-full gap-1 flex items-center justify-center border-[#A7A7A7] border-2'>
          <a href='/sample-resume.pdf' className='flex items-center justify-center gap-2' download>
            <button className='text-center cursor-pointer'>my resume</button>
            <FaDownload />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Header