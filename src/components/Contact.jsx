import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-black text-white'>
    <form method='POST'  action="https://getform.io/f/fd1b9e38-5b1a-4701-8859-52f1688c42d3" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
<p className='text-4xl font-bold inli '>Contact</p>
<p className='py-4'>Submit the form below or shoot me an email - yaqoubiamina@gmail.com</p>
        </div>
        <input type="text" placeholder='Name' name='name' />
        <input className='p-2' type="email" placeholder='Email' name='email' />
        <textarea name="message" rows="10" placeholder='Messsage'></textarea>
        <button className='border-full'>Let's Collaborate</button>
    </form>
    </div>
  )
}

export default Contact