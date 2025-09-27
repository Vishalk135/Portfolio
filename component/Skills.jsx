"use client";
import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiPrisma, SiNodedotjs, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skillIcons = [
  { icon: <FaHtml5 size={90} className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt size={90} className="text-blue-500" />, label: "CSS" },
  { icon: <FaReact size={90} className="text-cyan-400" />, label: "React" },
  { icon: <FaJsSquare size={90} className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaPython size={90} className="text-blue-400" />, label: "Python" },
  { icon: <SiMongodb size={90} className="text-green-500" />, label: "MongoDB" },
  { icon: <SiNodedotjs size={90} className="text-green-600" />, label: "Node.js" },
  { icon: <SiExpress size={90} className="text-gray-400" />, label: "Express.js" },
  { icon: <SiPostgresql size={90} className="text-sky-600" />, label: "PostgreSQL" },
  { icon: <SiPrisma size={90} className="text-indigo-400" />, label: "Prisma" },
];

function Skills() {
  const [lightnings, setLightnings] = useState([]);

  useEffect(() => {
    setLightnings(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="relative bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 pointer-events-none">
        {lightnings.map((i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-24 bg-white/70 blur-sm rounded"
            initial={{ y: -200, opacity: 0, x: Math.random() * 1200 }}
            animate={{ y: [-200, 800], opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-white max-w-6xl mx-auto p-8 text-center relative z-10">
        <motion.h2
          className="text-6xl font-extrabold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What I Do
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              className="h-[160px] w-[160px] md:h-[180px] md:w-[180px] flex flex-col justify-center items-center 
                bg-white/10 backdrop-blur-md rounded-2xl shadow-xl
                hover:scale-110 hover:shadow-purple-500/50 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
