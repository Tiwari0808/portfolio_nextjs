import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";



const Header = () => {
  return (
    <div className='mt-[11%] flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={assets.profile_circle} priority width={168} height={168} alt='profile-picture rounded-full' />
        <p className='text-[#242424] text-[28px] leading-[40px] font-normal'>Hi! I’m Divyanshu Tiwari <span>👋🏻</span></p>
      </div>
      <p className='mt-3 text-center text-[#242424] text-[65px] font-normal leading-[85px] w-[847px] h-[170px]'>frontend web developer <br /> <span>based in pune.</span></p>
      <div className='mt-5 flex justify-evenly'>
        <div className='bg-[#202020] cursor-pointer mr-8 w-[226px] h-[64px] rounded-full gap-1 flex items-center justify-center text-[#FFFFFF]'>
          <button className='text-center'>connect with me</button>
          <IoArrowForward />
        </div>
        <div className=' w-[226px] h-[64px] cursor-pointer rounded-full gap-1 flex items-center justify-center border-[#A7A7A7] border-2'>
          <button className='text-center'>my resume</button>
          <FaDownload />
        </div>
      </div>

    </div>
  )
}

export default Header