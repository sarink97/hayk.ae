
import React, { ReactElement } from 'react'

interface CustomCircleProps{
    iconName: ReactElement;
}
const CustomCircle = (props  :CustomCircleProps) => {
    

  const clonedIcon = React.cloneElement(props.iconName, {
    className: `p-[10px] w-[50px] h-[50px] `,
  });
    return (
        <div className='rounded-full border-solid border-[2px] border-prussianBlue
                        bg-white z-[10]
                        text-prussianBlue
                        flex justify-center items-center 
                        w-[80px] h-[80px] mb-[-40px]
                        group-hover:animate-border-spin-once group-hover:text-cerise transition-colors duration-300'
        >
            {clonedIcon}
        </div>
    )
}

export default CustomCircle