import React from 'react'
import {resumeSkills} from "../../data/resumeSkills"

const MySkills = () => {
  return (
    <>
      <div className='text-white'>
              <p className='text-3xl font-semibold'>My skills</p>
              <p className='text-sm text-richblack-300 mt-5 mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloribus, saepe!
              </p>
              <div className='grid sm:grid-cols-3 grid-cols-4 gap-4'>
                  {
                      resumeSkills.map((data, index)=>(
                          <div key={index} className='h-[150px] w-full bg-richblack-800 rounded-xl flex justify-center items-center'>
                              <img className={`size-5/12 cursor-pointer`}
                                src={data.logo}
                              />
                          </div>
                      ))
                  }
              </div>
      </div>
    </>
  )
}

export default MySkills