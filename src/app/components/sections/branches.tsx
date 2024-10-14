import { Building2, Cpu, TicketIcon, TicketsPlane } from 'lucide-react';
import Section from '../organisms/Section';
import React, { ReactElement } from 'react'


const Branches = () => {
    const cardArray: Array<{ title: string; icon: ReactElement; description: string; }> = [
        { 
            title: 'Company Formation', 
            icon: <Building2 />, 
            description: 'We assist you in establishing your company—whether mainland, freezone, or offshore—tailored to your needs and budget, ensuring a smooth and efficient process.' 
        },
        { 
            title: 'Tourism', 
            icon:<TicketsPlane />, 
            description: 'Discover Armenia and Georgia with our personalized tourism services, offering unique travel experiences and guided tours in these beautiful countries.' 
        },
        { 
            title: 'Digital Solutions', 
            icon:<Cpu />, 
            description: 'We provide comprehensive services in graphic design, electronics engineering, mobile and web application development, as well as desktop software solutions.' 
        },
    ];
    return (
        <div>
            <Section cardArray={cardArray} title={"Branches"} logo={false}/>
        </div>
    )
}

export default Branches