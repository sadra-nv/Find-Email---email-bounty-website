import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { ReactNode } from "react";

export default function PaymentBtn({
  children,
  title,
  className,
  id,
  active,
  clickHandler,
}: {
  children: ReactNode;
  title: string;
  className?: string;
  active: boolean;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
}) {
  return (
    <Button
      data-id={id}
      onClick={clickHandler}
      className={cn(
        "flex items-center overflow-hidden justify-center gap-2 w-32 lg:w-40 py-3 bg-purple-400/20 backdrop-blur-lg rounded-md relative",
        "border border-transparent h-12 sm:h-14  text-xs lg:text-base",
        { " border-green-700 bg-green-700/20": active },
        className
      )}
    >
      {children}
      <span>{title}</span>
      {active && (
        <div className="p-1 bg-green-700 absolute top-0 left-0 rounded-br-md">
          <svg
            className="fill-white scale-125"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        </div>
      )}
    </Button>
  );
}
