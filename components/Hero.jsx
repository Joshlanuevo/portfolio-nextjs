import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

import BackgroundCirle from './BackgroundCirle';
import BackgroundParticles from './BackgroundParticles';
import HeroImg from '../public/2x2-main.png'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Hello, my name is Josh Ivan', 'And I am a Web Developer'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen relative flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0'>
      <BackgroundParticles />
      <BackgroundCirle />
      <Image 
        src={HeroImg} 
        priority
        alt="hero"
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        layout="fixed"
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <div className="z-20">
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>web developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className="p-5">
          {/* Social Icons */}
          <SocialIcon url="https://www.facebook.com/joshivanlanuevo" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://www.instagram.com/joshlanuevo/" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://github.com/Joshlanuevo" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
          <SocialIcon url="https://www.linkedin.com/in/josh-lanuevo-48b563291/" 
            className='mx-3'
            target="_blank" 
            fgColor='white'
            bgColor='gray'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
