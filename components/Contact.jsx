import React from 'react';
import userData from '../data/data';

const Contact = () => {
  return (
    <div className='bg-white py-16 md:py-28 relative'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <h3 className='text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-2'>
          Contact Me
        </h3>
        <hr className='w-20 h-1 bg-gray-300 border-0 rounded mx-auto mt-10 mb-10' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl md:text-4xl text-center md:text-left mb-4'>
              Get in touch
            </h1>
            <p className='text-gray-600 text-base md:text-lg mb-6 text-center md:text-left'>
              Please feel free to reach out to me via{" "}
              <a
                href={`mailto:${userData.email}`}
                className='text-blue-500 font-semibold'
              >
                email
              </a>{" "}
              or text messaging.
            </p>
            <p className='text-gray-800 text-lg md:text-xl font-bold mb-2'>
              Email: joshlanuevo11@gmail.com
            </p>
            <p className='text-gray-800 text-lg md:text-xl font-bold mb-6'>
              Phone: +63 9214577200
            </p>
          </div>
          <div className='hidden md:block'>
            {/* You can add any additional contact form or other elements here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
