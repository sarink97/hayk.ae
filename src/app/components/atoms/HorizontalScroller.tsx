"use client";

import { ReactElement, useRef } from "react";

const HorizontalScroller = ({
  children,
  scrollerStyle,
  isScrolling
}: {
  children: ReactElement[];
  scrollerStyle?: string;
  isScrolling? : boolean
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={scrollRef}
      className={
        `flex ${!isScrolling && 'justify-center'} space-x-4 gap-[30px] overflow-x-auto py-4 px-[6%] scrollbar-none
        !items-center ` +
        scrollerStyle
      }
    >
        {children}
    </div>
  );
};

export default HorizontalScroller;