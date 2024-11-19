import { tickedUser, ticket } from "@/lib/svg-dump";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function DataBytes() {
  const currentPath = usePathname();

  return (
    <div className="text-white font-bold text-sm ">
      <div className="w-full mb-8 h-[0.0625rem]  bg-white relative mt-8 z-0 ">
        <h2
          className="absolute left-8 top-1/2 -translate-y-1/2
 z-10 bg-fe-c-blue-main p-1 "
        >
          Data Bays
        </h2>
      </div>

      <div className="space-y-2">
        <NavItem
          url="/dashboard/tickets"
          currentPath={currentPath}
          title="Ticket"
          icon={ticket}
        />
        <NavItem
          url="/dashboard/indexed"
          currentPath={currentPath}
          title="Indexed"
          icon={tickedUser}
        />
      </div>
    </div>
  );
}
