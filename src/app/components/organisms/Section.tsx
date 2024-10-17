import React, { Fragment, ReactElement } from 'react'
import CustomCard from '../molecules/CustomCard'
import CustomSeparator from '../atoms/CustomSeparator'
import { TicketIcon } from 'lucide-react'
import HorizontalScroller from '@/app/components/atoms/HorizontalScroller';
import { StaticImageData } from 'next/image';
interface sectionProps{
    cardArray  : Array<{ title: string; icon?: ReactElement; logo?: StaticImageData; description: string; }>,
    title  :string
    logo : boolean
}
const Section = (props : sectionProps) => {
    const cardArray = props.cardArray;
    return (
        <div className='border-t-[2px] border-b-[2px] border-prussianBlue
                        py-[10px]'>
            <h1 className='text-cerise text-[40px] text-center font-bold p-[20px] pb-[0px]'>{props.title}</h1>
            <div className="relative  max-w-full h-auto overflow-x-auto 
                            scrollbar-thin scrollbar-thumb-cerise scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto
                            scrollbar-w-[200px] ">
                <div className="relative w-full h-auto overflow-x-auto 
                scrollbar-thin scrollbar-thumb-cerise  scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto
                scrollbar-w-[200px]">
                    <HorizontalScroller width={''} isScrolling={
                        cardArray.length >= 4 ? true : false
                    }>
                        {cardArray.map((card, index) => (
                                <>
                                    <CustomCard key={index} title={card.title} description={card.description} icon={card.icon} logo ={card.logo}  />
                                    {index < cardArray.length - 1 && <CustomSeparator />}
                                </>
                        ))}
                    </HorizontalScroller>
                </div>
            </div>
        </div>
    )
}

export default Section