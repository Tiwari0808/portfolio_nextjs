import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaFigma, FaGraduationCap, FaNpm, FaReact } from "react-icons/fa6";

const About = ({isDark}) => {
  return (
    <div className={`${isDark?'text-white':'text-[#242424]'} px-5 mt-[-1rem] mb-[4rem] lg:py-12 md:p-[150px] md:mt-[-2rem]`} id="About">
      <div className="text-center">
        <p className="text-[20px] sm:text-[22px] md:text-[24px]">Introduction</p>
        <p className="text-[36px] sm:text-[48px] md:text-[60px] font-normal">About me</p>
      </div>
      <div className="flex flex-col md:flex-row  mt-10">
        <Image
          alt="profile-image"
          height={538}
          width={400}
          src={assets.profile2}
          className="rounded-[15px] w-[120px] md:w-[400px] mx-auto "
        />
        <div className="md:ml-10 flex flex-col justify-between gap-5">
          <p className={`md:w-[600px] mt-3 md:mt-0 md:text-[20px] text-[16px] md:leading-[30px] text-center md:text-left ${isDark?'text-white':'text-[#565656]'}`}>
            As a frontend developer from India, I specialize in building clean,
            responsive, and engaging user interfaces using React, Next.js, and
            modern UI frameworks. I have hands-on experience creating real-world
            projects and collaborating on applications that deliver seamless
            performance and a polished user experience.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}>
              <FaCode className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` }/>
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>Languages</p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                HTML, CSS, JavaScript , React Js, Next Js
              </p>
            </div>
            <div className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}>
              <FaGraduationCap  className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` } />
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>Education</p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                BE in Electronics and Telecommunication
              </p>
            </div>
            <div className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}>
              <FaTools className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` } />
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>
                Frameworks & Libraries
              </p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                React.js, Next.js, Redux & Redux Toolkit, Tailwind CSS, Framer Motion
              </p>
            </div>
          </div>
          <div className=" md:flex flex-col gap-2">
            <p className=" mb-5 md:mb-0 text-[20px]">Tools i use</p>
            <div className=" grid grid-cols-4 gap-2 md:flex justify-evenly">
              <div className="border w-[75] h-[75] rounded-[15px] flex items-center justify-center p-2 hover:-translate-y-1 duration-500">
                <VscVscode className="text-[#007ACC] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <FaGitAlt className="text-[#F05033] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <SiFirebase className="text-[#FFCA28] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <IoLogoVercel className="text-[#000000] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <FaFigma className="text-[] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <FaNpm className="text-[#CB3837] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500">
                <SiPostman className="text-[#FF6C37] w-[33px] h-[33px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
