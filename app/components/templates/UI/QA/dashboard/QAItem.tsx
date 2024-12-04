import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";

// import { useState } from "react";

export default function QAItem({
  faq,
  index,
  handleOpen,
  activeIndex,
}: {
  faq: number;
  handleOpen: (index: number) => void;
  index: number;
  activeIndex: number;
}) {
  // const [open, setOpen] = useState(false);
  const clickHandler = () => {
    // setOpen((prevState) => !prevState);
    console.log(faq);
    handleOpen(index);
  };

  // TOdo remove this
  // console.log(faq);

  return (
    <li className={cn("w-full rounded-lg")}>
      <Button
        onClick={clickHandler}
        className={cn(
          "w-full font-medium bg-[#1A1B31] flex justify-between text-justify gap-3",
          "items-start rounded-lg relative text-white z-10 p-4 text-sm overflow-hidden transition-all duration-300",
          {
            " p-4 bg-back-dark w-full max-w-full": activeIndex === index,
          }
        )}
      >
        <h4
          className={cn("truncate xl:w-11/12 w-4/5", {
            "overflow-auto w-fit max-w-full text-wrap": activeIndex === index,
          })}
        >
          dwdawj iwdwad jidw wjidjiw jidjwijiwdj?
        </h4>
        <svg
          viewBox="0 0 20 20"
          className={cn(
            "size-5 fill-neutral-50 rotate-90 transition-transform duration-200",
            {
              "-rotate-90": activeIndex === index,
            }
          )}
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      <div
        className={cn(
          "relative z-0 overflow-hidden transition-all duration-300 ease",
          "max-h-0 opacity-0  rounded-lg text-sm origin-top text-white",
          "leading-loose text-justify -translate-y-4 lg:space-y-4 space-y-2",
          {
            "max-h-fit opacity-100  py-4 px-4 bg-back-dark":
              activeIndex === index,
          }
        )}
      >
        dwandaijdwj jpdwjopawdj jawj owjoajwd jdowajdjaw jopwdojadwj dwandaijdwj
        jpdwjopawdj jawj owjoajwd jdowajdjaw jopwdojadwj dwandaijdwj jpdwjopawdj
        jawj owjoajwd jdowajdjaw jopwdojadwj dwandaijdwj jpdwjopawdj jawj
        owjoajwd jdowajdjaw jopwdojadwj dwandaijdwj jpdwjopawdj jawj owjoajwd
        jdowajdjaw jopwdojadwj
      </div>
    </li>
  );
}
