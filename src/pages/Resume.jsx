import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../core/Resume/Sidebar'

const Resume = () => {
  
  

  return (
    <>
     <div className='h-[calc(100vh-3.5rem)] flex flex-col lg:flex-row w-11/12 max-w-maxContent gap-8 mx-auto text-white overflow-y-hidden overscroll-y-none'>
      <Sidebar/>
      <div className=' w-full flex overflow-auto'>
        <div className='mx-auto w-11/12 '>
          <Outlet/>
        </div>
      </div>
     </div> 
    </>
  )
}

export default Resume