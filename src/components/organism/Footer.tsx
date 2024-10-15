import React from "react";
import FooterCol from "../atoms/FooterCol";
import FooterLinks from "../molecules/FooterLinks";
import FooterUpPart from "../molecules/FooterUpPart";

const Footer = () => {
  return (
    <>
      <div className="relative mt-[80px]">
        <FooterUpPart />
        <FooterLinks />
      </div>
    </>
  );
};

export default Footer;
