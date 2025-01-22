import React from 'react'
import {FaArrowCircleRight } from "react-icons/fa"
import { skillsData } from '../data/skillsData'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div className='w-11/12 min-h-screen items-center max-w-maxContent gap-8 mx-auto text-white overflow-y-hidden overscroll-y-none'>
      <div className='flex justify-evenly'>
        {
          skillsData.map((data,index)=>(
            <div key={index} className='border-b-richblack-800 border-b-[3px]'>
              <div className='text-4xl hover:text-neon cursor-default'>
                <Link to={data.link}>
                <div className='flex justify-between'>
                  <span>{data.id}</span>
                  <FaArrowCircleRight
                    className=' rotate-[22.5deg] transition-all duration-200 hover:-rotate-12 cursor-pointer'
                  />
                </div>
                </Link>
                <p className='mt-5'>{data.title}</p>
              </div>
              <div className='flex-col mt-4'>
                <p className='text-sm mb-4'>{data.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills