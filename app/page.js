'use client'
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Project from "./component/Project";
import Connect from "./component/Connect";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

const page = () => {
 const[isDark,setIsDark] = useState(true);
 useEffect(()=>{
   if (isDark) {
    localStorage.theme = 'dark'
   } else {
    localStorage.theme = ''
   }
 },[isDark]);

//  useEffect(()=>{
//   if (localStorage.theme === 'dark') {
//     setIsDark(true)
//   } else {
//     setIsDark(false)
//   }
//  },[]);


  return (
    <div className={isDark?`dark:bg-[#11001F] dark:text-white`:''}>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Header isDark={isDark}/>
      <About isDark={isDark}/>
      <Services isDark={isDark}/>
      <Project isDark={isDark}/>
      <Connect isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  );
};

export default page;
