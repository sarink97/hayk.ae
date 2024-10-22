import React from 'react'
import Image from 'next/image'
import photo from "./../../public/apricodes-about.webp";

const AboutApricodes = () => {
  return (
    <div
      id="about-us"
      className="border-t-[2px] border-b-[2px] border-prussianBlue
    px-[6%] py-[10px] max-w-full h-auto overflow-x-none"
    >
      <h1 className="text-cerise text-[40px] text-center font-bold p-[10px] pb-[0px]">
        About Apricodes
      </h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center py-16 pt-[10px]">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full lg:pr-12 text-left">
        <h1 className="text-4xl font-bold text-prussianBlue leading-tight mb-6">
            Empowering businesses with <span className="text-cerise">cutting-edge</span> digital solutions.
        </h1>

          <p className="text-xl text-gray-600 mb-6">
            At Apricodes, we specialize in delivering cutting-edge digital solutions in four core areas: web applications, mobile applications, desktop software, and graphic design. We focus on creating secure, efficient, and user-friendly platforms to support businesses at every stage of their growth.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Whether you need a robust website, a tailored mobile app, desktop software, or engaging visual content, Apricodes has the expertise to bring your vision to life. Our dedication to innovation and client success ensures that we provide solutions that evolve alongside your business needs.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            From secure web applications to custom mobile and desktop platforms, and impactful graphic design, Apricodes is committed to helping businesses thrive in today’s digital landscape.
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
  )
}

export default AboutApricodes