import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='sticky top-0 p-5 bg-[#23272A] w-screen flex items-start justify-between z-10 shadow-md xl:items-center'>
      <motion.div 
        className='flex flex-row items-center space-x-4'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <Link href="#about">
          <button className='heroButton'>About</button>
        </Link>
        <Link href="#projects">
          <button className='heroButton'>Projects</button>
        </Link>
      </motion.div>

      <Link href="#contact">
        <motion.div 
          className='flex flex-row items-center cursor-pointer space-x-2 mr-6' 
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
        > 
          <SocialIcon 
            className='cursor-pointer'
            target="_blank" 
            network='email'
            fgColor='white'
            bgColor='transparent'
          />
          <p className='uppercase font-semibold hidden md:inline-flex text-sm text-white hover:text-gray-500'>
            Contact me
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header;
