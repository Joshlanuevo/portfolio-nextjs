import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white py-16 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-2">
          Skills
        </h3>
        <hr className="w-20 h-1 bg-gray-300 border-0 rounded mx-auto mt-10 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <SkillCategory title="Frontend">
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/html-1.svg" description="HTML" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/css-3.svg" description="CSS" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" description="Bootstrap" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" description="Tailwind CSS" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" description="JavaScript" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/react-2.svg" description="React" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" description="Next.js" />
          </SkillCategory>
          <SkillCategory title="Backend">
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" description="NodeJS" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/express-109.svg" description="Express" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" description="MongoDB" />
          </SkillCategory>
          <SkillCategory title="Developer Tools">
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/git-icon.svg" description="Git" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" description="Visual Studio Code" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" description="npm" />
            <SkillItem logoUrl="https://cdn.worldvectorlogo.com/logos/yarn.svg" description="Yarn" />
          </SkillCategory>
        </div>
      </div>
    </div>
  );
}

const SkillCategory = ({ title, children }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#23272A] border border-gray-300 md:border-none p-4 shadow-md">
      <h4 className="text-lg font-semibold text-white mb-4 mt-2">{title}</h4>
      <hr className="mb-3" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        {children}
      </div>
    </div>
  );
}

const SkillItem = ({ logoUrl, description }) => {
    // Adjust filter only for Next.js and Express images
    const filterStyle = ['https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', 'https://cdn.worldvectorlogo.com/logos/express-109.svg'].includes(logoUrl)
      ? { filter: 'brightness(0) invert(1) sepia(1) hue-rotate(190deg)' }
      : {};
  
    return (
      <div className="flex items-center p-2">
        <img src={logoUrl} alt={description} className="w-8 h-8 mr-2" style={filterStyle} />
        <div className="text-white">{description}</div>
      </div>
    );
  }

export default Skills;
