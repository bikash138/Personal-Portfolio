import React, { useState } from 'react'
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navBarLinks } from '../data/navBarLinks'
import HighlitedText from '../core/HighlitedText'

const NavBar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='flex justify-center items-center text-richblack-100 mt-5 mb-14'>
      <div className='w-11/12 flex justify-between items-center max-w-maxContent'>
        <Link to="/">
          <span className='font-semibold text-white text-3xl'>Bikash<HighlitedText text={"."} /></span>
        </Link>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className='flex flex-col lg:flex-row gap-x-8 items-center'>
            {
              navBarLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={`${link.path}`}
                  className={`${
                    matchRoute(link.path)
                      ? "text-neon border-b-neon border-b-[1px]"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  <p className='cursor-pointer transition-all duration-200 hover:scale-95'>{link.title}</p>
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