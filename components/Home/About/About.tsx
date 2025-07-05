import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709] text-white'>

      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>

      {/* Content Layout */}
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>

        {/* Text Content */}
        <div>
          <h1 className='text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 leading-tight'>
            {aboutInfo.title}
          </h1>

          <p className='mt-6 text-base text-gray-400 max-w-xl'>
            {aboutInfo.description}
          </p>
          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg ml-5 font-bold text-gray-300'>
                Frontend Developer
              </p>
            </div>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg ml-5 font-bold text-gray-300'>
                Backend Developer
              </p>
            </div>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                <FaCheck className='text-white' />
              </div>
              <p className='text-sm sm:text-base md:text-lg ml-5 font-bold text-gray-300'>
                Fullstack Developer
              </p>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
          <div>
            <img
              src="/images/customer.png"
              alt="Image"
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {aboutInfo.client}+
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>
              Clients Successfully Served
            </p>
          </div>

          <div>
            <img
              src="/images/experience.png"
              alt="Image"
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {aboutInfo.experience}+
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>
              Hands-on Development Experience
            </p>
          </div>
          {/* Third Stat */}
          <div>
            <img
              src="/images/completed.png"
              alt="Image"
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {aboutInfo.project}+
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>
              Production-Ready Builds Shipped
            </p>
          </div>
          {/* Fourth Stat */}
          <div>
            <img
              src="/images/rocket.png"
              alt="Image"
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-xl text-white text-center'>
              {aboutInfo.website}+
            </p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>
              Production-Ready Sites Deployed
            </p>
          </div>
        </div>

        {/* Image or Animation section can go here if you want */}
        {/* <div> ... </div> */}

      </div>
    </div>
  )
}

export default About
