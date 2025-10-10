'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa6'
import { motion } from "framer-motion";

const Project = ({ isDark }) => {
    const handleShowMore = () => {
        window.open('https://github.com/Tiwari0808', '_blank')
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, }}
            id='Work' className={`flex ${isDark ? 'text-white' : 'text-[#242424]'} justify-evenly items-center flex-col gap-10 mt-20 scroll-mt-24`}>
            <motion.div className='flex justify-center items-center flex-col '>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, }}
                    className='text-[20px] lg:text-[24px]'>my portfolio</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, }}
                    className='text-[36px] lg:text-[60px]'>My latest work</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5, }}
                    className={`lg:text-[20px] text-[16px] ${isDark ? 'text-white' : 'text-[#565656]'} text-center px-5 lg:w-[750px]`}>Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.</motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, }}
                className='flex flex-col md:flex-row items-center  justify-between gap-15'>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    duration={{ duration: 0.3 }}
                    className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <motion.div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <motion.div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </motion.div>
                        <motion.div className={`${isDark ? 'bg-red-500 text-white' : ''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    duration={{ duration: 0.3 }}
                    className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <motion.div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <motion.div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </motion.div>
                        <motion.div className={`${isDark ? 'bg-red-500 text-white' : ''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    duration={{ duration: 0.3 }}
                    className="group w-[235px] h-[325px] relative overflow-hidden rounded-[10px]">
                    <Image
                        alt="project"
                        className="w-full h-full "
                        src={assets.groomgo}
                    />
                    <motion.div
                        className="bg-amber-50 w-[210px] h-[60px] absolute bottom-[20px] right-[11px]
               rounded-[12px] p-2 flex justify-between items-center
               transform translate-y-0 group-hover:-translate-y-4
               transition-transform duration-300 ease-out"
                    >
                        <motion.div>
                            <p className="text-[#2A2A2A] font-semibold">GroomGo</p>
                            <p className="text-[#5E5E5E] text-[12px]">Barber Booking App</p>
                        </motion.div>
                        <motion.div className={`${isDark ? 'bg-red-500 text-white' : ''} group-hover:bg-red-500 shadow cursor-pointer hover:shadow-xl p-3 rounded-full`}>
                            <FaPaperPlane className='group-hover:rotate-360 transition-transform duration-500' />
                        </motion.div>
                    </motion.div>
                </motion.div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0,}}
                whileInView={{ opacity: 1, }}
                transition={{ delay: 1.1, duration: 0.5, }}
                onClick={() => handleShowMore()} className='border cursor-pointer border-[#A7A7A7] p-3 rounded-full text-center flex items-center gap-1 justify-center group'>
                <button className={`${isDark ? 'text-white' : 'text-black'} cursor-pointer`} >show more</button>
                <FaArrowRight className={`${isDark ? 'text-red-500' : 'text-[#6F6F6F]'} cursor-pointer group-hover:translate-x-1 duration-500`} />
            </motion.div>

        </motion.div>
    )
}

export default Project