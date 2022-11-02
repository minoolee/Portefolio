import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Express from '../assets/express.png';
import Reeact from '../assets/react.png';
  
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
<div className='max-w-[1000px] pt-44 mx-auto p-4 flex flex-col justify-center w-full h-full'>
  <div>
    <p className='text-4xl font-bold py-4 underline'>Experience</p>
    <p>Experienced in various programming languages</p>
  </div>
  <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
      <p className='my-4'>HTML</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
      <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
      <p className='my-4'>JavaScript</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={Node} alt="Node icon" />
      <p className='my-4'>Node</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
      <p className='my-4'>Mongo</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
      <p className='my-4'>Tailwind</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={Reeact} alt="React icon" />
      <p className='my-4'>React</p>
    </div>
    <div className='shadow-md shadow-[#d5dae1] hover:scale-110 duration-500 p-3 m-4'>
      <img className='w-20 mx-auto' src={Express} alt="Express icon" />
      <p className='my-4'>Express</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Skills