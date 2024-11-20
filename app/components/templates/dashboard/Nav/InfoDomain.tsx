"use client";

import {
  dataBase,
  domain,
  // folder,
  price,
  shop,
  spyGlass,
  web,
} from "@/lib/svg-dump";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

export default function InfoDomain() {
  const currentPath = usePathname();

  return (
    <div className="text-white font-bold text-sm ">
      <div className="w-full mb-8 h-[0.0625rem]  bg-white relative mt-14 z-0 ">
        <h2
          className="absolute left-8 top-1/2 -translate-y-1/2
     z-10 bg-fe-c-blue-main p-1 "
        >
          Info Domain
        </h2>
      </div>

      <div className="space-y-2">
        <NavItem
          url="/dashboard/logs-search"
          currentPath={currentPath}
          title="Logs Search"
          icon={spyGlass}
        />
        <NavItem
          url="/dashboard/leaked-databases"
          currentPath={currentPath}
          title="Leak Database"
          icon={dataBase}
        />
        <NavItem
          currentPath={currentPath}
          url="/dashboard/web-technology"
          title="Web Technology"
          icon={web}
        />
        <NavItem
          currentPath={currentPath}
          url="/dashboard/domain-search"
          title="Domain Search"
          icon={domain}
        />
        <NavItem
          currentPath={currentPath}
          url="/dashboard/bulk-search"
          title="Bulk Search"
          icon={spyGlass}
        />
        {/* <NavItem
          currentPath={currentPath}
          url=""
          title="Reservation"
          icon={folder}
        /> */}
        <NavItem
          currentPath={currentPath}
          url="/dashboard/pricing"
          title="Pricing"
          icon={price}
        />
        <NavItem
          currentPath={currentPath}
          url="/dashboard/shop"
          title="Shop"
          icon={shop}
        />
      </div>
    </div>
  );
}
