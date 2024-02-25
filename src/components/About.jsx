import React from "react";
import userData from "../data/data";
import AboutImg from "../images/aboutImg.png";

const About = () => {
    return ( 
        <div className="bg-white py-16 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-10 space-y-10">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-700">
              About
            </h3>
            <hr className="w-20 h-1 bg-gray-300 border-0 rounded mt-2" />
            <div className="font-bold text-xl md:text-4xl">
              {userData.about.header}
            </div>
            <div className="text-gray-600">
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-lg md:text-xl text-gray-700 mb-4"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden bg-white border-2 border-gray-300 md:border-none relative">
            <div
              className="relative h-0 pb-[300%] md:pb-[75%]"
              style={{ paddingBottom: '110%', paddingTop: '0' }} // Adjust this value for larger screens
            >
              <img
                src={AboutImg}
                alt="about"
                className="absolute w-full h-full object-cover top-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default About;