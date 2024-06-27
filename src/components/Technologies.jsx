import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                React

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className="text-7xl text-cyan-400"></SiExpress>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className="text-7xl text-green-500"></SiMongodb>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className="text-7xl text-cyan-400"></FaHtml5>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className="text-7xl text-cyan-400"></FaCss3Alt>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className="text-7xl text-cyan-400"></RiTailwindCssFill>

            </div>

        </div>
      
    </div>
  )
}
