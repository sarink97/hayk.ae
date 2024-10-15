import React ,{ReactElement} from 'react'
import CustomCircle from "../atoms/CustomCircle";
import { TicketsPlane } from 'lucide-react';
import CustomBox from '../atoms/CustomBox';
import CustomImage from '../atoms/CustomImage';
interface cardProps{
    title : string,
    description : string,
    icon  : ReactElement,
    logo : boolean
}
const CustomCard = (props  :cardProps) => {
    return (
        <div className='relative z-10 group flex flex-col items-center 
                transition-transform duration-300 hover:z-[1000] 
                hover:translate-y-[-30px] hover:cursor-pointer 
                hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
                pt-[30px]
                '>
            {props.logo ? <CustomImage/> : <CustomCircle iconName={props.icon} />}
            <CustomBox title={props.title} description={props.description} />
        </div>


    )
}

export default CustomCard