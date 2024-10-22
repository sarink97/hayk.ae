"use client";
import AboutUsSection from "./components/atoms/About";
import Branches from "./components/sections/About";
import Services from "./components/sections/Services";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <AboutUsSection />
        <Services />
        <Branches />
      </div>
    </div>
  );
}
