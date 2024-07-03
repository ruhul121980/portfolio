import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="mb-8 flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl focus:outline-none"
            >
              ☰
            </button>
            <div className="flex-shrink-0 ml-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-tighter">R A</h1>
            </div>
          </div>
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-tighter">R A</h1>
          </div>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
  <a href="#about" className="text-sm sm:text-base lg:text-lg">
    <button className="hover:bg-purple-900 hover:rounded-lg hover:p-1 hover:text-white transition duration-300 ease-in-out">About</button>
  </a>
  <a href="#work" className="text-sm sm:text-base lg:text-lg">
    <button className="hover:bg-purple-900 hover:rounded-lg hover:p-1 hover:text-white transition duration-300 ease-in-out">Work</button>
  </a>
  <a href="#contact" className="text-sm sm:text-base lg:text-lg">
    <button className="hover:bg-purple-900 hover:rounded-lg hover:p-1 hover:text-white transition duration-300 ease-in-out">Contact</button>
  </a>
</div>

        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-lg sm:text-xl lg:text-2xl">
          <a
            href="https://www.linkedin.com/in/md-ruhul-amin121980"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/ruhul121980" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/ruhul1219" target="_blank">
            <FaFacebookSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B8801626922773&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </nav>
    </div>
  );
}
