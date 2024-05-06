import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Project from './Project'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e2c6dd]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-950 text-3xl'>Hi, my name is</p><br></br>
        <h1 className='text-4xl sm:text-7xl font-bold text-yellow-950'>
          Shiva Bathula
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-zinc-600'>
          I'm a Front End Web Developer.
        </h2>
        <p className='text-zinc-500 py-4 max-w-[700px] text-2xl
        '>
          I specialize in ReactJS and AngularJS with 
          2 years of work Experience at Infosys. Currently, I’m focused on
          building responsive webpage designs
          and Data Science projects.
        </p>
        <div>
          <button className='text-green-600 bg-gray-800 font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-950 hover:border-yellow-950'>
            <Link to="project" smooth={true} duration={500}>VIEW WORK</Link>
            <span className>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home
