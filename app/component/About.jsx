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

const About = ({isDark}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className={`${isDark?'text-white':'text-[#242424]'} px-5 mt-[-1rem] mb-[4rem] lg:py-12 md:p-[150px] md:mt-[-2rem]`}
      id="About"
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[20px] sm:text-[22px] md:text-[24px]"
        >
          Introduction
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[36px] sm:text-[48px] md:text-[60px] font-normal"
        >
          About me
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row  mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-[15px] w-[180px] md:w-[400px] mx-auto "
        >
          <Image
            alt="profile-image"
            height={538}
            width={400}
            src={assets.profile2}
            className="rounded-[15px] w-full"
          />
        </motion.div>
        <div className="md:ml-10 flex flex-col justify-between gap-5">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`md:w-[600px] mt-3 md:mt-0 md:text-[20px] text-[16px] md:leading-[30px] text-center md:text-left ${isDark?'text-white':'text-[#565656]'}`}
          >
            As a frontend developer from India, I specialize in building clean,
            responsive, and engaging user interfaces using React, Next.js, and
            modern UI frameworks. I have hands-on experience creating real-world
            projects and collaborating on applications that deliver seamless
            performance and a polished user experience.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}
            >
              <FaCode className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` }/>
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>Languages</p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                HTML, CSS, JavaScript , React Js, Next Js
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}
            >
              <FaGraduationCap  className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` } />
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>Education</p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                BE in Electronics and Telecommunication
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`border-[1px] border-[#D8D8D8] md:w-[199px] h-[195px] px-5 py-0 rounded-[15px] flex flex-col justify-evenly ${!isDark?'hover:bg-rose-100':'hover:bg-[#2a004a]'}  hover:-translate-y-1 duration-500`}
            >
              <FaTools className={`${isDark?'text-white':'text-[#49516B]'} w-[22px] h-[22px]` } />
              <p className={`${isDark?'text-white':'text-[#494949]'} text[20px] font-medium`}>
                Frameworks & Libraries
              </p>
              <p className={`${isDark?'text-white':'text-[#797979]'} leading-5 text-[15px]`}>
                React.js, Next.js, Redux & Redux Toolkit, Tailwind CSS, Framer Motion
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className=" md:flex flex-col gap-2"
          >
            <p className=" mb-5 md:mb-0 text-[20px]">Tools i use</p>
            <div className=" grid grid-cols-4 gap-2 md:flex justify-evenly">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] flex items-center justify-center p-2 hover:-translate-y-1 duration-500"
              >
                <VscVscode className="text-[#007ACC] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <FaGitAlt className="text-[#F05033] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <SiFirebase className="text-[#FFCA28] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <IoLogoVercel className="text-[#000000] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <FaFigma className="text-[] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <FaNpm className="text-[#CB3837] w-[33px] h-[33px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border w-[75] h-[75] rounded-[15px] p-2 flex items-center justify-center hover:-translate-y-1 duration-500"
              >
                <SiPostman className="text-[#FF6C37] w-[33px] h-[33px]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;