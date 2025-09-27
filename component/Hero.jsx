"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import cursor from "../public/assets/icon1.png";
import message from "../public/assets/icon2.png";
import profilepic from "../public/assets/profilepic.png";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Floating Sparkles
const Sparkle = ({ xOffset, yOffset, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-2 h-2 bg-white rounded-full"
    style={{ left: `${xOffset}%`, top: `${yOffset}%`, filter: "blur(2px)" }}
  />
);

// Diagonal Floating Text Particle
const DiagonalText = ({ text, xOffset, yOffset, delay, duration }) => (
  <motion.div
    initial={{ x: 0, y: 0, opacity: 0, rotate: -2 }}
    animate={{ x: [0, 20, 0], y: [0, 20, 0], opacity: [0, 1, 0], rotate: [-2, 2, -2] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute text-white/70 font-semibold select-none pointer-events-none"
    style={{ left: `${xOffset}%`, top: `${yOffset}%`, fontSize: `${Math.random() * 16 + 14}px` }}
  >
    {text}
  </motion.div>
);

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useTransform(mouseX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(mouseY, [0, 1], [-30, 30]);
  const orb2X = useTransform(mouseX, [0, 1], [30, -30]);
  const orb2Y = useTransform(mouseY, [0, 1], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const techTexts = ["Web Developer", "React", "MERN", "Python", "Tailwind", "Next.js", "Prisma", "PostgreSQL"];

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#201942] to-[#e27739]">
      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <Sparkle key={i} xOffset={Math.random() * 100} yOffset={Math.random() * 100} delay={i * 0.5} />
      ))}

      {/* Diagonal Floating Text Particles */}
      {techTexts.map((text, i) => (
        <DiagonalText
          key={i}
          text={text}
          xOffset={Math.random() * 90 + 5}
          yOffset={Math.random() * 80 + 5}
          delay={i * 0.6}
          duration={6 + Math.random() * 4}
        />
      ))}

      {/* Background Orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute w-72 h-72 rounded-full bg-purple-500/20 top-20 left-10 blur-3xl"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute w-80 h-80 rounded-full bg-orange-500/20 top-64 right-20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-text">
            Hi, I am
          </h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-7xl font-extrabold text-[#e27739]"
          >
            Vishal Kumbhar
          </motion.h1>
        </motion.div>

        {/* Draggable floating icons */}
        <motion.div
          className="hidden md:block absolute left-[200px] top-[170px]"
          drag
          dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={cursor} height={190} width={190} alt="cursor" draggable="false" />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[220px] top-[20px]"
          drag
          dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={message} height={120} width={120} alt="message" draggable="false" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-center text-lg md:text-xl max-w-[600px] mx-auto mt-8 text-white/80"
        >
          I am a <span className="text-[#e27739] font-semibold">Web Developer</span> focused on creating websites that provide the best user experience.
        </motion.p>

        {/* Profile Picture with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative mt-10 flex justify-center"
        >
          {/* Glow behind profile */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-r from-purple-500 to-orange-400 blur-3xl"
          />
          <Image
            src={profilepic}
            alt="profile picture"
            className="relative z-10 w-[220px] h-[220px] rounded-full border-4 border-white/30 shadow-xl"
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          className="flex justify-center gap-6 mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold shadow-lg"
          >
            Contact Me
          </motion.a>

          <motion.a
            href="/Vishal Kumbhar CV REV6.pdf"
            target="_blank"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg border border-white/40 text-white font-semibold shadow-lg hover:bg-white/10"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
