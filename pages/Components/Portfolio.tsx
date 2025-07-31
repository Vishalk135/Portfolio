"use client";
import React from 'react';
import Image from 'next/image';
import {motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"


const projects = [
    {
        title: "Responsive UI Web App",
        desc:"Developed a visually appealing and fully responsive UI layout using Next.js and Tailwind CSS",
        devStack: "Next.js, Tailwind CSS",
        link: "https://project2-jet-ten.vercel.app",
        git: "https://github.com/Vishalk135/project2.git",
        src: project1

    },
    {
        title: "Feature-rich Next.js App",
        desc:"Implemented key frontend features like modals, form validation, and interactivity using Next.js, showcasing reusable components and clean code practices.",
        devStack: "Next.js, Tailwind CSS",
        link: "https://projects-eight-gamma-56.vercel.app",
        git: "https://github.com/Vishalk135/projects.git",
        src: project2

    }
]

function Portfolio() {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id='portfolio'>
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
            Selected <span className="text-orange-400">Projects</span>
        </h1>
        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
            {projects.map((project,index)=>(
                <motion.div 
                key={index}
                initial={{opacity:0, y:75}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:0.25}}
                className={`flex mt-12 flex-col ${index % 2==1 ? "  md:flex-row-reverse gap-12":"flex-col md:flex-row"}`}
                >

                    <div className="space-y-2 max-w-[500px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index+1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                        <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>

                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                        </div>

                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700" />
                    </div>

                </motion.div>
            ))}

        </div>
    </div>
  )
}

export default Portfolio