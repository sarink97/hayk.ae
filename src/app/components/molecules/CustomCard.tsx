import React from 'react'
import CustomCircle from "../atoms/CustomCircle";
import { TicketsPlane } from 'lucide-react';
import CustomBox from '../atoms/CustomBox';

const CustomCard = () => {
    return (
        <div className='group flex flex-col items-center 
                        transition-transform duration-300 hover:translate-y-[-30px]
                        hover:cursor-pointer hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
            <CustomCircle iconName={<TicketsPlane/>}/>
            <CustomBox />
        </div>
    )
}

export default CustomCard