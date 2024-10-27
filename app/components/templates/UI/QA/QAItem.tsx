import { cn } from "@/lib/utils";

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
    <li
      className={cn(
        "w-full max-h-[3.25rem] text-sm overflow-hidden p-4  bg-[#1A1B31] rounded-lg ",
        {
          "max-h-fit  p-0 bg-transparent": activeIndex === index,
        }
      )}
    >
      <button
        onClick={clickHandler}
        className={cn(
          "w-full font-medium  max-h-[3.25rem] flex justify-between text-justify gap-3",
          "items-start rounded-lg relative z-10",

          {
            "border p-4 h-fit max-h-fit bg-[#1A1B31]": activeIndex === index,
          }
        )}
      >
        <h4
          className={cn("truncate xl:w-11/12 w-4/5", {
            "overflow-auto text-wrap": activeIndex === index,
          })}
        >
          dwdawj iwdwad jidw wjidjiw jidjwijiwdj?
          {/* {faq.question} */}
        </h4>
        <svg
          viewBox="0 0 20 20"
          className={cn(
            "size-5 fill-neutral-50  rotate-90",
            "ease-in duration-200 transition-all",
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
      </button>
      <div
        className={cn(
          "relative z-0 h-0 opacity-0 overflow-hidden -translate-y-full tran-fast bg-blue-900 bg-opacity-10 py-7",
          "text-sm ",
          " rounded-b-lg tablet-medium:rounded-b-md transition-transform duration-300 leading-loose text-justify lg:space-y-4 space-y-2",
          {
            "-translate-y-4 h-fit opacity-100 pb-4 px-4": activeIndex === index,
          }
        )}
      >
        dwandaijdwj jpdwjopawdj jawj owjoajwd jdowajdjaw jopwdojadwj
        {/* {faq.answer.split(/\\n|\n/).map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))} */}
      </div>
    </li>
  );
}
