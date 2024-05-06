import React, {useState} from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedinIn,
    FaUserTie,
  } from 'react-icons/fa';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e2c6dd] text-amber-950'>
        <div className='items-center h-14'>
        < FaUserTie  size={70}/> 
        </div>
        {/* menu */}
        <div>
            <ul className='hidden md:flex'>
              
              <li>
                <Link className='text-2xl font-bold text-yellow-950 hover:border-b-4 border-green-800'to="home" smooth={true} duration={500}>HOME </Link>
                </li>
                <li>
                <Link className='text-2xl font-bold text-yellow-950 hover:border-b-4 border-green-800' to="about" smooth={true} duration={500}>RESUME </Link>
                </li>
                <li>
                <Link className='text-2xl font-bold text-yellow-950 hover:border-b-4 border-green-800' to="skills" smooth={true} duration={500}>SKILLS </Link>
                </li>
                <li>
                <Link className='text-2xl font-bold text-yellow-950 hover:border-b-4 border-green-800' to="project" smooth={true} duration={500}>PROJECT </Link>
                </li>
                <li>
                <Link className='text-2xl font-bold text-yellow-950 hover:border-b-4 border-green-800' to="contact" smooth={true} duration={500}>CONTACT </Link>
                </li>
              
            </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="project" smooth={true} duration={500}>Project </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact </Link></li>
            </ul>

        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='https://www.linkedin.com/in/bathula-shiva-a76460189/' target="_blank"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='https://github.com/shiva260999' target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='/'
            >

              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d69739f8]'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
