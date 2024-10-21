import { cn } from "@/lib/utils";

export default function GlowingArc({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pt-14 md:pt-6 w-full h-56 md:h-96 overflow-hidden",
        "flex justify-center items-center ",
        className
      )}
    >
      <div
        className="bg-blog-arc-main w-[62.5rem] h-[62.5rem]  rounded-full glowing-circle
            translate-y-80 scale-y-75 md:scale-x-125 flex justify-center items-start relative
            after:h-1/2 after:w-1/2 after:bg-blog-arc after:absolute 
            after:right-16 md:after:-right-10 after:top-5 after:scale-150 after:z-10
            before:h-1/2 before:w-1/2 before:bg-blog-arc-left before:absolute 
            before:left-16 md:before:-left-10 before:top-5 before:scale-150 before:z-10"
      >
        <div
          className="bg-blog-arc-second w-[89%] h-[89%] rounded-full  translate-y-7 md:translate-y-16 
             flex justify-center items-start"
        >
          <div className="bg-blog-arc-inside w-[89%] h-[89%] rounded-full translate-y-7 md:translate-y-16"></div>
        </div>
      </div>
    </div>
  );
}
