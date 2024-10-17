
"use client";
import PopUp from "@/components/atoms/PopUp";
import Hero from "./hero/page";
import Footer from "@/components/organism/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-[100vh] bg-gray-300"></div>
    </div>
  );
}
