'use client'

import React, { useState } from "react";
import FooterLinks from "../molecules/FooterLinks";
import FooterUpPart from "../molecules/FooterUpPart";
import Input from "../atoms/Input";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [nameValue , setNameValue] = useState('');
  const [emailValue , setEmailValue] = useState('');
  const [messageValue , setMessageValue] = useState('');
  function sendEmail(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    
    // Prepare data to send
    const templateParams = {
      from_name: nameValue,
      from_email: emailValue,
      message: messageValue,
    };
  
    emailjs.send('your_serviceID', 'your_templateID', templateParams, 'your_publicKey')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send the email.', error);
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
      >
        <div className="w-full h-full bg-amber-800 bg-opacity-30 text-white flex justify-end items-center ">
          <div className="w-full flex justify-between ml-[600px] gap-28 bg-gray-500 bg-opacity-35 pl-10 py-11 rounded-l-xl border-2 border-r-0 border-gray-600 shadow-2xl">
            <ul className="flex flex-col gap-1 w-[450px] justify-center m-auto">
              <li>
                <span className="text-xl">Phone: </span>
                <a className="cursor-pointer hover:text-gray-700 duration-300 text-xl text-black font-bold">
                  +1 945-562-345
                </a>
              </li>
              <li>
                <span className="text-xl">Fax: </span>
                <a className="cursor-pointer hover:text-gray-700 duration-300 text-xl text-black font-bold">
                  +1 945-562-345
                </a>
              </li>

              <li>
                <span className="text-xl">Email: </span>
                <a className="cursor-pointer hover:text-gray-700 duration-300 text-xl text-black font-bold">
                  info@example.com
                </a>
              </li>

              <li>
                <span className="text-xl">Website: </span>
                <a className="cursor-pointer hover:text-gray-700 duration-300 text-xl text-black font-bold">
                  www.example.com
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 w-full items-center">
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
                label=" *Email Address"
                height="35px" 
                value={emailValue} 
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}         />
              <div>
                <label> *Write the Massage</label>
                <textarea
                  style={{
                    width: "60%",
                    border: "solid 2px black",
                    borderRadius: "10px",
                    height: "80px",
                    color: "black",
                    paddingTop: "0px", // Start text from top
                    paddingLeft: "2px",
                    lineHeight: "1.2", // Ensure appropriate line height
                    marginRight: "200px",
                  }}
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  placeholder="Write your Message ..."
                ></textarea>
              </div>
              <button className="px-5 py-1 rounded-xl bg-red-600 hover:bg-[#E12454]"
                    onClick={(e) => sendEmail(e)}>
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
