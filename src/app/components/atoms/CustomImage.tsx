import React from 'react'
import Image from 'next/image'
import logo from './../../public/Nare_logo_menu_web.webp'
const CustomImage = () => {
    return (
        <div className='rounded-full border-solid border-[2px] border-prussianBlue
                        bg-white relative z-[1000]
                        text-prussianBlue
                        flex justify-center items-center 
                        w-[100px] h-[100px] mb-[-40px]
                        group-hover:animate-border-spin-once group-hover:text-cerise transition-colors duration-300'>
            <Image src={logo} alt={''} className=''/>
        </div>
    )
}

export default CustomImage