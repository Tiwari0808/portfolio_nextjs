'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa6'

const Project = ({isDark}) => {
    const handleShowMore = () => {
        window.open('https://github.com/Tiwari0808', '_blank')
    }
    return (
        <div id='Work' className={`flex ${isDark?'text-white':'text-[#242424]'} justify-evenly items-center flex-col gap-10 mt-20 scroll-mt-24`}>
            <div className='flex justify-center items-center flex-col '>
                <p className='text-[20px] lg:text-[24px]'>my portfolio</p>
                <p className='text-[36px] lg:text-[60px]'>My latest work</p>
                <p className={`lg:text-[20px] text-[16px] ${isDark?'text-white':'text-[#565656]'} text-center px-5 lg:w-[750px]`}>Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center  justify-between gap-15'>
                <div className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </div>
                        <div className={`${isDark?'bg-red-500 text-white':''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </div>
                    </div>
                </div>
                <div className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </div>
                        <div className={`${isDark?'bg-red-500 text-white':''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </div>
                    </div>
                </div>
                <div className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </div>
                        <div className={`${isDark?'bg-red-500 text-white':''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </div>
                    </div>
                </div>

            </div>

            <div onClick={() => handleShowMore()} className='border cursor-pointer border-[#A7A7A7] p-3 rounded-full text-center flex items-center gap-1 justify-center group'>
                <button className={`${isDark?'text-white':'text-black'} cursor-pointer`} >show more</button>
                <FaArrowRight className={`${isDark?'text-red-500':'text-[#6F6F6F]'} cursor-pointer group-hover:translate-x-1 duration-500` }/>
            </div>

        </div>
    )
}

export default Project