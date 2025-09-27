"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../public/assets/project1.png";
import project2 from "../public/assets/project2.png";

const projects = [
  {
    title: "Responsive UI Web App",
    desc: "Developed a visually appealing and fully responsive UI layout using Next.js and Tailwind CSS",
    devStack: "Next.js, Tailwind CSS",
    link: "https://project2-jet-ten.vercel.app",
    git: "https://github.com/Vishalk135/project2.git",
    src: project1,
  },
  {
    title: "Feature-rich Next.js App",
    desc: "Implemented key frontend features like modals, form validation, and interactivity using Next.js, showcasing reusable components and clean code practices.",
    devStack: "Next.js, Tailwind CSS",
    link: "https://projects-eight-gamma-56.vercel.app",
    git: "https://github.com/Vishalk135/projects.git",
    src: project2,
  },
];

function Portfolio() {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id="portfolio">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center"
      >
        Selected <span className="text-orange-400">Projects</span>
      </motion.h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3, type: "spring", stiffness: 120 }}
            className={`flex mt-12 flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
          >
            {/* Project Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.1, type: "spring", stiffness: 100 }}
              className="space-y-2 max-w-[500px]"
            >
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4 flex gap-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  className="transition-all duration-300"
                >
                  Link
                </motion.a>
                <motion.a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  className="transition-all duration-300"
                >
                  Git
                </motion.a>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.2, type: "spring", stiffness: 100 }}
              className="flex justify-center items-center mt-6 md:mt-0"
            >
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700 shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
