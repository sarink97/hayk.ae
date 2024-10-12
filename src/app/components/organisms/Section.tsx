import React, { ReactElement } from 'react'
import CustomCard from '../molecules/CustomCard'
import CustomSeparator from '../atoms/CustomSeparator'
import { TicketIcon } from 'lucide-react'
interface sectionProps{
    cardArray  : Array<{ title: string; icon: ReactElement; description: string; }>,
    title  :string
    logo : boolean
}
const Section = (props : sectionProps) => {
    const cardArray = props.cardArray;
    return (
        <div>
            <h1 className='text-cerise text-[32px] text-center font-bold p-[20px]'>Service</h1>
            <div className="relative w-[1000px] max-w-full h-auto overflow-x-auto 
                            scrollbar-thin scrollbar-thumb-cerise scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto
                            scrollbar-w-[200px]">
                <div className="relative w-[1000px] max-w-full h-auto overflow-x-auto 
                scrollbar-thin scrollbar-thumb-cerise scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto
                scrollbar-w-[200px]">
                    <div className="flex space-x-10 mb-[50px] px-4">
                        {cardArray.map((card, index) => (
                            <React.Fragment key={index}>
                                <CustomCard title={card.title} description={card.description} icon={card.icon} logo ={props.logo} />
                                {index < cardArray.length - 1 && <CustomSeparator />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section