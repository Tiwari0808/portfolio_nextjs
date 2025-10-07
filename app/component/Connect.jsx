"use client"

import React, { useState } from 'react'
import { FaLongArrowAltRight, FaSpinner } from "react-icons/fa";

const Connect = () => {
    const [result, setResult] = useState("");
    const[isSending,setIsSending] = useState(false);

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
        <div className='mt-20 scroll-mt-24' id='Connect'>
            <div className='flex flex-col items-center justify-center gap-[1rem]'>
                <p className='w-[181px] h-[27px] text-[#242424] text-[24px] text-center'>Connect with me</p>
                <h2 className='w-[327px] h-[68px] text-[#242424] text-[60px] text-center'>Get in touch</h2>
                <p className='max-w-[577px] max-h-[80px] text-[#565656] text-[20px] text-center'>I'd love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.</p>
            </div>
            <form action="" onSubmit={onSubmit} >
                <div className='flex items-center gap-20 justify-center mt-15'>
                    <input type="text" required name='name' placeholder='Enter your name' className='border-[1px] max-w-[348px] outline-0 max-h-[68px] border-[#A4A4A4] bg-[#FFFFFF] p-1 text-center rounded-[4px]' />
                    <input type="text" required name='email' placeholder='Enter your email' className='border-[1px] max-w-[348px] outline-0 max-h-[68px] border-[#A4A4A4] bg-[#FFFFFF] p-1 text-center rounded-[4px]' />
                </div>
                <textarea name="message" id="" required placeholder='Enter your message' rows='6' className='outline-0 p-4  rounded-[6px] flex items-center justify-center border-[#A4A4A4] mt-10 mx-auto w-[727px] max-h-[215px] border-[1px]'></textarea>
                <button type='submit' disabled={isSending} className='border-[1px] border-[#A4A4A4] px-3 py-2 flex items-center justify-center  cursor-pointer mx-auto mt-10 rounded-full bg-[#202020] text-[#FFFFFF]'>{isSending?<FaSpinner/>:'Submit now' }<span className={!isSending?`text-center ml-2`:`hidden`}><FaLongArrowAltRight /></span></button>
            </form>
            <p className='mt-10 text-center underline text-red-500'>{result}</p>
            {/* <div className=''>
                <hr className='w-[80%] flex items-center justify-center' />
            </div> */}

        </div>
    )
}

export default Connect