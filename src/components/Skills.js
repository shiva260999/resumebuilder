import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/Python1.png';
import Angular from '../assets/Angular.png';
import Mysql from '../assets/sql.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#e2c6dd] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-5xl font-bold inline border-b-4 text-yellow-950 border-pink-600 '>
            Skills</p>
            <p className='py-7 text-zinc-600 '>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#160410] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>ANGULARJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                <p className='my-4 text-yellow-950'>MY SQL</p>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Skills
