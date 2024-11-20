import Header from "@/app/components/templates/dashboard/Header/Header";
import TicketsSidebar from "@/app/components/templates/dashboard/tickets/TicketsSidebar";
import { ReactNode, Suspense } from "react";

export default function TicketsLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="md:ms-[17.3125rem] md:w-[calc(100%_-_17.3125rem)]
           lg:ms-52 lg:w-[calc(100%_-_13rem)]"
    >
      <Suspense
        fallback={
          <aside
            className="md:w-[17.3125rem] hidden md:block max-w-80 mx-auto lg:ms-52  pt-28 pl-6 pr-4 no-bar space-y-4
       bg-white dark:bg-transparent md:shadow-sm  md:fixed left-0 top-0 h-full min-h-screen overflow-y-auto"
          ></aside>
        }
      >
        <TicketsSidebar />
      </Suspense>
      <div className="w-full h-full lg:ms-[17.3125rem] lg:w-[calc(100%_-_17.3125rem)] lg:pl-5 lg:pr-8">
        <Header className="" />
        <main className=" h-full pt-40 sm:pt-0 w-full">{children}</main>
      </div>
    </div>
  );
}
