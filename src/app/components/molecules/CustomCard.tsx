'use client'

import React, { ReactElement } from 'react';
import CustomCircle from "../atoms/CustomCircle";
import CustomBox from '../atoms/CustomBox';
import CustomImage from '../atoms/CustomImage';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface cardProps {
  title: string;
  description: string;
  icon?: ReactElement;
  logo?: StaticImageData;
  link?: string; // Adding a link prop for navigation
}

const CustomCard = (props: cardProps) => {
  return (
    <>
      {props.link ? (
        <Link href={props.link}  passHref>
          <div className='relative z-10 group flex flex-col items-center 
                transition-transform duration-300 hover:z-[1000] 
                hover:translate-y-[-30px] hover:cursor-pointer 
                hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-[20px]
                flex-shrink-0 overflow-hidden'>
            {props.logo ? <CustomImage logo={props.logo} /> : props.icon && <CustomCircle iconName={props.icon} />}
            <CustomBox title={props.title} description={props.description} link={props.link}/>
          </div>
        </Link>
      ) : (
        <div className='relative z-10 group flex flex-col items-center 
              transition-transform duration-300 hover:z-[1000] 
              hover:translate-y-[-30px] hover:cursor-pointer 
              hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-[20px]
              flex-shrink-0 overflow-hidden'
              onClick={() => {
                // Add code for pop-up functionality here
              }}>
          {props.logo ? <CustomImage logo={props.logo} /> : props.icon && <CustomCircle iconName={props.icon} />}
          <CustomBox title={props.title} description={props.description} />
        </div>
      )}
    </>
  );
};

export default CustomCard;
