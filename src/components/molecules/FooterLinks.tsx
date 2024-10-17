"use client";
import React from "react";
import FooterCol from "../atoms/FooterCol";

const FooterLinks = () => {
  return (
    <div className="relative w-full h-full bg-[#414042] text-white py-7 ">
      {/* Skewed background only on the right */}
      <div className="absolute top-0 right-0 w-[100%] h-full bg-[#414042] skew-y-2 transform origin-bottom-right border-t-2 border-[#E12454]"></div>

      {/* Content inside the footer */}
      <div className="relative mx-auto px-6 flex gap-5 justify-between w-[400px]">
        <FooterCol
          title="Company"
          links={[
            { title: "Home", href: "#home" },
            { title: "About us", href: "#about-us" },
            { title: "Services", href: "#services" },
            { title: "Features", href: "#Features" },
          ]}
        />
        <FooterCol
          title="Our Services"
          links={[
            { title: "Marhaba Armenia", href: "https://marhabaarmenia.com/" },
            { title: "Marhaba Georgia", href: "https://marhabageorgia.com/" },
            { title: "Business Formation", href: "#home" },
            { title: "Apricodes", href: "#branches" },
          ]}
        />
        {/* <FooterCol
          title="Resourcess"
          links={[
            { title: "Knowledge Base", href: "" },
            { title: "Hire An Expert", href: "/about_us" },
            { title: "FAQ", href: "/about_us" },
            { title: "Contect", href: "/about_us" },
          ]}
        />
        <FooterCol
          title="Important Link"
          links={[
            { title: "Knowledge Base", href: "" },
            { title: "Hire An Expert", href: "/about_us" },
            { title: "FAQ", href: "/about_us" },
            { title: "Contect", href: "/about_us" },
          ]}
        /> */}
      </div>
    </div>
  );
};
export default FooterLinks;
