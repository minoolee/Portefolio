import React, {useState} from 'react';
import {FaBars,FaTimes,FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import Logo from '../assets/Logo.png';
import {HitOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 font-bold  text-white bg-black border border-b-white'>
        <div>
        <img className='bg-white rounded-xl' src={Logo} alt="Logo Image" style={{width: '50px'}}/>
        </div>
        {/* menu */}
      
          <ul className='hidden md:flex text-1xl'>
          <li><Link to="home" smooth={true} duration={500} >Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} >About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
          <li>Work</li>
          <li><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
          </ul>
      
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          
          {!nav ?  <FaBars /> : <FaTimes/> }
           </div>
          {/* Mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >Skills</Link></li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
          </ul>
          {/* Social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-xl'>
                <a className=' flex justify-between items-center w-full' href="https://www.linkedin.com/in/amina-yaqoubi/"> Linkedin <FaLinkedin size={30}/> </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black rounded-xl'> 
                <a className='flex justify-between items-center w-full'  href="https://github.com/minoolee">Github <FaGithub size={30}/></a>
                 </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 rounded-xl'>
                 <a className='flex justify-between items-center w-full'  href="yaqoubiamina@gmail.com">Messege<TfiEmail size={30}/> </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-500 rounded-xl'>
                 <a className='flex justify-between items-center w-full'  href="yaqoubiamina@gmail.com">Resume<BsFillPersonLinesFill size={30}/> </a>
                  </li>
            </ul>
        
          </div>
        
    </div>
  )
}

export default Navbar