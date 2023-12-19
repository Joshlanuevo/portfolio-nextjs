import React from 'react';

const Experience = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-2">
          Dev Experience
        </h3>

        {/* Divider Line */}
        <hr className="w-20 h-1 bg-gray-300 border-0 rounded mx-auto mt-10 mb-10" />

        {/* Timeline Container */}
        <div className="relative">
          {/* Experience Item 1 */}
          <div className="mb-8 max-w-md mx-auto relative flex items-center">
            {/* Tree Connector */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 bg-indigo-500"></div>

            {/* Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg ml-4 relative z-10">
              <h3 className="text-2xl font-medium text-gray-900">Software Developer</h3>
              <p className="text-sm text-gray-500 mt-2 mb-2">November 2023 - Present</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Responsibilities:</span>
                <ul className="list-disc pl-5">
                  <li>
                    Conducting monitoring and debugging for an existing mobile application developed in Kotlin for Android.
                  </li>
                </ul>
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-2">Tech used: Kotlin, Android</p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="mb-8 max-w-md mx-auto relative flex items-center">
            {/* Tree Connector */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 bg-indigo-500"></div>

            {/* Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg ml-4 relative z-10">
              <h3 className="text-2xl font-medium text-gray-900">Front-end Developer Intern</h3>
              <p className="text-sm text-gray-500 mt-2 mb-2">August 2023 - September 2023</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Responsibilities:</span>
                <ul className="list-disc pl-5">
                  <li>
                    Fixed broken links, ensuring a seamless user experience.
                  </li>
                  <li>
                    Conducted a comprehensive front-end cleanup to improve website functionality.
                  </li>
                  <li>
                    Resolved minor issues on the front end.
                  </li>
                </ul>
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-2">Tech used: React & NextJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
