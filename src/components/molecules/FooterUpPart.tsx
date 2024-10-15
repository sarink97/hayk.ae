import React from "react";

const FooterUpPart = () => {
  return (
    <>
      <div className="relative w-full h-[300px] bg-[#223645] text-white py-14 flex justify-center">
        {/* Skewed background */}
        <div className="absolute top-0 left-0 w-[100%] h-full bg-[#223645] -skew-y-2 transform origin-bottom-left"></div>

        <div className="relative  px-6 flex gap-5 justify-between items-center w-[88%]">
          <a
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <img src="/hayk-logo.png" alt="logo" width={250} height={100} />
          </a>

          {/* Text Content */}
          <p className="w-[500px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            sunt hic repellat esse consectetur perferendis dolorem adipisci
            provident ipsum soluta. Quasi aliquid ratione cumque debitis dolorem
            quod est, autem fuga maiores esse sequi consequatur ea, cupiditate
            laborum facere soluta voluptatem tempora tempore aspernatur iusto
            velit? Porro ea placeat quia eum.
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              Phone:{" "}
              <a className="cursor-pointer hover:text-[#E12454] duration-300">
                +1 945-562-345
              </a>
            </li>
            <li>
              Fax:{" "}
              <a className="cursor-pointer hover:text-[#E12454] duration-300">
                +1 945-562-345
              </a>
            </li>

            <li>
              Email:{" "}
              <a className="cursor-pointer hover:text-[#E12454] duration-300">
                info@example.com
              </a>
            </li>

            <li>
              Website:{" "}
              <a className="cursor-pointer hover:text-[#E12454] duration-300">
                www.example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterUpPart;
