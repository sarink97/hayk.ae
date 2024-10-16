

import ApricodeSection from "./components/sections/ApricodeSection";
import Branches from "./components/sections/About";
import Services from "./components/sections/Services";
import AboutUsSection from "./components/atoms/About";


export default function Home() {
  return (
      <>
        <Services />
        <ApricodeSection />
        <Branches />
        <AboutUsSection />
      </>
  );
}
