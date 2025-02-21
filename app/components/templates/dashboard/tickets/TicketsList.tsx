import { getTicketsList } from "@/lib/services/dashboard/tickets/getTicketsList";
import TicketsItem from "./TicketsItem";
import DashPagination from "../../UI/DashPagination/DashPagination";

export default async function TicketsList({
  page,
  activeTag,
}: {
  page: string;
  activeTag: "all" | "open" | "closed" | "pending" | null;
}) {
  const tickets = await getTicketsList({
    filter_method: activeTag,
    page: Number(page),
  });
  //   console.log(tickets);
  if (!tickets) {
    return (
      <div className="w-full text-center flex justify-center items-center h-72">
        <p>No Tickets Found!!!</p>
      </div>
    );
  }

  return (
    <>
      <div className="divide-y divide-[#CDCDCD]/50 border-y border-y-[#CDCDCD]/50">
        {tickets.data.tickets.map((ticket) => (
          <TicketsItem key={ticket.ticket_id} data={ticket} />
        ))}
      </div>
      <DashPagination meta={tickets.data.meta} />
    </>
  );
}
