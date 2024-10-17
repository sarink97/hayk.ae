import React from "react";
import FooterCol from "../atoms/FooterCol";

const FooterLinks = () => {
  return (
    <div className="relative w-full h-full bg-[#414042] text-white py-7 ">
      {/* Skewed background only on the right */}
      <div className="absolute top-0 right-0 w-[100%] h-full bg-[#414042] skew-y-2 transform origin-bottom-right border-t-2 border-[#E12454]"></div>

      {/* Content inside the footer */}
      <div className="relative mx-auto px-6 flex gap-5 justify-between w-[800px]">
        <FooterCol
          title="Our Services"
          links={[
            { title: "Home", href: "/" },
            { title: "About us", href: "/about_us" },
            { title: "Services", href: "/services" },
            { title: "Features", href: "/features" },
          ]}
        />
        <FooterCol
          title="Quick Link"
          links={[
            { title: "Knowledge Base", href: "" },
            { title: "Hire An Expert", href: "/about_us" },
            { title: "FAQ", href: "/about_us" },
            { title: "Contect", href: "/about_us" },
          ]}
        />
        <FooterCol
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
        />
      </div>
    </div>
  );
};
export default FooterLinks;
