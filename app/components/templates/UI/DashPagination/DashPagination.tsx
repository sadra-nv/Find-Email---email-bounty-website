"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function DashPagination({
  meta,
  className,
}: {
  className?: string;
  meta: {
    page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    next: number | null;
    prev: number | null;
  };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageValue = event.currentTarget.getAttribute("data-page");
    // console.log("Data Value:", pageValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageValue as string);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {meta.total_pages !== 1 && (
        <div
          className={cn(
            "flex items-center justify-center gap-2 md:px-7 px-3 py-3  shadow-sm",
            "mt-11 rounded-lg lg:mt-16 bg-[#F6F6F6] dark:bg-dark-card w-fit mx-auto font-sans ",
            className
          )}
        >
          {meta.prev && (
            <Button
              onClick={handleClick}
              data-page={meta.page - 1}
              aria-label="page navigation previous button"
              className="h-8 w-8 text-fe-c-text-title rounded-md hover:bg-gray-300/40 flex justify-center items-center"
            >
              <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                <path
                  d="M0.00292961 4.50002C0.00292962 4.30014 0.0704387 4.10026 0.215103 3.94245L3.61952 0.228812C3.89921 -0.0762709 4.36213 -0.0762708 4.64181 0.228812C4.92148 0.533896 4.92148 1.03886 4.64181 1.34394L1.74854 4.50002L4.64181 7.65606C4.92148 7.96114 4.92148 8.4661 4.64181 8.77119C4.36213 9.07627 3.89921 9.07627 3.61952 8.77119L0.215102 5.05759C0.0704387 4.89979 0.0029296 4.6999 0.00292961 4.50002Z"
                  className="fill-fe-c-text-title"
                />
              </svg>
            </Button>
          )}

          {meta.page - 1 > 0 && (
            <Button
              onClick={handleClick}
              data-page={meta.page - 1}
              aria-label={"page   button"}
              className="h-8 w-8 rounded-md hover:bg-gray-300/40 text-fe-c-text-title  "
            >
              {meta.page - 1}
            </Button>
          )}

          <Button className="h-8 w-8 bg-orange-grad-btn p-0 text-white shadow-md  rounded-md">
            {meta.page}
          </Button>

          {meta.page + 1 <= meta.total_pages && (
            <Button
              onClick={handleClick}
              data-page={meta.page + 1}
              aria-label={"page   button"}
              className="h-8 w-8 rounded-md hover:bg-gray-300/40 text-fe-c-text-title  "
            >
              {meta.page + 1}
            </Button>
          )}

          {meta.next && (
            <Button
              onClick={handleClick}
              data-page={meta.page + 1}
              aria-label="page navigation next button"
              className="h-8 w-8 text-fe-c-text-title rounded-md
                hover:bg-gray-300/40 flex justify-center items-center"
            >
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
                <path
                  d="M5.77051 4.49998C5.77051 4.69986 5.703 4.89974 5.55833 5.05755L2.15391 8.77119C1.87423 9.07627 1.41131 9.07627 1.13162 8.77119C0.851959 8.4661 0.851959 7.96114 1.13162 7.65606L4.0249 4.49998L1.13162 1.34394C0.851959 1.03886 0.851959 0.533896 1.13162 0.228813C1.41131 -0.0762701 1.87423 -0.0762701 2.15391 0.228813L5.55833 3.94241C5.703 4.10021 5.77051 4.3001 5.77051 4.49998Z"
                  className="fill-fe-c-text-title"
                />
              </svg>
            </Button>
          )}
        </div>
      )}
    </>
  );
}
