"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import phone from "../public/assets/phone.png";
import mail from "../public/assets/mail.png";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, type: "spring", stiffness: 120 },
  }),
  hover: {
    scale: 1.1,
    boxShadow: "0px 15px 30px rgba(255,255,255,0.3)",
    y: -5,
  },
};

function Contact() {
  const contacts = [
    {
      icon: phone,
      text: "+91 9284538116",
      bg: "bg-purple-600/30",
      hoverBg: "group-hover:bg-purple-500/50",
      underline: "bg-purple-400",
    },
    {
      icon: mail,
      text: "vishalkumbhar256@gmail.com",
      bg: "bg-indigo-600/30",
      hoverBg: "group-hover:bg-indigo-500/50",
      underline: "bg-indigo-400",
    },
  ];

  return (
    <div className="relative mt-16 max-w-[1000px] mx-auto">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50"
        animate={{
          scale: [1, 1.05, 1, 1.02],
          rotate: [0, 2, 0, -2],
          x: [-10, 10, -5, 5],
          y: [-5, 5, -10, 10],
          opacity: [0.5, 0.7, 0.6, 0.5],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0, -50],
          y: [0, -30, 0, 30],
          scale: [1, 1.2, 1, 1.1],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-[250px] h-[250px] bg-indigo-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0, 40],
          y: [0, 20, 0, -20],
          scale: [1, 1.1, 1, 1.15],
        }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        id="contact"
        className="relative z-10 flex flex-col lg:flex-row justify-center items-center 
                   bg-gradient-to-r from-purple-800/40 to-indigo-800/40 backdrop-blur-lg
                   text-white/90 p-12 rounded-2xl shadow-xl space-y-8 lg:space-y-0 lg:space-x-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ul className="space-y-6 w-full flex flex-col justify-center">
          {contacts.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center group cursor-pointer relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              {/* Floating Icon */}
              <motion.div
                className={`p-4 rounded-full ${item.bg} ${item.hoverBg} transition-all duration-300 shadow-md`}
                animate={{
                  y: [0, -5, 0, 5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              >
                <Image
                  src={item.icon}
                  alt={item.text}
                  className="h-[50px] w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>

              <p className="ml-6 text-lg font-medium relative group-hover:text-white transition-colors duration-300">
                {item.text}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] ${item.underline} 
                              group-hover:w-full transition-all duration-500`}
                ></span>
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Contact;
