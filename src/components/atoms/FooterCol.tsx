import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  links: { href: string; title: string }[];
}

const FooterCol = (props: Props) => {
  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Adjust this value as needed
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mb-3">{props.title}</h1>
      {props.links.map((link, id) => (
        <div key={id}>
          <ul>
            <li>
              {/* Check if the link is for a section (anchor link starting with #) */}
              {link.href.startsWith("#") ? (
                <a
                  className="hover:text-[#E12454] duration-300 text-gray-400 cursor-pointer"
                  onClick={() => handleScroll(link.href.substring(1))} // Remove '#' before passing to handleScroll
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  className="hover:text-[#E12454] duration-300 text-gray-400"
                  href={link.href}
                >
                  {link.title}
                </Link>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterCol;
