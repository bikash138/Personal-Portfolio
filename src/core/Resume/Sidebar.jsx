import React from 'react'
import { resumeLinks } from '../../data/resumeLinks'
import SideBarLinks from './SideBarLinks'

const Sidebar = () => {
  return (
    <>
      <div className='flex h-auto lg:h-[500px] w-full lg:w-[40%] flex-col bg-richblack-900 p-4'>
        <div className='flex justify-center mb-8'>
          <p className='text-2xl lg:text-4xl text-white font-bold'>Why hire me?</p>
        </div>
        <div className='flex flex-col gap-y-5'>
          {
            resumeLinks.map((link) => (
              <SideBarLinks className="gap-y-6" key={link.id} link={link} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Sidebar