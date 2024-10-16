import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface imageProps{
    logo  :StaticImageData
}
const CustomImage = (props : imageProps) => {
    return (
        <div className='rounded-full border-solid border-[2px] border-prussianBlue
                        bg-white relative z-[1000]
                        text-prussianBlue
                        flex justify-center items-center object-cover
                        w-[100px] h-[100px] mb-[-40px]
                        group-hover:animate-border-spin-once group-hover:text-cerise transition-colors duration-300'>
            <Image src={props.logo} alt={''} className=''/>
        </div>
    )
}

export default CustomImage