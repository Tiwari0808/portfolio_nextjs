"use client";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Project from "./component/Project";
import Connect from "./component/Connect";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Mark as mounted
  useEffect(() => setMounted(true), []);

  // Load theme from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(localStorage.getItem("theme") === "dark");
    }
  }, []);

  // Save theme to localStorage & apply class
  useEffect(() => {
    if (!mounted) return; // avoid running on server
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, mounted]);

  if (!mounted) return null; // wait until client-side

  return (
    <div className={isDark ? `dark:bg-[#11001F] dark:text-white` : ""}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Header isDark={isDark} />
      <About isDark={isDark} />
      <Services isDark={isDark} />
      <Project isDark={isDark} />
      <Connect isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};

export default Page;
