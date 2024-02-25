import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`sticky top-0 p-5 hover:bg-[#23272A] ${
        isHovered ? 'text-white' : 'text-gray-500'
      } w-screen flex items-start justify-between z-20 hover:shadow-md xl:items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className='flex flex-row items-center space-x-4'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link to='about' spy={true} smooth={true} offset={-70} duration={500}>
          <button className='heroButton'>About</button>
        </Link>
        <Link to='experience' spy={true} smooth={true} offset={-70} duration={500}>
          <button className='heroButton'>Experience</button>
        </Link>
        <Link to='projects' spy={true} smooth={true} offset={-70} duration={500}>
          <button className='heroButton'>Projects</button>
        </Link>
      </motion.div>

      <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
        <motion.div
          className='flex flex-row items-center cursor-pointer space-x-2 mr-6'
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            className='cursor-pointer'
            target='_blank'
            network='email'
            fgColor={isHovered ? 'white' : 'gray'}
            bgColor='transparent'
          />
          <p className='uppercase font-semibold hidden md:inline-flex text-sm'>
            Contact me
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
