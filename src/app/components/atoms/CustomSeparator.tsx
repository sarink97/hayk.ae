import React from 'react';

const CustomSeparator = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-full'>
      <div className='relative h-[200px] w-[2px] rounded-[10px] bg-cerise'></div>
      <div className='absolute h-[30px] w-[30px] rounded-full bg-cerise -translate-y-1/2 top-1/2'></div>
    </div>

  );
};

export default CustomSeparator;
