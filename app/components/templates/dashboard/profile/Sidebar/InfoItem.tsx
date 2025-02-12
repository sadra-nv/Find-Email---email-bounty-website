import { cn } from "@/lib/utils";

export default function InfoItem({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border border-neutral-500 dark:border-neutral-300 rounded-xl",
        "w-full pb-4 pt-6 text-center px-4",
        className
      )}
    >
      <h4
        className="text-fe-c-text-title text-xs bg-fe-c-bg-light dark:bg-[#160123] font-bold absolute -top-2 px-2
        left-1/2 -translate-x-1/2 "
      >
        {title}
      </h4>
      <p className="text-fe-c-text-title font-semibold text-sm overflow-x-auto thin-bar">
        {desc}
      </p>
    </div>
  );
}
