import React from 'react'
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom'

const SideBarLinks = ({link}) => {

    const location = useLocation()

    const matchRoute = (route)=>{
        return matchPath({path:route}, location.pathname)
    }

  return (
    <NavLink
        to={link.path}
        className={`relative px-8 py-2 text-xl font-medium rounded-3xl flex justify-center  ${
            matchRoute(link.path)
            ? "bg-neon  text-richblack-800"
            : "bg-opacity-0 text-richblack-100"
        } transition-all duration-200`}
    >
        
        <span className=''>{link.title}</span>
    </NavLink>
  )
}

export default SideBarLinks