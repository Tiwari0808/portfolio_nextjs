import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa6";

const Services = () => {
    return (
        <div>
            <div className="flex items-center justify-center flex-col">
                <p className="text-[24px] text-[#242424] font-normal">what i offers</p>
                <p className="text-[60px] text-[#242424] font-normal">My services</p>
                <p className="text-[#565656] text-[17px] leading-[40px] w-[760px] text-center font-normal">
                    I’m a Frontend Developer specializing in React, Next.js, and modern web technologies.
                    I build fast, responsive, and interactive web apps with clean, user-friendly designs.
                </p>
            </div>
            <div className="flex justify-evenly mt-[8vh]">
                <div className='w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] shadow '>
                    <FaLaptopCode className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className="text-[26px] text-[#282828] font-medium">Web Development</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Responsive, high-performance websites.</p>
                </div>
                <div className='w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px]'>
                    <FaPalette className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className="text-[26px] text-[#282828] font-medium">UI / UX Design</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Modern, user-focused designs.</p>
                </div>
                <div className='w-[235px] h-[235px] border-[2px] border-[#EFEFEF] p-5 flex flex-col justify-evenly rounded-[8px] '>
                    <FaRocket className="w-[40px] h-[40px] bg-red-600 p-1.5 text-white rounded-[10px]" />
                    <p className="text-[26px] text-[#282828] font-medium">Deployment & Optimization</p>
                    <p className="text-[#797979] leading-[26px] text-[16px]">Live hosting, SEO-friendly, and optimized apps.</p>
                </div>

            </div>
        </div>
    );
};

export default Services;
