import React, { ReactElement } from 'react';
import CustomCard from '../molecules/CustomCard';
import CustomSeparator from '../atoms/CustomSeparator';
import HorizontalScroller from '@/app/components/atoms/HorizontalScroller';
import { StaticImageData } from 'next/image';

interface SectionProps {
    cardArray: Array<{ 
        title: string; 
        icon?: ReactElement;
        logo?: StaticImageData;
        description: string; 
        link?: string 
    }>;
    title: string;
    logo: boolean;
}

const Section = (props: SectionProps) => {
  const cardArray = props.cardArray;

  return (
    <div className='border-t-[2px] border-b-[2px] border-prussianBlue p-[10px]'>
      <h1 className='text-cerise text-[40px] text-center font-bold p-[20px] pb-[0px]'>{props.title}</h1>
      <div className="relative max-w-full h-auto overflow-x-auto scrollbar-thin scrollbar-thumb-cerise scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto scrollbar-w-[200px]">
        <div className="relative w-full h-auto overflow-x-auto scrollbar-thin scrollbar-thumb-cerise scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full m-auto scrollbar-w-[200px]">
          <HorizontalScroller width={''} isScrolling={cardArray.length >= 4}>
            {cardArray.map((card, index) => (
              <React.Fragment key={index}>
                <CustomCard 
                  title={card.title} 
                  description={card.description} 
                  icon={card.icon} 
                  logo={card.logo} 
                  link={card.link} 
                />
                {index < cardArray.length - 1 && <CustomSeparator />}
              </React.Fragment>
            ))}
          </HorizontalScroller>
        </div>
      </div>
    </div>
  );
};

export default Section;
