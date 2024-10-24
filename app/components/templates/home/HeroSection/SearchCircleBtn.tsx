"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export default function SearchCircleBtn({
  className,
  id,
  pic,
  style,
  focusId,
  rotateWheel,
}: {
  className?: string;
  id: number;
  focusId: number;
  pic: StaticImageData;
  style?: CSSProperties;
  rotateWheel: (id: number) => void;
}) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id ? e.currentTarget.dataset.id : 1;
    // console.log(id);
    rotateWheel(Number(id));
  };
  return (
    <button
      onClick={clickHandler}
      data-id={id}
      style={style}
      className={cn(
        "p-2 min-w-10 max-w-10 relative rounded-full bg-highlight-dark border-2 border-neutral-50 flex justify-center items-center",
        className,
        { "bg-orange-grad-btn": id === focusId || (focusId === 0 && id === 4) }
      )}
    >
      {/* <div className="absolute -right-14 -top-2">News</div> */}
      <Image
        src={pic}
        width={26}
        height={26}
        alt="icon"
        className="w-full h-auto"
      />
    </button>
  );
}
