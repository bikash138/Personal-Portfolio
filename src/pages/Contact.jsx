import React from 'react'
import { useForm } from 'react-hook-form'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"


const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessfull }
  } = useForm()
  return (
    <>
      <div className='flex w-full lg:w-11/12 max-w-maxContent gap-8 mx-auto text-white overflow-x-hidden overflow-y-hidden overscroll-y-none'>
        <div className='flex flex-col-reverse lg:flex-row items-center mx-8 lg:mr-0 lg:ml-0'>
          {/* Form Section */}
        <div className='w-full lg:w-[50%] bg-richblack-900  px-6 py-6 rounded-lg lg:mb-8 h-fit'>
          {/* Heading of Form */}
          <div className='flex flex-col items-center '>
            <p className='text-neon text-2xl tracking-widest mb-4 '>Let's work together</p>
            <p className='text-sm mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Error laudantium eaque earum aspernatur quibusdam! Perspiciatis, amet.
            </p>
          </div>
          {/* Form */}
          <div className=''>
            <form>
              {/* Name */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-5 mb-4 items-start w-full'>
                {/* First Name */}
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='Firstname'
                  className='bg-richblack-900 rounded-lg border-richblack-700 border-[1px] py-2 pl-5 w-full mr-4'
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className='text-pink-25'>Please enter your first name</span>
                )}
                {/* Last Name */}
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Lastname'
                  className='bg-richblack-900 rounded-lg border-richblack-700 border-[1px] py-2 pl-5 w-full'
                  {...register("lastName", { required: true })}
                />
                {errors.firstName && (
                  <span>Please enter your last name</span>
                )}
              </div>
              {/* Email And Phone */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-5 mb-4 '>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  className='bg-richblack-900 rounded-lg border-richblack-700 border-[1px] py-2 pl-5 w-full mr-4'
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span>Please enter your email</span>
                )}
                {/* Last Name */}
                <input
                  type='number'
                  name='number'
                  id='number'
                  placeholder='Enter phone number'
                  className='no-spinners bg-richblack-900 rounded-lg border-richblack-700 border-[1px] py-2 pl-5 w-full '
                  {...register("number", { required: true })}
                />
                {errors.number && (
                  <span>Please enter your phone number </span>
                )}
              </div>
              {/* Message */}
              <div>
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='7'
                  placeholder='Enter youre message here'
                  className='bg-richblack-900 rounded-lg border-richblack-700 border-[1px] py-2 pl-5 w-full mb-4'
                  {...register("message", { required: true })}
                />
              </div>
              {/* Submit Button */}
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-neon rounded-3xl text-richblack-900 px-5 py-3 '
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* My contact Details */}
        <div className='w-full lg:w-[50%] lg:mb-8 lg:py-52 py-11 px-8 '>
          <div className='flex mb-4'>
            <div>
              <FaPhoneAlt
                className='bg-richblack-800 text-neon text-5xl border-richblack-800 border-[2px] px-2 py-2 rounded-lg mr-3'
              />
            </div>
            <div className='items-center'>
              <p className='text-xs'>Phone</p>
              <p>(+91) 79982 73599</p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div>
              <MdEmail
                className='bg-richblack-800 text-neon text-5xl border-richblack-800 border-[2px] px-2 py-2 rounded-lg mr-3'
              />
            </div>
            <div>
              <p className='text-xs'>Email</p>
              <p>vshaw138@gmail.com</p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div>
              <FaLocationDot
                className='bg-richblack-800 text-neon text-5xl border-richblack-800 border-[2px] px-2 py-2 rounded-lg mr-3'
              />
            </div>
            <div>
              <p className='text-xs'>Address</p>
              <p>Kolkata, West Bengal, India, 712245</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact