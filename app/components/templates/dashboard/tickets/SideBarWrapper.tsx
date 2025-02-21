import { Suspense } from "react";
import TicketsSidebar from "./TicketsSidebar";
import { getTicketsStats } from "@/lib/services/dashboard/tickets/getTicketsStats";

export default async function SideBarWrapper() {
  const stats = await getTicketsStats();

  if (!stats) {
    return (
      <aside
        className="md:w-[17.3125rem] hidden md:block max-w-80 mx-auto lg:ms-52  pt-28 pl-6 pr-4 no-bar space-y-4
bg-white dark:bg-transparent md:shadow-sm  md:fixed left-0 top-0 h-full min-h-screen max-h-[56.25rem] overflow-y-auto"
      ></aside>
    );
  }

  return (
    <Suspense
      fallback={
        <aside
          className="md:w-[17.3125rem] hidden md:block max-w-80 mx-auto lg:ms-52  pt-28 pl-6 pr-4 no-bar space-y-4
   bg-white dark:bg-transparent md:shadow-sm  md:fixed left-0 top-0 h-full min-h-screen max-h-[56.25rem] overflow-y-auto"
        ></aside>
      }
    >
      <TicketsSidebar stats={stats.data} />
    </Suspense>
  );
}
