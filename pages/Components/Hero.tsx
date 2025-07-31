"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png"
import message from "../assets/icon2.png"
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png"

import React from 'react'

function Hero() {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#201942_35%,#8F5C55_60%,#e27739_80%)]">

        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#201942)] top-[500px] left-[50%] -translate-x-1/2"></div>

        <div className="relative">
            <div className="text-6xl font-bold text-center">
                <h1 className="text-[#9884CE]">Hi, I am</h1>
                <h1 className="text-[#e27739]">Vishal Kumbhar</h1>
            </div>

            <motion.div className="hidden md:block absolute left-[200px] top-[170px]" drag>
                <Image
                    src={cursor}
                    height="190"
                    width="190"
                    alt="cursor"
                    className=""
                    draggable="false"
                />

            </motion.div>

            <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
                <Image
                    src={message}
                    height="120"
                    width="120"
                    alt="cursor"
                    className=""
                    draggable="false"
                />

            </motion.div>
        

            <p className="text-center text-xl max-w-[500px] mx-auto  mt-8 text-white/80">I am a Web Developer focused on creating websites that provide the best experience for users.</p>
            <Image 
            src={profilepic}
            alt="profile picture"
            className="h-auto w-auto mx-auto"
            />
        </div>


    </div>
  )
}

export default Hero