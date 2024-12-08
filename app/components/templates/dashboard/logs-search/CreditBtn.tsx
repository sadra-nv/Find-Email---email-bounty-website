import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import icon from "@/public/icons/credit_card_dashboard.png";
import Image from "next/image";

export default function CreditBtn({
  title,
  className,
  id,
  active,
  clickHandler,
}: {
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
        "flex items-center overflow-hidden  backdrop-blur-lg rounded-md relative",
        "justify-center gap-2 w-32 lg:w-40 py-3 bg-[#F3F3F3] dark:bg-white/10 border-black/20",
        " dark:border-white/30 text-black dark:text-white",
        "border  h-12 sm:h-14  text-xs lg:text-sm font-semibold",
        {
          " border-[#14B537] dark:border-[#03721B] text-white bg-gradient-to-t from-[#03721B] to-[#14B537]":
            active,
        },
        className
      )}
    >
      <Image
        src={icon}
        alt="icon"
        className="size-4 sm:size-5"
        width={22}
        height={22}
      />
      <span>{title}</span>
      {active && (
        <div className="p-0.5 scale-150 sm:scale-100 lg:p-1 bg-[#14B537] absolute top-0 left-0 rounded-br-md">
          <svg
            className="fill-white  size-2 lg:size-4 lg:scale-125"
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
