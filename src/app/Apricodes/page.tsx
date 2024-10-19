import Image from "next/image";
import React from "react";
import apricodes from '../public/apricodes-header.webp';
import ApricodeSection from "../components/sections/ApricodeSection";
const HeadSlide = () => {
  return (
    <>
        <div className="w-full h-[100vh]">
      <Image
        src={apricodes}
        alt="header"
        layout="fill"
        objectFit="cover"
      ></Image>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Overlay Content</h1>
      </div>
    </div>
    <ApricodeSection />
    </>
  );
};

export default HeadSlide;