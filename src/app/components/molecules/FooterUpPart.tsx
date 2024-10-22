import React from "react";

const FooterUpPart = () => {
  return (
    <>
      <div className="relative w-full md:h-[300px] bg-[#223645] text-white py-14 flex justify-center">
        {/* Skewed background */}
        <div className="absolute top-0 left-0 w-[100%] h-full bg-[#223645] -skew-y-2 transform origin-bottom-left"></div>

        <div className="relative  px-6 flex flex-col gap-5 justify-between items-center w-[80%] md:flex-row md:gap-10 ">
          <a
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <img src="/hayk-logo.png" alt="logo" width={250} height={100} />
          </a>

          {/* Text Content */}
          <p className="w-1/2 text-center">
            Your gateway to UAE business setup, unforgettable
            Dubai-Armenia-Georgia travel experiences, and cutting-edge digital
            solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterUpPart;
