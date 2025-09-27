"use client";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Vishal Kumbhar
      </motion.h1>

      <div className="flex space-x-6 mt-4 md:mt-0">
        <motion.a
          href="https://www.linkedin.com/in/vishal-kumbhar-018a8b1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3,
            rotate: 20,
            color: "#f97316",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <FaLinkedin size={24} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/vishalk_0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.3,
            rotate: 20,
            color: "#f97316",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default Footer;
