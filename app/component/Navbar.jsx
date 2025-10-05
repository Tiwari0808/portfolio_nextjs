"use client";

import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { PiMoonThin } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-13rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    return (
        <>
            <nav className="flex justify-between px-4 md:px-15 py-5 fixed w-full z-50">
                <a href="#Home">
                    <Image
                        alt="logo"
                        priority
                        src={assets.logo3}
                        className="w-[130px] h-[42px] md:w-[170px] mt-auto bg-cover bg-center"
                    />
                </a>
                <ul className="text-[#2F2F2F] hidden md:flex items-center gap-4 rounded-full px-4 py-3 bg-white shadow-sm bg-opacity-50">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About me</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Work">My work</a></li>
                </ul>

                <div className="flex gap-4">
                    <button>
                        <PiMoonThin className="w-[28px] h-[28px] cursor-pointer" />
                    </button>
                    <div className="hidden md:flex cursor-pointer items-center border rounded-[100px] w-[163px] shadow-sm h-[44px] text-[18px] justify-center ">
                        <a href="Connect">Connect</a>
                        <Image
                            src={assets.arrow_icon}
                            alt="arrow-icon"
                            className="h-3 w-3 ml-4"
                        />
                    </div>
                    <button className="md:hidden cursor-pointer" onClick={openMenu}>
                        <HiOutlineBars3 className="h-[28px] w-[28px]" />
                    </button>
                </div>


                {/* mobile menu */}

                <ul ref={sideMenuRef} className="md:hidden bg-rose-100 w-54 h-screen flex flex-col items-center top-0 z-50 transition duration-500 gap-4 py-20 right-0 absolute translate-x-full">
                    <div onClick={closeMenu} >
                        <RxCross2 className="w-7 h-7 top-5 cursor-pointer absolute right-7" />
                    </div>
                    <li><a onClick={closeMenu} href="#Home">Home</a></li>
                    <li><a onClick={closeMenu} href="#About">About me</a></li>
                    <li><a onClick={closeMenu} href="#Services">Services</a></li>
                    <li><a onClick={closeMenu} href="#Work">My work</a></li>
                </ul>

            </nav>
        </>
    );
};

export default Navbar;
