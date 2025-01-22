import React from 'react'
import {FaGithub, FaLinkedinIn, FaTwitter, FaDownload  } from "react-icons/fa"
import { numbers } from '../data/numbers'
import HighlitedText from '../core/HighlitedText'
import { Link } from 'react-router-dom'
import me from "../assets/self-Photoroom-removebg.png"



const Home = () => {
  return (
    <>
    <div className='w-11/12 max-w-maxContent gap-8 mx-auto text-white overflow-y-hidden overscroll-y-none'>
      <div className='flex'>
          {/* Profile Details */}
          <div className='w-[50%] '>
            <h2>Software Developer</h2>
            <div className='text-6xl mt-2  '>
              <p>Hello I'm</p>
              <HighlitedText 
              text={"Bikash Shaw"}
              />
            </div>
            <p className='w-[80%] mt-7 text-sm'>
              I am a curious software enthusiast, constantly learning and exploring 
              new technologies to build innovative and efficient solutions.
            </p>
            <div className='flex mt-7 '>
              <div className='text-neon hover:bg-neon hover:text-richblack-800 cursor-pointer  py-3 px-10 border-neon border-[1px] rounded-full'>
                <button className=' flex items-center gap-x-2'>
                  Download CV
                  <FaDownload className=''/>
                </button>
              </div>
              <div className='flex gap-6 items-center px-4 text-neon border-neon '>
                <Link to="https://github.com/bikash138">
                  <FaGithub className='rounded-full border-[1px]  py-1 px-1 size-7 cursor-pointer hover:bg-neon hover:text-richblack-800'/>
                </Link>
                <Link to="https://www.linkedin.com/in/bikash-shaw-5ab74727b/">
                  <FaLinkedinIn className=' rounded-full border-[1px]  py-1 px-1 size-7 cursor-pointer hover:bg-neon hover:text-richblack-800'/>
                </Link>
                <Link to="https://x.com/Bikash__Shaw">
                  <FaTwitter className=' rounded-full border-[1px]  py-1 px-1 size-7 cursor-pointer hover:bg-neon hover:text-richblack-800'/>
                </Link>
              </div>
            </div>
          </div>
        {/* Picture */}
          <div className='flex mx-auto mix-blend-lighten'>
            <img
              className='w-80'
              src={me}
            />
          </div>
      </div>
      {/* Numbers */}
      <div className='grid grid-cols-4 gap-4 mt-20 '>
        {
          numbers.map((num,index)=>(
            <div key={index} className='flex justify-center'>
              <p className='text-6xl font-bold mt-0'>{num.number}</p>
              <span className='w-[30%] pl-3 text-xs pt-3'>{num.title}</span>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Home