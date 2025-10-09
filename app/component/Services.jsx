import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa6";

const Services = ({isDark}) => {
    return (
        <div className={`${isDark?'text-white':''} scroll-mt-24`} id="Services">
            <div className="flex items-center justify-center flex-col">
                <p className="md:text-[24px] text-[20px] font-normal">what i offers</p>
                <p className="md:text-[60px] text-[36px]  font-normal">My services</p>
                <p className={`${isDark?'text-white':'text-[#565656]'} text-[16px] lg:text-[17px] md:leading-[40px] px-4 lg:w-[760px] text-center font-normal`}>
                    I’m a Frontend Developer specializing in React, Next.js, and modern web technologies.
                    I build fast, responsive, and interactive web apps with clean, user-friendly designs.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-evenly mt-10">
                <div className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark?'hover:bg-[#2a004a]':' hover:bg-rose-100'} hover:-translate-y-1 duration-500`}>
                    <FaLaptopCode className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark?'text-white':'text-[#282828]'}  font-medium`}>Web Development</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Responsive, high-performance websites.</p>
                </div>
                <div className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark?'hover:bg-[#2a004a]':' hover:bg-rose-100'} hover:-translate-y-1 duration-500`}>
                    <FaPalette className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark?'text-white':'text-[#282828]'}  font-medium`}>UI / UX Design</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Modern, user-focused designs.</p>
                </div>
                <div className={`w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow ${isDark?'hover:bg-[#2a004a]':' hover:bg-rose-100'} hover:-translate-y-1 duration-500`}>
                    <FaRocket className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className={`text-[26px] ${isDark?'text-white':'text-[#282828]'}  font-medium`}>Deployment & Optimization</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Live hosting, SEO-friendly, and optimized apps.</p>
                </div>

            </div>
        </div>
    );
};

export default Services;
