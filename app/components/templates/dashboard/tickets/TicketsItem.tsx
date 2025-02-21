import { cn } from "@/lib/utils";
import Link from "next/link";

export default function TicketsItem({
  className,
  data,
}: {
  data: {
    ticket_id: string;
    subject: string;
    status: string;
    last_message: string;
    created_at: number;
    updated_at: number;
    last_message_time: number;
  };
  className?: string;
}) {
  const date = new Date(data.last_message_time * 1000); // Convert seconds to milliseconds

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return (
    <Link
      href="/dashboard/tickets/546"
      className={cn(
        "p-6 px-7 gap-4 sm:gap-6 flex items-center justify-start w-full hover:bg-[#F3F3F3] dark:hover:bg-white/10",
        className
      )}
    >
      <h2 className="text-sm sm:text-base text-fe-c-text-title text-nowrap max-w-[9.375rem] truncate">
        {data.subject}
      </h2>
      <p
        className="text-fe-c-text-sub ml-4 sm:ml-9
        text-xs sm:text-sm max-w-[6.25rem] xs:max-w-[18.75rem] sm:max-w-[32.5rem] truncate"
      >
        {data.last_message}
      </p>
      <div className="text-sm text-fe-c-text-sub ml-auto">
        {`${hours}:${minutes}`}
      </div>
    </Link>
  );
}
