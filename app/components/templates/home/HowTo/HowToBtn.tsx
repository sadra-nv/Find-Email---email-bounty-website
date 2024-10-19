import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function HowToBtn({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      className={cn(
        "font-bold px-7 py-3 bg-how-btn rounded-md text-xs md:text-sm btn-hover",
        className
      )}
    >
      {children}
    </button>
  );
}
