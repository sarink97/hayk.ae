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
            Helping you thrive through our innovative and diverse solutions.
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Hayk is a versatile company committed to excellence across multiple
            sectors. We bring together distinct services under one brand to meet
            your varied needs:
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            • Digital Solutions: Transforming ideas into reality with our
            expertise in web development, mobile app creation, and graphic
            design.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            • Tourism Services: Crafting unforgettable experiences with our
            exclusive tours from Dubai to Armenia or Georgia.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            • Company Formation in the UAE: Guiding you through a seamless
            business setup process with tailored solutions for establishing your
            company.
          </p>
          <h2 className="text-xl text-gray-600 mb-6">
            At Hayk, our goal is to provide exceptional service in every
            endeavor, ensuring your objectives are met with professionalism and
            dedication.
          </h2>
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
