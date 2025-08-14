import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { IoBag, IoLogoVercel } from "react-icons/io5";
import { FaFigma, FaGraduationCap, FaNpm } from "react-icons/fa6";




const About = () => {
    return (
        <div className="p-[150px]">
            <div className="text-center">
                <p className="text-[24px] text-[#242424] ">Introduction</p>
                <p className="text-[60px] font-normal text-[#242424]">About me</p>
            </div>
            <div className="flex  mt-10">
                <Image
                    alt="profile-image"
                    height={538}
                    width={400}
                    src={assets.profile_large}
                    className="rounded-[15px]"
                />
                <div className="ml-10 flex flex-col justify-between gap-5">
                    <p className="w-[600px] text-[20px] leading-[30px] text-[#565656]">
                        I am a passionate Frontend Developer with strong expertise in modern
                        web technologies and hands-on experience building responsive,
                        user-friendly applications. I have successfully delivered multiple
                        projects, collaborating with teams to create impactful and visually
                        appealing digital experiences.
                    </p>
                    <div className="flex justify-between">
                        <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 py-8 rounded-[15px] flex flex-col justify-evenly">
                            <FaCode className="text-[#49516B] w-[22px] h-[22px]" />
                            <p className="text-[#494949] text[20px] font-medium">Languages</p>
                            <p className="text-[#797979] leading-5 text-[15px]">HTML, CSS, JavaScript , React Js, Next Js</p>
                        </div>
                        <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 py-8 rounded-[15px] flex flex-col justify-evenly">
                            <FaGraduationCap className="text-[#49516B] w-[22px] h-[22px]" />
                            <p className="text-[#494949] text[20px] font-medium">Education</p>
                            <p className="text-[#797979] leading-5 text-[15px]">BE in Electronics and Telecommunication</p>
                        </div>
                        <div className="border-[1px] border-[#D8D8D8] w-[199px] h-[195px] px-5 py-8 rounded-[15px] flex flex-col justify-evenly">
                            <IoBag className="text-[#49516B] w-[22px] h-[22px]" />
                            <p className="text-[#494949] text[20px] font-medium">Projects</p>
                            <p className="text-[#797979] leading-5 text-[15px]">Built 10+ projects</p>
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
