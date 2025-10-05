import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { IoBag, IoLogoVercel } from "react-icons/io5";
import { FaFigma, FaGraduationCap, FaNpm, FaReact } from "react-icons/fa6";

const About = () => {
  return (
    <div className="p-[150px] scroll-mt-24" id="About">
      <div className="text-center">
        <p className="text-[24px] text-[#242424] ">Introduction</p>
        <p className="text-[60px] font-normal text-[#242424]">About me</p>
      </div>
      <div className="flex  mt-10">
        <Image
          alt="profile-image"
          height={538}
          width={400}
          src={assets.profile2}
          className="rounded-[15px]"
        />
        <div className="ml-10 flex flex-col justify-between gap-5">
          <p className="w-[600px] text-[20px] leading-[30px] text-[#565656]">
            As a frontend developer from India, I specialize in building clean,
            responsive, and engaging user interfaces using React, Next.js, and
            modern UI frameworks. I have hands-on experience creating real-world
            projects and collaborating on applications that deliver seamless
            performance and a polished user experience.
          </p>
          <div className="flex justify-between">
            <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly">
              <FaCode className="text-[#49516B] w-[22px] h-[22px]" />
              <p className="text-[#494949] text[20px] font-medium">Languages</p>
              <p className="text-[#797979] leading-5 text-[15px]">
                HTML, CSS, JavaScript , React Js, Next Js
              </p>
            </div>
            <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly">
              <FaGraduationCap className="text-[#49516B] w-[22px] h-[22px]" />
              <p className="text-[#494949] text[20px] font-medium">Education</p>
              <p className="text-[#797979] leading-5 text-[15px]">
                BE in Electronics and Telecommunication
              </p>
            </div>
            <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 rounded-[15px] flex flex-col justify-evenly">
              <FaTools className="text-[#49516B] w-[22px] h-[22px]" />
              <p className="text-[#494949] text[20px] font-medium">
                Frameworks & Libraries
              </p>
              <p className="text-[#797979] leading-5 text-[15px]">
                React.js, Next.js, Redux & Redux Toolkit, Tailwind CSS, Framer Motion
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#868686] text-[20px]">Tools i use</p>
            <div className="flex justify-evenly">
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <VscVscode className="text-[#007ACC] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <FaGitAlt className="text-[#F05033] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <SiFirebase className="text-[#FFCA28] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <IoLogoVercel className="text-[#000000] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <FaFigma className="text-[] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
                <FaNpm className="text-[#CB3837] w-[33px] h-[33px]" />
              </div>
              <div className="border w-[75] h-[75] rounded-[15px] p-2">
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
