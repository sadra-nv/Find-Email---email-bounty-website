import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";

export default function SearchNavBtn({
  className,
  active,
  title,
}: {
  className?: string;
  title: string;
  active: boolean;
}) {
  return (
    <Button
      className={cn(
        "outline-none text-xs min-w-24 px-4 py-2.5 rounded-md text-neutral-50",
        {
          "bg-white text-neutral-950 ": active,
        },
        className
      )}
    >
      <span className="text-nowrap">{title}</span>
    </Button>
  );
}
