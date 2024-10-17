import React from 'react';

interface boxProps {
  title: string;
  description: string;
  link?: string;
}

const CustomBox = (props: boxProps) => {
  return (
    <div className='relative min-w-[200px] max-w-[300px] 
                    min-h-[250px] max-h-[250px] p-[20px]
                    border-solid border-[1px] border-prussianBlue border-opacity-65
                    flex flex-col justify-evenly items-center gap-[20px]
                    text-justify shadow-lg'>
      <div className='relative text-xl font-semibold mt-[10px] text-cerise pt-[10px] w-[100%] text-center'>
        {props.title}
      </div>
      <div className='relative text-md text-justify'>
        {props.description} 
        {props.link && (
          <span className='ml-2 font-semibold text-cerise text-[18px] text-right'>Click Here!</span>
        )}
      </div>
      
      <div className='relative w-[80px] border-solid border-[2px] border-t-cerise'></div>
    </div>
  );
};

export default CustomBox;
