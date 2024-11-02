import { book, historyBook, orders, shield, user } from "@/lib/svg-dump";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function Account() {
  const currentPath = usePathname();

  return (
    <div className="text-white font-bold text-sm mb-20">
      <div className="w-full mb-8 h-[0.0625rem]  bg-white relative mt-8  z-0 ">
        <h2
          className="absolute left-8 top-1/2 -translate-y-1/2
 z-10 bg-fe-c-blue-main p-1 "
        >
          Account
        </h2>
      </div>

      <div className="space-y-2">
        <NavItem
          url="/dashboard/profile"
          currentPath={currentPath}
          title="Profile"
          icon={user}
        />
        <NavItem
          url=""
          currentPath={currentPath}
          title="Sessions"
          icon={book}
        />
        <NavItem
          url="/dashboard/payment-history"
          currentPath={currentPath}
          title="Payment History"
          icon={historyBook}
        />
        <NavItem
          url="/dashboard/orders"
          currentPath={currentPath}
          title="Orders"
          icon={orders}
        />
        <NavItem
          url="/dashboard/security"
          currentPath={currentPath}
          title="Security"
          icon={shield}
        />
      </div>
    </div>
  );
}
