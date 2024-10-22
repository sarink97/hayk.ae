import React from "react";
import Image from "next/image";
import photo from "./../../public/about.jpg";

const AboutUsSection = () => {
  return (
    <div
      id="about-us"
      className="border-t-[2px] border-b-[2px] border-prussianBlue
    px-[6%] py-[10px] max-w-full h-auto overflow-x-none"
    >
      <h1 className="text-cerise text-[40px] text-center font-bold p-[20px] pb-[0px]">
        About Hayk
      </h1>

      <div className="container mx-auto flex flex-col lg:flex-row items-center py-16">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full lg:pr-12 text-left">
          <h1 className="text-4xl font-bold text-prussianBlue leading-tight mb-6">
            Helping businesses <span className="text-cerise">thrive</span>{" "}
            through innovative solutions.
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            At Hayk, we are your gateway to success in three distinct areas:
            business setup in the UAE, unforgettable travel experiences across
            Dubai, Armenia, and Georgia, and cutting-edge digital solutions. We
            are committed to delivering personalized services that cater to the
            unique needs of entrepreneurs, travelers, and businesses.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            Whether you are looking to establish a company in the UAE, explore
            the beauty of Dubai, Armenia, and Georgia through tailored travel
            experiences, or implement innovative digital solutions, Hayk offers
            expert guidance and support every step of the way. Our dedication to
            client success, integrity, and innovation drives us to continuously
            expand and refine our services to meet your evolving needs.
          </p>
        </div>

        {/* Right Image with Circlines */}
        <div className="md:w-1/2 w-3/4 mt-12 lg:mt-0 relative flex justify-center items-center mb-4 md:mb-0">
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
