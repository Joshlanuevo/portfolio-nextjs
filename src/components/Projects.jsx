import React from 'react';
import { Link } from 'react-scroll';
import MernHomework from "../images/projects/mern-homework.PNG";
import FiveJCompany from "../images/projects/5j-company.PNG";
import Eportfolio from "../images/projects/e-portfolio.PNG";

const Projects = () => {
  return (
    <div className='bg-white py-16 md:py-28 relative'>
    <div className='max-w-7xl mx-auto px-6 md:px-10'>
      <h3 className='text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-2'>
        Projects
      </h3>
      <hr className='w-20 h-1 bg-gray-300 border-0 rounded mx-auto mt-10 mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center'>
        <ProjectCard
          imageUrl={MernHomework}
          title='Mern Homework App'
          label='Personal Project'
          description='A Web Application Homework todo app with user authentication that you can add, edit and delete your homework task.'
          techUsed='React, NodeJS, Express, MongoDB, Material-UI'
          link='https://mernapp-homework.herokuapp.com/login'
        />
        <ProjectCard
          imageUrl={FiveJCompany}
          title='5J Company'
          label='Schoolwork'
          description='A product prototype for our Subject Technopreneurship.'
          techUsed='React with styled component'
          link='https://j-company-b7e2d.web.app/'
        />
        <ProjectCard
          imageUrl={Eportfolio}
          title='E-portfolio'
          label='Schoolwork'
          description='A compilation of seminars and certificates for my subject Seminars & Fieldtrips.'
          techUsed='React JS'
          link='https://e-portfolio-2022-lanuevo.web.app'
        />
      </div>
    </div>
  </div>
  )
}

const ProjectCard = ({ imageUrl, title, label, description, techUsed, link }) => {
    return (
      <div className='rounded-lg overflow-hidden bg-[#23272A] border border-gray-300 md:border-none p-4 shadow-md w-full'>
        <div className='relative h-50 md:h-48 lg:h-64'>
          <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className='p-4 flex flex-col gap-2 items-center'>
          <h1 className='font-bold text-lg text-white'>{title}</h1>
          <p className='text-gray-500 mb-4'>{label}</p>
          <p className='text-gray-400 mb-4'>{description}</p>
          <h4 className='text-center text-white mb-4'>Tech Stack: {techUsed} </h4>
          <Link href={link} target='_blank'>
            <a
              className='mt-auto py-2 px-6 rounded bg-gray-500 text-white hover:bg-gray-700 focus:outline-none'
              target='_blank'
              rel='noopener noreferrer'
            >
              View
            </a>
          </Link>
        </div>
      </div>
    );
  };

export default Projects