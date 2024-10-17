import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  links: { href: string; title: string }[];
}
const FooterCol = (props: Props) => {
  return (
    <>
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl mb-3">{props.title}</h1>
        {props.links.map((link, id) => (
          <div key={id}>
            <ul>
              <li>
                <Link
                  className="hover:text-[#E12454] duration-300 text-gray-400"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterCol;
