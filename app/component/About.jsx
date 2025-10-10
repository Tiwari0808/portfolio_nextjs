import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaFigma, FaGraduationCap, FaNpm, FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, }}
      className={`${isDark ? 'text-white' : 'text-[#242424]'} px-5 mt-[-1rem] mb-[4rem] lg:py-12 md:p-[150px] md:mt-[-2rem]`} id="About">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[20px] sm:text-[22px] md:text-[24px]">Introduction</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[36px] sm:text-[48px] md:text-[60px] font-normal">About me</motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.8, }}
        className="flex flex-col md:flex-row  mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, }}
        >
          <Image
            alt="profile-image"
            height={538}
            width={400}
            src={assets.profile2}
            className="rounded-[15px] w-[180px] md:w-[400px] mx-auto "
          />
        </motion.div

        >

        <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:ml-10 flex flex-col justify-between gap-5">
          <p className={`md:w-[600px] mt-3 md:mt-0 md:text-[20px] text-[16px] md:leading-[30px] text-center md:text-left ${isDark ? 'text-white' : 'text-[#565656]'}`}>
            As a frontend developer from India, I specialize in building clean,
            responsive, and engaging user interfaces using React, Next.js, and
            modern UI frameworks. I have hands-on experience creating real-world
            projects and collaborating on applications that deliver seamless
            performance and a polished user experience.
          </p>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row justify-between items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark ? 'hover:bg-rose-100' : 'hover:bg-[#2a004a]'}`}>
              <FaCode className={`${isDark ? 'text-white' : 'text-[#49516B]'} w-[22px] h-[22px]`} />
              <p className={`${isDark ? 'text-white' : 'text-[#494949]'} text[20px] font-medium`}>Languages</p>
              <p className={`${isDark ? 'text-white' : 'text-[#797979]'} leading-5 text-[15px]`}>
                HTML, CSS, JavaScript , React Js, Next Js
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark ? 'hover:bg-rose-100' : 'hover:bg-[#2a004a]'}`}>
              <FaGraduationCap className={`${isDark ? 'text-white' : 'text-[#49516B]'} w-[22px] h-[22px]`} />
              <p className={`${isDark ? 'text-white' : 'text-[#494949]'} text[20px] font-medium`}>Education</p>
              <p className={`${isDark ? 'text-white' : 'text-[#797979]'} leading-5 text-[15px]`}>
                BE in Electronics and Telecommunication
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark ? 'hover:bg-rose-100' : 'hover:bg-[#2a004a]'}`}>
              <FaTools className={`${isDark ? 'text-white' : 'text-[#49516B]'} w-[22px] h-[22px]`} />
              <p className={`${isDark ? 'text-white' : 'text-[#494949]'} text[20px] font-medium`}>
                Frameworks & Libraries
              </p>
              <p className={`${isDark ? 'text-white' : 'text-[#797979]'} leading-5 text-[15px]`}>
                React.js, Next.js, Redux & Redux Toolkit, Tailwind CSS, Framer Motion
              </p>
            </motion.div>
          </motion.div>
          <div className=" md:flex flex-col gap-2">
            <motion.p
              initial={{ y: 20, opacity: 0, }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className=" mb-5 md:mb-0 text-[20px]">Tools i use</motion.p>
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className=" grid grid-cols-4 gap-2 md:flex justify-evenly">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] flex items-center justify-center p-2">
                <VscVscode className="text-[#007ACC] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <FaGitAlt className="text-[#F05033] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <SiFirebase className="text-[#FFCA28] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <IoLogoVercel className="text-[#000000] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <FaFigma className="text-[] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <FaNpm className="text-[#CB3837] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center">
                <SiPostman className="text-[#FF6C37] w-[33px] h-[33px]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
