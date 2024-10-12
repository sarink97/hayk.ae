"use client";
import React from "react";
import { ChevronsDown } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/abstract-architectural-concrete-interior-minimalist-house-3d-illustration-rendering.webp')`,
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="bg-slate-800 w-full h-full bg-opacity-45 flex flex-col justify-between items-center ">
          <h1 className="text-white text-[30px] w-[1280px] flex justify-center text-center h-fit absolute top-[40%]">
            we provide expert services in UAE business setup, tourism
            management, and web development to help businesses thrive. Our
            tailored solutions ensure growth and innovation for companies across
            various industries.
          </h1>
          <button
            onClick={() => {
              window.scrollTo({
                top: 520,
                behavior: "smooth",
              });
            }}
            className="absolute top-[75%] w-20 h-[80px] border-2 border-black rounded-full  flex justify-center items-center text-center hover:bg-[#393738] hover:bg-opacity-45 hover:duration-300"
          >
            <ChevronsDown
              className=" hover:translate-y-[50%] hover:scale-90 duration-300 w-[80%] h-[80%]"
              color="#E12459"
            />
          </button>
          <p className="absolute top-[68%]  text-xl">Explore Now . . . </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
