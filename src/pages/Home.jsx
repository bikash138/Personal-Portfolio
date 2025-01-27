import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import HighlitedText from '../core/HighlitedText'
import { socialMediaLinks } from '../data/socialMediaLinks'
import me from '../assets/self-Photoroom-removebg.png'
import { numbers } from '../data/numbers'

const Home = () => {
  return (
    <div className='w-11/12 min-h-screen items-center max-w-maxContent gap-8 mx-auto text-white overflow-y-hidden '>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-4'>Welcome to My Portfolio</h1>
          <p className='text-sm lg:text-md text-richblack-300 mb-6'>
            Hi, I’m a second-year Bachelor of Computer Applications student at Chandigarh University.
            I’m passionate about problem-solving and currently strengthening my understanding of Data Structures and 
            Algorithms using C++. Alongside this, I’m diving into the world of full stack web development with the MERN Stack, 
            exploring how to build scalable and user-friendly applications.
          </p>
          <Link to='/work' className='text-neon hover:text-richblack-800 transition-all duration-200'>
            Learn More
          </Link>
        </div>
        <div className='mt-8 lg:mt-0'>
          <img src='/path/to/your/image.jpg' alt='Portfolio' className='w-full lg:w-1/2 rounded-md object-cover' />
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row  mt-8'>
        {/* Profile Details */}
        <div className='w-full lg:w-1/2 mx-auto lg:mx-0'>
          <div className='text-center lg:text-left mt-4 lg:mt-0 mb-0 lg:mb-3'>
            <h2 className='text-2xl lg:text-3xl font-bold '>Software Developer</h2>
          </div>
          <div className='text-4xl lg:text-6xl text-center lg:text-left mt-4 lg:mt-0'>
            <p>Hello I'm</p>
            <HighlitedText text={"Bikash Shaw"} />
          </div>
          <p className='w-full lg:w-4/5 mt-7 text-sm'>
            I am a curious software enthusiast, constantly learning and exploring new technologies to build innovative and efficient solutions.
          </p>
          <div className='flex justify-center lg:justify-normal lg:flex-row mt-7 gap-4'>
            <div className='w-full lg:w-auto text-neon hover:bg-neon hover:text-richblack-800 cursor-pointer py-3 px-10 md:px-20 lg:px-10 border-neon border-[1px] rounded-full'>
              <button className='flex items-center justify-center gap-x-2 w-full'>
                Download CV
                <FaDownload />
              </button>
            </div>
            <div className='flex gap-6 items-center px-4 text-neon border-neon'>
              {/* Social Media Links */}
              {
                socialMediaLinks.map((link, index) => (
                  <Link to={link.link} target='_blank' key={index}>
                    <link.icon className='rounded-full border-[1px] py-1 px-1 size-7 cursor-pointer hover:bg-neon hover:text-richblack-800' />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        {/* Picture */}
        <div className='flex mx-auto mt-4 lg:mt-0 lg:ml-8'>
          <img className='w-50 lg:w-[400px] rounded-full' src={me} alt='Bikash Shaw' />
        </div>
      </div>
      {/* Numbers */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-20'>
        {
          numbers.map((num, index) => (
            <div key={index} className='flex justify-center'>
              <p className='text-6xl font-bold mt-0'>{num.number}</p>
              <span className='w-[30%] pl-3 text-xs pt-3'>{num.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home