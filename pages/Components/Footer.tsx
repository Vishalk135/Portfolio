import React from 'react'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000x] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vishal Kumbhar</h1>

        <div className="flex space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/vishal-kumbhar-018a8b1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300 ">
                <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/vishalk_0?igsh=MWJoajd5OW11YmZsaQ==" className="hover:text-gray-300 ">
                <FaInstagram size={24} />
            </a>
        </div>

    </div>
  )
}

export default Footer