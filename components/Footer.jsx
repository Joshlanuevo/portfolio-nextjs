import React from 'react';
import userData from '../data/data';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="bg-white dark:bg-black relative">
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20 text-center">
      <div className="h-0.5 w-full bg-gray-400 dark:bg-gray-500 "></div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
        <div>
          <p className="font-bold">{userData.name}</p>
        </div>
        <div className="space-x-4 flex items-center justify-center md:py-10 text-center pb-10">
            <SocialIcon url="https://www.facebook.com/joshivanlanuevo" 
                className='text-base font-normal text-gray-600 dark:text-gray-300'
                target="_blank" 
                fgColor='gray'
                bgColor='transparent'
            />
          <SocialIcon url="https://www.instagram.com/joshlanuevo/" 
            className='text-base font-normal text-gray-600 dark:text-gray-300'
            target="_blank" 
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon url="https://github.com/Joshlanuevo" 
            className='text-base font-normal text-gray-600 dark:text-gray-300'
            target="_blank" 
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon url="https://www.linkedin.com/in/josh-ivan-lanuevo-6ba706203/" 
            className='text-base font-normal text-gray-600 dark:text-gray-300'
            target="_blank" 
            fgColor='gray'
            bgColor='transparent'
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;