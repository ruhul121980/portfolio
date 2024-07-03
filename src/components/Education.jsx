import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className='mt-5 border-b border-neutral-900 pb-20'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='text-center text-4xl'>Education</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}

            className='my-4'>Bsc In Computer Science and Engineering</motion.p>
            <motion.p
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
            className='my-4'>City University</motion.p>
             <a className='' >Passing Year : 2024</a>   
            <p></p>

        </div>
      
    </div>
  )
}
