import React from 'react';

const CustomSeparator = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-full pt-[50px]'>
      <div className='relative h-[200px] w-[2px] rounded-[10px] bg-prussianBlue'></div>
      <div className='absolute h-[30px] w-[30px] rounded-full bg-cerise top-[55%]'></div>
    </div>

  );
};

export default CustomSeparator;
