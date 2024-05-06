import React from 'react'

const Profile = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e2c6dd] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-5xl text-yellow-950 font-bold inline border-b-4 border-green-600'>
            Resume
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-black text-3xl'>
            <p>Shiva Bathula</p>
          </div>
          <div className='text-2xl text-zinc-600'>
            <p>I am passionate about building excellent User Interface Designs that improves
            the lives of those around me. I specialize in creating Front End designs using ReactJS and AngularJS
            for clients ranging from individuals and eager to 
            take on new challenges and deliver solutions that meet business needs.</p>  
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Profile
