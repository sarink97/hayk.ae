import React from 'react';

interface boxProps {
  title: string;
  description: string;
}

const CustomBox = (props: boxProps) => {
  return (
    <div className='relative w-[243px] h-[248px] p-[20px]
                border-solid border-[1px] border-prussianBlue border-opacity-65
                flex flex-col justify-evenly items-center gap-[20px]
                text-justify shadow-lg'>
        <div className='relative text-[24px] mt-[10px] text-cerise'>{props.title}</div>
        <div className='relative text-[14px]'>{props.description}</div>
        <div className='relative w-[80px] border-solid border-[2px] border-t-cerise'></div>
    </div>
  );
};

export default CustomBox;
