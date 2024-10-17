"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeNav = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true); // Change background color when scrolled
    } else {
      setNavbarBg(false); // Revert to original color when at the top
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Adjust this value to control how much extra space is shown
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 99999,
        }}
        className={`h-20 flex justify-center z-999 absolute w-[100%] ${
          navbarBg
            ? "bg-[#414042] bg-none border-[#E12454]"
            : "bg-slate-400 bg-opacity-30 border-white"
        } border-b-2 transition-all duration-300`}
      >
        <div className="flex justify-between items-center w-full px-[6%]">
          <a
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <img src="/hayk-logo.png" alt="logo" className="w-[140px]" />
          </a>

          <div>
            <ul className="list-none flex justify-center gap-5 text-white w-[400px]">
              <li
                className="cursor-pointer hover:text-[#E12454] hover:border-b-2 hover:border-[#E12454] text-xl transition duration-300 transform h-8"
                onClick={() => handleScroll("home")}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-[#E12454] text-xl transition duration-300 transform hover:border-b-2 hover:border-[#E12454] h-8"
                onClick={() => handleScroll("companies")}
              >
                Branches
              </li>
              <li
                className="cursor-pointer hover:text-[#E12454] text-xl transition duration-300 transform hover:border-b-2 hover:border-[#E12454] h-8"
                onClick={() => handleScroll("services")}
              >
                Services
              </li>
              <li
                className="cursor-pointer hover:text-[#E12454] text-xl transition duration-300 transform hover:border-b-2 hover:border-[#E12454] h-8"
                onClick={() => handleScroll("contact-us")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
