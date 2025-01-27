import React from 'react'
import { resumeEducation } from '../../data/resumeEducation'

const MyEducation = () => {
  return (
    <>
      <div className='text-white'>
        <p className='text-3xl font-semibold'>My Education</p>
        <p className='text-sm text-richblack-300 mt-5 mb-6'>Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Doloribus, saepe!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                resumeEducation.map((data, index)=>(
                    <div key={index}
                      className='h-[184px] px-10 py-6 gap-y-3 w-full bg-richblack-800 rounded-xl flex flex-col justify-center items-center lg:items-start'
                    >
                        <p className='text-neon'>{data.date}</p>
                        <p>{data.title}</p>
                        <p>{data.company}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default MyEducation