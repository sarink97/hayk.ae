import React from 'react';
import Image from 'next/image';
import photo from './../../public/about.jpg';

const AboutUsSection = () => {
  return (
    <div className='border-t-[2px] border-b-[2px] border-prussianBlue
    p-[10px] max-w-full h-auto overflow-x-none'>
        <h1 className='text-cerise text-[40px] text-center font-bold p-[20px] pb-[0px]'>
        About Hayk
      </h1>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2 w-full lg:pr-12 text-left">
          <h1 className="text-4xl font-bold text-prussianBlue leading-tight mb-6">
            Helping businesses <span className="text-cerise">thrive</span> through innovative solutions.
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Hayk is dedicated to helping businesses thrive through a range of services, from company formation to digital solutions. With a focus on innovation, integrity, and client success, Hayk offers personalized services tailored to meet the unique needs of each business.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            Founded to support entrepreneurs and businesses, Hayk has grown steadily, reaching significant milestones over the years. The company continues to expand its services, driving growth and success for clients across various industries.
          </p>
        </div>

        {/* Right Image with Circlines */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative flex justify-center items-center">
          {/* Circlines - Shapes */}
          <div className="absolute w-72 h-72 bg-cerise rounded-full -left-10 -top-10"></div>
          <div className="absolute w-56 h-56 bg-prussianBlue rounded-full -bottom-16 -right-16"></div>
          <div className="absolute w-40 h-40 bg-grey rounded-full -top-5 -right-[64px]"></div>

          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src={photo}
              alt="Person working"
              layout="intrinsic"
              objectFit="cover"
              className="shadow-lg rounded-3xl "
            />
          </div>
        </div>
      </div>
</div>
  );
};

export default AboutUsSection;
