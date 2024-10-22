"use client";

import Image from "next/image";
import React from "react";
import apricodes from '../public/apricodes-header.webp';
import ApricodeSection from "../components/sections/ApricodeSection";
import AboutApricodes from "../components/atoms/AboutApricodes";
const HeadSlide = () => {
  return (
    <>
        <div className="w-full h-[100vh] relative">
  <Image
    src={apricodes}
    alt="header"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0"
  />

  {/* Overlay with animation */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
    <h1 className="text-white text-4xl font-bold opacity-0 animate-slideIn">
      Transforming Ideas into <span className="text-cerise">Digital Solutions</span>
    </h1>
    <p className="text-white text-xl mt-4 opacity-0 animate-fadeInSubtitle">
      From websites to mobile apps and beyond, Apricodes delivers cutting-edge technology for your business.
    </p>
  </div>

  {/* Tailwind Animation Styles */}
  <style jsx>{`
    @keyframes slideIn {
      0% {
        transform: translateY(100px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeInSubtitle {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .animate-slideIn {
      animation: slideIn 1.5s ease-in-out forwards;
    }

    .animate-fadeInSubtitle {
      animation: fadeInSubtitle 2.5s ease-in-out forwards;
      animation-delay: 1s;
    }
  `}</style>
</div>


        <AboutApricodes />
        <ApricodeSection />
    </>
  );
};

export default HeadSlide;