"use client"

import React, { useState } from 'react'
import { FaLongArrowAltRight, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = ({ isDark }) => {
    const [result, setResult] = useState("");
    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e68281dc-8e1e-4f73-83e3-dfb56507f10a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setIsSending(false)
        } else {
            console.log("Error", data);
            setResult(data.message);
            setIsSending(false)
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1, }}
            className={`mt-20 scroll-mt-24 ${isDark ? 'text-white' : 'text-[#242424]'}`} id='Connect'>
            <motion.div

                className='flex flex-col items-center justify-center lg:gap-[1rem]'>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, }}
                    className='w-[181px] h-[27px] text-[20px] lg:text-[24px] text-center'>Connect with me</motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, }}
                    className='w-[327px] h-[68px] text-[36px] lg:text-[60px] text-center'>Get in touch</motion.h2 >
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5, }}
                    className={`max-w-[577px] max-h-[80px] ${isDark ? 'text-white' : 'text-[#565656]'} mt-[-17px] lg:mt-3 text-[16px] px-5 lg:text-[20px] text-center`}>I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.</motion.p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ delay: 0.9, duration: 0.5, }}
                className='flex flex-col' onSubmit={onSubmit} >
                <motion.div

                    className='flex flex-col md:flex-row items-center lg:gap-20 gap-3 justify-center mt-15'>
                    <motion.input
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.6, }}
                        type="text" required name='name' placeholder='Enter your name' className={`border-[1px] w-[85%] px-5 lg:w-[303px] outline-0 lg:h-auto border-[#A4A4A4] ${isDark ? 'bg-[#2a004a]' : 'bg-[#FFFFFF]'} p-1 text-center rounded-[4px]`} />
                    <motion.input
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.6, }}
                        type="text" required name='email' placeholder='Enter your email' className={`border-[1px] w-[85%] px-5 lg:w-[348px] outline-0 lg:h-auto border-[#A4A4A4] ${isDark ? 'bg-[#2a004a]' : 'bg-[#FFFFFF]'} p-1 text-center rounded-[4px]`} />
                </motion.div>
                <motion.textarea
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5, }}
                    name="message" id="" required placeholder='Enter your message' rows='6' className={`outline-0 p-4 w-[85%] lg-w-[700px]  rounded-[6px] flex items-center justify-center ${isDark ? 'bg-[#2a004a]' : ''} border-[#A4A4A4] lg:mt-10 mt-3 mx-auto md:w-[727px] lg:max-h-[215px] border-[1px]`}></motion.textarea>
                <motion.button
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}
                    type='submit' disabled={isSending} className='border-[1px] border-[#A4A4A4] px-3 py-2 flex items-center justify-center  cursor-pointer mx-auto mt-10 rounded-full bg-[#202020] text-[#FFFFFF]'>{isSending ? <FaSpinner /> : 'Submit now'}<span className={!isSending ? `text-center ml-2` : `hidden`}><FaLongArrowAltRight /></span></motion.button>
            </motion.form>
            <p className='mt-10 text-center underline text-red-500'>{result}</p>

        </motion.div

        >
    )
}

export default Connect