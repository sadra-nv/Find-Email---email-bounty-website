import Header from "@/app/components/templates/dashboard/Header/Header";
import TicketsSidebar from "@/app/components/templates/dashboard/tickets/TicketsSidebar";
import { ReactNode } from "react";

export default function TicketsLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="md:ms-[17.3125rem] md:w-[calc(100%_-_17.3125rem)]
           lg:ms-52 lg:w-[calc(100%_-_13rem)]"
    >
      <TicketsSidebar />
      <div className="w-full h-full lg:ms-[17.3125rem] lg:w-[calc(100%_-_17.3125rem)] lg:pl-5 lg:pr-8">
        <Header className="" />
        <main className=" h-full pt-40 sm:pt-0 w-full">{children}</main>
      </div>
    </div>
  );
}
