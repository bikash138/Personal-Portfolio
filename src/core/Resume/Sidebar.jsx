import React from 'react'
import { resumeLinks } from '../../data/resumeLinks'
import SideBarLinks from './SideBarLinks'

const Sidebar = () => {
  return (
    <>
     <div className='flex h-[calc(100vh-3.5rem)] min-w-[25%] flex-col bg-richblack-900'>
      <div className='flex justify-center mb-8'>
        <p className='text-4xl text-white font-bold'>Why hire me?</p>
      </div>
      
        <div className='flex flex-col gap-y-5 '>
            {
                resumeLinks.map((link)=>(
                    <SideBarLinks className="gap-y-6" key={link.id} link={link}/>
                ))
            }
        </div>
     </div>
    </>
  )
}

export default Sidebar