import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = ({ isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, }}
            className={`${isDark ? 'text-white' : ''} scroll-mt-24`} id="Services">
            <motion.div className="flex items-center justify-center flex-col">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:text-[24px] text-[20px] font-normal">what i offers</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="md:text-[60px] text-[36px]  font-normal">My services</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={`${isDark ? 'text-white' : 'text-[#565656]'} text-[16px] lg:text-[17px] md:leading-[40px] px-4 lg:w-[760px] text-center font-normal`}>
                    I’m a Frontend Developer specializing in React, Next.js, and modern web technologies.
                    I build fast, responsive, and interactive web apps with clean, user-friendly designs.
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-evenly mt-10">
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark ? 'hover:bg-[#2a004a]' : ' hover:bg-rose-100'}`}>
                    <FaLaptopCode className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark ? 'text-white' : 'text-[#282828]'}  font-medium`}>Web Development</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Responsive, high-performance websites.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark ? 'hover:bg-[#2a004a]' : ' hover:bg-rose-100'}`}>
                    <FaPalette className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark ? 'text-white' : 'text-[#282828]'}  font-medium`}>UI / UX Design</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Modern, user-focused designs.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark ? 'hover:bg-[#2a004a]' : ' hover:bg-rose-100'}`}>
                    <FaRocket className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark ? 'text-white' : 'text-[#282828]'}  font-medium`}>Deployment & Optimization</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Live hosting, SEO-friendly, and optimized apps.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
