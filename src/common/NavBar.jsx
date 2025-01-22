import React from 'react'
import { matchPath, NavLink, useLocation, Link } from 'react-router-dom'
import { navBarLinks } from '../data/navBarLinks'
import HighlitedText from '../core/HighlitedText'



const NavBar = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname)
    }

  return (
    <div className='flex justify-center items-center text-richblack-100 mt-5 mb-14'>
        <div className='w-11/12 flex justify-between items-center max-w-maxContent '>
            <Link to="/">
                <span className='font-semibold text-white text-3xl'>Bikash<HighlitedText text={"."}/></span>
            </Link>
            {/* NavBar Links */}
            <nav>
                <ul className='flex gap-x-8 items-center'>
                    {
                        navBarLinks.map((link,index)=>(
                            <NavLink 
                                key={index} 
                                to={`${link.path}`}
                                className={`${
                                    matchRoute(link.path)
                                    ? "text-neon border-b-neon border-b-[1px]"
                                    : ""
                                }`}
                            >
                                <p className='cursor-pointer transition-all duration-200  hover:scale-95'>{link.title}</p>
                            </NavLink>
                        ))
                    }
                    <button
                    className='bg-neon px-5 py-1 text-richblack-700 border rounded-full hover:scale-95 transition-all duration-200 hover:text-richblack-900 cursor-pointer border-neon font-semibold'
                    >
                    Hire Me
                </button>
                </ul>
                
            </nav>
        </div>
    </div>
  )
}

export default NavBar