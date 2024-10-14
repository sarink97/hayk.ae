import React from 'react';

interface boxProps {
  title: string;
  description: string;
}

const CustomBox = (props: boxProps) => {
  return (
    <div className='relative min-w-[200px] max-w-[300px] p-[20px]
                border-solid border-[1px] border-prussianBlue border-opacity-65
                flex flex-col justify-evenly items-center gap-[20px]
                text-justify shadow-lg'>
        <div className='relative text-[24px] mt-[10px] text-cerise pt-[10px] w-[100%] text-center'>{props.title}</div>
        <div className='relative text-[14px] text-justify'>{props.description}</div>
        <div className='relative w-[80px] border-solid border-[2px] border-t-cerise'></div>
    </div>
  );
};


export default CustomBox;
