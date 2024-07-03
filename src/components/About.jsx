import React from 'react';
import aboutImg from '../assets/about.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className=' lg:my-10 text-center text-4xl'>
        About
        <span className='text-neutral-500'>Me</span>
      </h2>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className='w-full'
      >
        <div className='flex justify-center'>
          <p className='font-light tracking-tighter my-2 max-w-lg lg:max-w-4xl px-6 py-6 text-center lg:text-left'>{ABOUT_TEXT}</p>
        </div>
      </motion.div>
    </div>
  );
}
