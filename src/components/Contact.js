import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#e2c6dd] flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 border-green-600 text-yellow-950'>Contact</p>
            <p className='text-zinc-600  py-4'>Submit the form below or drop me an email - </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-green-600 font-semibold border-2 bg-gray-800 hover:bg-yellow-950 hover:border-yellow-950 px-4 py-3 my-8 mx-auto flex items-center'>LET'S COLLABORATE</button>
    </form>
      
    </div>
  )
}

export default Contact
