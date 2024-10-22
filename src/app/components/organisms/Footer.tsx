"use client";
import React, { useState } from "react";
import FooterLinks from "../molecules/FooterLinks";
import FooterUpPart from "../molecules/FooterUpPart";
import Input from "../atoms/Input";
import Link from "next/link";
import emailjs from "emailjs-com";

const Footer = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  function sendEmail(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    // Prepare data to send
    const templateParams = {
      from_name: nameValue,
      from_email: emailValue,
      message: messageValue,
    };

    emailjs
      .send(
        "your_serviceID",
        "your_templateID",
        templateParams,
        "your_publicKey"
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Failed to send the email.", error);
      });
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/contact-us.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "400px",
          marginBottom: "-80px",
        }}
        id="contact-us"
      >
        <div className="ml-auto  w-full h-full bg-amber-800 bg-opacity-30 text-white md:flex-row flex-col flex justify-end items-center ">
          <p className="mx-auto text-[70px] shadow-lg md:mb-[160px]">
            Contact Us
          </p>
          <div className="md:w-[55%] w-3/4 justify-end flex  md:justify-center  gap-7 bg-gray-500 bg-opacity-35 pr-[6%] pl-[1%] py-4 rounded-xl  md:rounded-l-xl border-2 md:border-r-0 border-gray-600 shadow-2xl">
            <ul className="flex flex-col gap-2 w-[50%] justify-between m-auto ">
              <li>
                <span className="text-xl block mb-2">Phone Number : </span>
                <a className="  duration-300 text-xl bg-[#E12454] bg-opacity-45 rounded-lg p-2 block w-fit">
                  +971 (4) 597-3335
                </a>
              </li>

              <li>
                <span className="text-xl block mb-4 cursor-pointer ">
                  Email:{" "}
                </span>
                <Link
                  href="mailto:success@hayk.ae?subject=Subject%20Here&body=Body%20Content%20Here "
                  className=" bg-[#E12454] hover:bg-red-500 rounded-lg p-2 duration-300 text-xl "
                >
                  Send Email
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-2 w-[60%] items-start">
              <Input
                type="text"
                placeHolder=" Enter your Name"
                label=" *Name"
                height="35px"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
              <Input
                type="text"
                placeHolder=" Enter your Email"
                label=" *Email Adress"
                height="35px"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
              />
              <div>
                <label> *Write the Massage</label>
                <textarea
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "80px",
                    color: "black",
                    padding: "10px",
                    lineHeight: "1.2", // Ensure appropriate line height
                    outline: "0px",
                  }}
                  placeholder="Write your Message ..."
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                ></textarea>
              </div>
              <button
                className="px-5 py-1 hover:bg-red-500 rounded-xl bg-[#E12454]"
                onClick={(e) => sendEmail(e)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[80px]">
        <FooterUpPart />
        <FooterLinks />
      </div>
    </>
  );
};

export default Footer;
