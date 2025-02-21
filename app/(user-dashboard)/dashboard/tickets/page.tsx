import TicketsSec from "@/app/components/templates/dashboard/tickets/TicketsSec";

export const revalidate = 0;

export default function DashboardTicketPage({
  searchParams,
}: {
  searchParams: { tag: "all" | "open" | "closed" | "pending"; page: string };
}) {
  return (
    <>
      <TicketsSec activeTag={searchParams.tag} page={searchParams.page} />
    </>
  );
}
