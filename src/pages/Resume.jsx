import React, { useState } from 'react'
import MyEducation from "../core/Resume/MyEducation"
import MyExperience from "../core/Resume/MyExperience"
import MySkills from "../core/Resume/MySkills"
import AboutMe from "../core/Resume/AboutMe"
import { Outlet } from 'react-router-dom'
import Sidebar from '../core/Resume/Sidebar'

const Resume = () => {
  
  

  return (
    <>
     <div className='relative w-11/12 mx-auto flex min-h-[calc(100vh-3.5rem)]'>
      
      <Sidebar/>
      <div className='h-[calc(100vh-3.5rem)] w-full flex-1 overflow-auto'>
        <div className='mx-auto w-11/12 '>
          <Outlet/>
        </div>
      </div>
     </div> 
    </>
  )
}

export default Resume