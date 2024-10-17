"use client";

import { PenTool, Cpu, Smartphone, Globe, Monitor } from "lucide-react";
import React, { ReactElement, useRef } from "react";
import CustomSeparator from "./CustomSeparator";
import CustomCard from "../molecules/CustomCard";
import { chown } from "fs";

const HorizontalScroller = ({
  children,
  width,
  scrollerStyle,
  isScrolling
}: {
  width: string;
  children: ReactElement[];
  scrollerStyle?: string;
  isScrolling? : boolean
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={scrollRef}
      className={
        `flex ${!isScrolling && 'justify-center'} space-x-4 gap-[30px] overflow-x-auto py-4 px-[calc((100%-1440px)/2)] scrollbar-none
        !items-center ` +
        scrollerStyle
      }
    >
        {children}
    </div>
  );
};

export default HorizontalScroller;