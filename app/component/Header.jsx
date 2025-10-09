"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const Header = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="Home"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${
        isDark ? "text-white" : "text-[#242424]"
      } flex flex-col justify-center items-center h-screen`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <Image
          src={assets.profile_circle}
          priority
          width={168}
          height={168}
          alt="profile-picture"
          className="rounded-full"
        />
        <p className="text-center text-[18px] md:text-[28px] leading-[40px] font-normal">
          Hi! I’m Divyanshu Tiwari <span>👋🏻</span>
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:mt-3 text-center text-[33px] md:text-[65px] font-normal md:px-0 md:leading-[85px] md:w-[847px] md:h-[170px]"
      >
        frontend web developer <br /> <span>based in pune.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 gap-5 md:gap-0 flex flex-col md:flex-row justify-evenly items-center"
      >
        <a
          href="#Connect"
          className={`${
            isDark ? "bg-transparent border-[1px]" : "bg-[#202020]"
          } cursor-pointer lg:mr-8 w-[180px] md:w-[226px] md:h-[64px] h-[45px] rounded-full gap-1 flex items-center justify-center ${
            isDark ? "text-white" : "text-[#FFFFFF]"
          }`}
        >
          <button className="text-center cursor-pointer">connect with me</button>
          <IoArrowForward />
        </a>

        <div
          className={`w-[180px] md:w-[226px] md:h-[64px] h-[45px] cursor-pointer rounded-full gap-1 flex items-center justify-center border-2 ${
            isDark ? "bg-white text-black" : "border-[#A7A7A7]"
          }`}
        >
          <a
            href="/sample-resume.pdf"
            className="flex items-center justify-center gap-2"
            download
          >
            <button className="text-center cursor-pointer">my resume</button>
            <FaDownload />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
