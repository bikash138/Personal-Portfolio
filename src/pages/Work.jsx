import React from 'react'
import WorkTemplate from '../core/Work/WorkTemplate'
import projectdata from "../data/projectsdata"


const Work = () => {
  return (
    <div className='flex w-11/12 max-w-maxContent gap-8 mx-auto text-white overflow-y-hidden overscroll-y-none'>
      {
        projectdata.map((project) => (
          <WorkTemplate key={project.id} project={project}/>
        ))
      }
      
    </div>
  )
}

export default Work