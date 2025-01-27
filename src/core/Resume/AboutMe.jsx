import React from 'react'
import { resumeAboutMe } from '../../data/resumeAboutMe'

const AboutMe = () => {
  return (
    <>
      <div className='text-white'>
        <p className='text-3xl font-semibold '>About Me</p>
        <p className='text-sm text-richblack-300 mt-5 mb-6'>Lorem ipsum, dolor sit amet 
               consectetur adipisicing elit. Doloribus, saepe!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {
            resumeAboutMe.map((data, index)=>(
              <div key={index}
                className=' gap-y-6 w-full flex flex-col justify-center items-center lg:items-start'
              >
                <span className='text-richblack-100'>{data.title}: <span className='text-white'>{data.description}</span>  </span>
                        
              </div>
              ))
          }
        </div>
      </div>
    </>
  )
}

export default AboutMe