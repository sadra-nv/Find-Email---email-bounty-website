"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode } from "react";

export default function SearchCircleBtn({
  className,
  id,
  pic,
  style,
  focusId,
  rotateWheel,
  children,
}: {
  className?: string;
  id: number;
  focusId: number;
  pic: StaticImageData;
  style?: CSSProperties;
  children?: ReactNode;
  rotateWheel: (id: number) => void;
}) {
  const clickHandler = () => {
    // if(!e.currentTarget.dataset.id) return
    // const minusID = e.currentTarget.dataset.id -1
    // const id = e.currentTarget.dataset.id ? e.currentTarget.dataset.id : 1;
    // console.log(id);
    rotateWheel(id);
  };
  return (
    <button
      onClick={clickHandler}
      data-id={id}
      style={style}
      className={cn(
        "p-2 min-w-10 max-w-10  rounded-full bg-highlight-dark ",
        "border-2 border-neutral-50 flex justify-center items-center",
        "absolute left-1/2 top-1/2 origin-top-left",
        className,
        { "bg-orange-grad-btn": id === focusId }
      )}
    >
      {children}
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
