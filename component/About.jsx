"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import book from "../public/assets/book.png";
import pc from "../public/assets/pc.png";
import card from "../public/assets/card.png";
import finance from "../public/assets/finance.png";

const cards = [
  {
    img: book,
    title: "Education",
    desc: "I have a degree in Computer Engineering and focus on React, Next.js, Tailwind CSS, and Machine Learning.",
  },
  {
    img: pc,
    title: "Problem-Solving",
    desc: "I approach challenges with a logical and systematic mindset.",
  },
  {
    img: card,
    title: "Experience",
    desc: "I have a diverse portfolio of projects.",
  },
  {
    img: finance,
    title: "Technical Skills",
    desc: "I specialize in React, Next.js, Tailwind CSS, MERN and PERN stack with responsive interfaces and efficient backend.",
  },
];

// Sparkle animation
function Sparkle({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, -10, 0],
        opacity: [0, 1, 0.7, 0],
        scale: [0.5, 1, 0.8],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );
}

function About() {
  return (
    <div className="relative max-w-[1200px] mx-auto py-16" id="about">
      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <Sparkle key={i} delay={i * 0.3} />
      ))}

      <h1 className="text-white text-6xl font-semibold mb-12 text-center">
        About <span className="text-orange-400">me</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0">
        {cards.map((cardItem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,165,0,0.4)" }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100, duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden cursor-pointer flex flex-col items-center p-6 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-900 opacity-30 animate-gradient-xy rounded-xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Image src={cardItem.img} alt={cardItem.title} className="w-[120px] h-[120px] object-contain mb-4" />
              <h2 className="text-2xl font-bold text-white/80">{cardItem.title}</h2>
              <p className="text-lg text-white/70 mt-2">{cardItem.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
