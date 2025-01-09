import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div
      role="status"
      className={cn(
        "mt-8 inline-block h-10 w-10 animate-spin",
        "rounded-full border-[0.1875rem] border-solid border-highlight-med",
        "border-r-transparent align-[-0.125em]",
        "motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      )}
    ></div>
  );
}
