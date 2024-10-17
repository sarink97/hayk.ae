import React from 'react'
import Section from '../organisms/Section'
import hayk from './../../public/hayk logo dark.png'
import georgia from '../../public/Hello-georgia.png'
import armenia from '../../public/HelloArmenia_logo.png'
import apricodes from './../../public/apricodes.webp'
import { StaticImageData } from 'next/image';

const Branches = () => {
  const cardArray: Array<{ title: string; logo: StaticImageData; description: string; link? : string }> = [
    { 
        title: 'Marhaba Armenia', 
        logo: armenia, 
        description: 'Discover Armenia with tailored tourism services, offering unique experiences and guided tours to explore the country.',
        link: "http://www.marhabaarmenia.com/"
    },
    { 
        title: 'Marhaba Georgia', 
        logo: georgia, 
        description: 'Explore Georgia with personalized tourism services, providing unforgettable travel experiences and guided tours throughout the region.',
        link: "http://www.marhabageorgia.com/"
    },
    { 
        title: 'Business Formation', 
        logo: hayk, 
        description: 'We help you establish your business with customized solutions, ensuring a smooth and efficient company formation process.' 
    },
    { 
        title: 'Apricodes', 
        logo: apricodes, 
        description: 'We provide cutting-edge digital solutions, including web development, mobile app creation, graphic design, and software engineering.' 
    }
];



  return (
    <Section cardArray={cardArray} title={'Our Companies'} logo={true} />
  )
}

export default Branches