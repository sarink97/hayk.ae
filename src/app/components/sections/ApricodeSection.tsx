import {
  Building2,
  Cpu,
  Globe,
  Monitor,
  PenTool,
  Smartphone,
  TicketIcon,
  TicketsPlane,
} from "lucide-react";
import Section from "../organisms/Section";
import React, { ReactElement } from "react";

const ApricodeSection = () => {
  const cardArray: Array<{
    title: string;
    icon: ReactElement;
    description: string;
  }> = [
    {
      title: "Web Applications",
      icon: <Globe />,
      description:
        "We design secure websites and web systems with a focus on user experience and functionality.",
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone />,
      description:
        "We build mobile apps for Android and iOS, providing tailored solutions for diverse business needs.",
    },
    {
      title: "Desktop Applications",
      icon: <Monitor />,
      description:
        "We create desktop software for Windows systems, offering customized and secure platforms.",
    },
    {
      title: "Graphic Design",
      icon: <PenTool />,
      description:
        "We specialize in creating unique visual identities, print materials, and promotional videos for businesses.",
    },
  ];

  return (
    <div id="Features">
      <Section
        cardArray={cardArray}
        title={"Apricodes Features"}
        logo={false}
      />
    </div>
  );
};

export default ApricodeSection;
