import TicketsSec from "@/app/components/templates/dashboard/tickets/TicketsSec";

export default function DashboardTicketPage({
  searchParams,
}: {
  searchParams: { tag: "all" | "open" | "close" };
}) {
  return (
    <>
      <TicketsSec activeTag={searchParams.tag} />
    </>
  );
}
