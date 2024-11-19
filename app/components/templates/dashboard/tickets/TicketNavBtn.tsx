"use client";

import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function TicketNavBtn({
  children,
  className,
  activeTag,
  tag,
  title,
}: {
  tag: "all" | "open" | "close";
  className?: string;
  activeTag: "all" | "open" | "close" | null;
  children: ReactNode;
  title: string;
}) {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`?tag=${tag}`);
  };
  return (
    <Button
      onClick={clickHandler}
      className={cn(
        "outline-none text-xs min-w-24 px-4 py-2.5 rounded-md text-neutral-50",
        {
          "bg-white text-neutral-950 ":
            tag === activeTag || (!activeTag && tag === "all"),
        },
        className
      )}
    >
      <span className="text-nowrap">{title}</span>
      {activeTag && children}
    </Button>
  );
}
