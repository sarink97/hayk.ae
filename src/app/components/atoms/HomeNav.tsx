"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HomeNav = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("home");
  const pathname = usePathname();

  const handleScroll = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    setCurrentSection(id);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const changeBackground = () => {
      setNavbarBg(window.scrollY >= 80);
    };

    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + 100; // Add an offset for earlier detection

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.pageYOffset - 100;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setCurrentSection(navItems[i].id);
            break;
          }
        }
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", updateCurrentSection);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, []);

  useEffect(() => {
    console.log("Current section changed:", currentSection);
  }, [currentSection]);

  useEffect(() => {
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      console.log(`Section ${item.id} exists:`, !!element);
    });
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "companies", label: "Branches" },
    { id: "services", label: "Services" },
    { id: "contact-us", label: "Contact Us" },
  ];

  console.log("Rendering with currentSection:", currentSection);
  console.log("Pathname:", pathname);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex justify-center ${
          navbarBg
            ? "bg-[#414042] border-[#E12454]"
            : "bg-slate-400 bg-opacity-30 border-white"
        } border-b-2 transition-all duration-300`}
      >
        <div className="flex justify-between items-center w-full px-[6%]">
          <Link
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <img src="/hayk-logo.png" alt="logo" className="w-[140px]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="list-none flex justify-center gap-5 text-white">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer text-xl transition duration-300 transform h-8 ${
                    currentSection === item.id
                      ? "text-[#E12454] border-b-2 border-[#E12454]"
                      : "text-white hover:text-[#E12454] hover:border-b-2 hover:border-[#E12454]"
                  }`}
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#414042] border-t-2 border-[#E12454]">
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer text-xl transition duration-300 transform py-2 ${
                    currentSection === item.id
                      ? "text-[#E12454]"
                      : "text-white hover:text-[#E12454]"
                  }`}
                  onClick={() => {
                    handleScroll(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {/* {currentSection && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-[#E12454] text-white px-4 py-2 rounded-b-lg transition-all duration-300 ${
            currentSection
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          {navItems.find((item) => item.id === currentSection)?.label}
        </div>
      )} */}
    </>
  );
};

export default HomeNav;
