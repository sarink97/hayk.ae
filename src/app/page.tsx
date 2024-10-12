
import { ReactElement } from "react";
import CenterLayout from "./components/atoms/centerLayout";
import CustomSeparator from "./components/atoms/CustomSeparator";
import CustomCard from "./components/molecules/CustomCard";
import Section from "./components/organisms/Section";
import { TicketIcon } from "lucide-react";


export default function Home() {
  const cardArray: Array<{ title: string; icon: ReactElement; description: string; }> = [
    { title: 'Title1', icon: <TicketIcon />, description: 'Description1' },
    { title: 'Title2', icon: <TicketIcon />, description: 'Description1' },
    { title: 'Title3', icon: <TicketIcon />, description: 'Description1' },
    { title: 'Title3', icon: <TicketIcon />, description: 'Description3' },
    { title: 'Title4', icon: <TicketIcon />, description: 'Description1' },
];
  return (
      <Section cardArray={cardArray} title={'Services'} />
  );
}
