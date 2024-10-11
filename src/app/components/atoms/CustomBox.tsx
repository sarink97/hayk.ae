import React from 'react'

const CustomBox = () => {
  return (
    <div className='relative w-[243px] h-[248px] p-[20px]
                    border-solid border-[1px] border-prussianBlue border-opacity-65
                    flex flex-col justify-evenly items-center gap-[20px]
                    text-justify shadow-lg'>
        <div className='relative text-[24px] mt-[10px] text-cerise'>Title</div>
        <div className='relative text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolores</div>
        <div className='relative w-[80px] border-solid border-[2px] border-t-cerise'></div>
    </div>
  )
}

export default CustomBox