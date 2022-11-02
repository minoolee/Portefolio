import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen pl-80'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-600'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-5xl font-bold '>Amina Yaqoubi</h1>
            <h2 className='text-1xl sm:text-3xl font-bold text-gray-900'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-500 py-4 max-w-[700px]'>Creative and inquisitive web Developer with passion for Frontend as also Backend, looking for an exciting Working as a webdeveloper.Looking forward to empower business partners with artificial intelligence </p>
        <div>
            <button className='text-white group bg-black border rounded-3xl py-2 px-6 my-2 flex items-center hover:bg-red-500'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-4' />
                </span>
            </button>
        </div>
        </div>
    
    </div>
  )
}

export default Home