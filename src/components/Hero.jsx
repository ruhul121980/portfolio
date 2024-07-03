import React from "react";
import { motion } from "framer-motion";

import { HERO_CONTENT } from "./../constants/index";
import profilePic from "../assets/profile.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="uppercase pb-8 text-3xl lg:text-5xl font-thin tracking-tight lg:mt-16"
            >
              Md.Ruhul-Amin
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="mb-6 lg:mb-1">
            <a
              href="https://drive.google.com/uc?export=download&id=1coSEyWmG8UJ3PAJeyjwSmj-gKmVegTFS"
              class="bg-purple-800 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded"
            >
              Resume
            </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end relative">
            <motion.img
              className="rounded-3xl  w-1/2 md:w-1/2 lg:1/2 object-cover"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
