import {
  Cpu,
  Globe,
  Monitor,
  PenTool,
  Smartphone
} from "lucide-react";
import { ReactElement } from "react";
import Section from "../organisms/Section";

const ApricodeSection = () => {
  const cardArray: Array<{
    title: string;
    icon: ReactElement;
    description: string;
  }> = [
    {
      title: "Graphic Design",
      icon: <PenTool />,
      description:
        "We specialize in creating unique visual identities, print materials, and promotional videos for businesses.",
    },
    {
      title: "Electronics Engineering",
      icon: <Cpu />,
      description:
        "We provide energy solutions, system designs, and protection systems for homes and industrial setups.",
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone />,
      description:
        "We build mobile apps for Android and iOS, providing tailored solutions for diverse business needs.",
    },
    {
      title: "Web Applications",
      icon: <Globe />,
      description:
        "We design secure websites and web systems with a focus on user experience and functionality.",
    },
    {
      title: "Desktop Applications",
      icon: <Monitor />,
      description:
        "We create desktop software for Windows systems, offering customized and secure platforms.",
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
