import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import photo from "../../assets/Portfolio.jpg"


const WorkTemplate = ({project}) => {
  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row justify-between w-full gap-6'>
        {/* Project Details */}
        <div className='h-auto lg:h-[400px] flex flex-col justify-between w-full lg:w-[50%]'>
            <div className='text-richblack-200 text-5xl mb-4'>{project.id}</div>
            <div className='text-white font-bold text-4xl mb-4'>{project.title}</div>
            <div className='text-sm text-richblack-300 mb-4'>{project.description}</div>
            <div className='text-neon mb-4'>{project.stack}</div>
            <div className='border-t-2 border-richblack-400 mb-4'></div>
            <div className='flex gap-x-6 text-4xl'>
                <Link to={project.link}>
                    <FaGithub className='text-white rounded-full hover:bg-neon hover:text-richblack-800'/>
                </Link>
                <Link to={project.deployedLink}>
                    <IoIosArrowRoundForward className='-rotate-45 text-richblack-900 rounded-full  bg-white font-extrabold hover:bg-neon hover:text-richblack-800'/>
                </Link>
            </div>
        </div>
        {/* Project Image */}
        <div className='h-auto lg:h-[400px] w-full lg:w-[50%]'>
            <img src={photo} className=' w-full h-full rounded-md object-cover '/>
        </div>
      </div>
    </>
  )
}

export default WorkTemplate