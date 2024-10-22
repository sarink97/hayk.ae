import { Building2, Cpu, TicketsPlane } from "lucide-react";
import { ReactElement } from "react";
import Section from "../organisms/Section";

const Services = () => {
  const cardArray: Array<{
    title: string;
    icon: ReactElement;
    description: string;
  }> = [
    {
      title: "Company Formation",
      icon: <Building2 />,
      description:
        "We assist in establishing your company—mainland, freezone, or offshore—tailored to your needs and budget, ensuring a smooth and efficient process.",
    },
    {
      title: "Tourism",
      icon: <TicketsPlane />,
      description:
        "Explore Armenia and Georgia with our personalized tourism services, offering unique experiences and guided tours across these countries.",
    },
    {
      title: "Digital Solutions",
      icon: <Cpu />,
      description:
        "We provide services in graphic design, electronics engineering, mobile and web development, and desktop software solutions.",
    },
  ];

  return (
    <div id="services">
      <Section cardArray={cardArray} title={"Services"} logo={false} />
    </div>
  );
};

export default Services;
