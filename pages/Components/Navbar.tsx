"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact Me", path: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
  close: {
    x: "-100%",
    transition: {
      type: "spring" as const, 
      stiffness: 200,
      damping: 20,
    },
  },
};

  return (
    <nav className="text-white/70 pt-6" role="navigation" aria-label="Main Navigation">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="group relative inline-block">
                <p className="text-lg font-bold text-white/70 cursor-pointer">
                  {link.title}
                </p>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Toggle */}
      <button
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-white/70 p-2 z-50 text-white/70"
        aria-label="Toggle Menu"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "close"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full h-screen z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="group relative inline-block"
              >
                <p className="cursor-pointer">{link.title}</p>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
