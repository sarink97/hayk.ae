"use client";
import React from "react";
import { ChevronsDown } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div id="home" className="animated-brand-gradient w-full h-[100vh]">
        <div className="bg-slate-800 w-full h-full bg-opacity-45 flex flex-col justify-between items-center">
          <div className="flex-col text-white text-[30px] w-fit lg:w-[900px] flex items-start gap-5 text-left pl-3 h-[240px] absolute top-[20%] left-[6%]  ">
            <h1 className="md:text-[50px] text-[25px] font-bold">
              BRIDGING YOUR NEEDS WITH OUR VERSATILE EXPERTISE.
            </h1>
            <p className="md:text-[30px] text-[20px] text-wrap md:w-full text-slate-300  pr-[6%] ">
              Forward-thinking solutions designed to meet your unique needs,
              leveraging expertise across diverse sectors to foster innovation
              and growth.
            </p>
          </div>
          <button
            onClick={() => {
              const scrollPercentage = 0.175; // 17.5% scroll
              const scrollTarget =
                document.body.scrollHeight * scrollPercentage;

              window.scrollTo({
                top: scrollTarget,
                behavior: "smooth",
              });
            }}
            className="absolute top-[75%] w-20 h-[80px] border-2 border-black rounded-full flex justify-center items-center text-center hover:bg-[#393738] hover:bg-opacity-45 hover:duration-300"
          >
            <ChevronsDown
              className="hover:translate-y-[50%]  hover:scale-90 duration-300 w-[80%] h-[80%]"
              color="#E12459"
            />
          </button>
          <p className="absolute top-[68%] text-white text-xl">Explore Now</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
