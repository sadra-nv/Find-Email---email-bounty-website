import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TicketsItem({ className }: { className?: string }) {
  return (
    <Link
      href="/dashboard/tickets/546"
      className={cn(
        "p-6 px-7 gap-4 sm:gap-6 flex items-center justify-start w-full",
        className
      )}
    >
      <h2 className="text-sm sm:text-base text-fe-c-text-title text-nowrap max-w-[9.375rem] truncate">
        Chanlder Bining
      </h2>
      <p
        className="text-fe-c-text-sub ml-4 sm:ml-9
        text-xs sm:text-sm max-w-[6.25rem] xs:max-w-[18.75rem] sm:max-w-[32.5rem] truncate"
      >
        Launch multichannel campaigns, measure and improve your deliverability.
      </p>
      <div className="text-sm text-fe-c-text-sub ml-auto">8:40</div>
    </Link>
  );
}
