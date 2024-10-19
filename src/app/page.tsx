"use client";
import PopUp from "@/components/atoms/PopUp";
import Hero from "./hero/page";
import Footer from "@/components/organism/Footer";
import AboutUsSection from "./components/atoms/AboutHayk";
import Branches from "./components/sections/About";
import ApricodeSection from "./components/sections/ApricodeSection";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <AboutUsSection />
        <Services />
        <ApricodeSection />
        <Branches />
      </div>
    </div>
  );
}
