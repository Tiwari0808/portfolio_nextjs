"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { PiMoonThin } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { CiSun } from "react-icons/ci";

const Navbar = ({ isDark,setIsDark }) => {
  const [active, setActive] = useState("Home");
  const sideMenuRef = useRef();
 
  const toggleBtn = ()=>{
    setIsDark(!isDark)
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-13rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // Scroll detection for active section
  useEffect(() => {
    const sections = ["Home", "About", "Services", "Work"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust offset for navbar height
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Services", "Work"];

  return (
    <>
      <nav className="flex justify-between px-4 md:px-15 pt-5 fixed w-full z-50 backdrop-blur-sm ">
        <a href="#Home">
          <Image
            alt="logo"
            priority
            src={isDark?assets.logo:assets.logo3}
            className="w-[130px] h-[42px] md:w-[170px] mt-auto bg-cover bg-center"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 px-4 py-3 rounded-full bg-white bg-opacity-50 shadow-sm text-[18px] font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`${active === item
                    ? "text-red-600 font-semibold"
                    : "text-[#2F2F2F]"
                  }`}
              >
                {item === "About" ? "About me" : item === "Work" ? "My Work" : item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex gap-4">
          <button onClick={()=>toggleBtn()}>
            {!isDark?<PiMoonThin className="w-[28px] h-[28px] cursor-pointer" />:<CiSun className="w-[28px] h-[28px] cursor-pointer"/>}
          </button>
          <div className="hidden md:flex cursor-pointer items-center border rounded-[100px] w-[163px] shadow-sm h-[44px] text-[18px] justify-center">
            <a href="#Connect">Connect</a>
            <MdArrowOutward className="h-[28px] w-[28px] text-red-600" />
          </div>
          <button className="md:hidden cursor-pointer" onClick={openMenu}>
            <HiOutlineBars3 className="h-[28px] w-[28px]" />
          </button>
           
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden bg-rose-100 w-54 h-screen flex flex-col items-center top-0 z-50 transition-transform duration-500 gap-6 py-20 right-0 absolute translate-x-full"
        >
          <div onClick={closeMenu}>
            <RxCross2 className="w-7 h-7 top-5 cursor-pointer absolute right-7" />
          </div>
         
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setActive(item);
                  closeMenu();
                }}
                className={`${active === item
                    ? "text-red-600 font-semibold underline underline-offset-4"
                    : "text-[#2F2F2F]"
                  }`}
              >
                {item === "About" ? "About me" : item === "Work" ? "My Work" : item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
