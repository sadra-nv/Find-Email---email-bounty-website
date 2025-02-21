"use client";

import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function TicketSideNavItem({
  className,
  children,
  count,
  activeTag,
  tag,
}: {
  tag: "all" | "open" | "closed" | "pending";
  activeTag: "all" | "open" | "closed" | "pending" | null;
  children: ReactNode;
  className?: string;
  count: number;
}) {
  const router = useRouter();

  const clickHandler = () => {
    router.replace(`/dashboard/tickets?tag=${tag}`);
  };
  return (
    <Button
      onClick={clickHandler}
      className={cn(
        " px-4 py-4 min-w-56 shadow-md ",
        "mx-auto text-sm  font-semibold rounded-lg",
        "bg-[#F3F3F3] dark:bg-white/15 text-fe-c-text-title *:stroke-fe-c-text-title *:fill-fe-c-text-title",
        "flex gap-2 justify-start items-center btn-hover",
        {
          "bg-orange-grad-btn text-white *:stroke-white  *:fill-white":
            tag === activeTag || (!activeTag && tag === "all"),
        },
        className
      )}
    >
      {children}
      <span
        className="text-[0.625rem] font-semibold text-black rounded-full size-5 
        flex justify-center items-center bg-white ml-auto"
      >
        {count}
      </span>
    </Button>
  );
}
