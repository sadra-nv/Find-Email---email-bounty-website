"use client";

import { useState } from "react";
import QAItem from "./QAItem";

export default function QAList({ faq }: { faq: number }) {
  const items = [0, 0, 0, 0, 0, 0, 0];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-20);
      return;
    }
    setActiveIndex(index);
  };
  return (
    <ul className="flex w-full justify-start items-start flex-col gap-4 mobile-medium:gap-3">
      {items.map((item, index) => (
        <QAItem
          activeIndex={activeIndex!}
          handleOpen={handleOpen}
          index={index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
}
