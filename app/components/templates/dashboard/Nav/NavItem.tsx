"use client";

import { useMenuStore } from "@/lib/store/dashboardMenuStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function NavItem({
  className,
  title,
  icon,
  url,
  currentPath,
}: {
  className?: string;
  title: string;
  icon: ReactNode;
  currentPath: string;
  url: string;
}) {
  const { closeMenu } = useMenuStore();

  const handleClick = () => {
    closeMenu();
  };
  return (
    <Link
      onClick={handleClick}
      href={url}
      className={cn(
        "flex  ps-4 mr-4 ml-7 rounded-r-md group hover:bg-neutral-300/20 tran-fast py-3",
        className,
        {
          "bg-white text-fe-c-blue-main  dashboard-menu-item-active hover:bg-white":
            url.includes(currentPath),
        }
      )}
    >
      <span
        className={cn("flex gap-2 tran-fast group-hover:translate-x-3", {
          "translate-x-3": url.includes(currentPath),
        })}
      >
        {icon}
        <span> {title}</span>
      </span>
    </Link>
  );
}
