"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/templates/UI/ShadTable/ShadTable";
import { Button } from "@headlessui/react";

interface DataItem {
  data: string;
  type: string;
  record: string;
  download: string;
}

export default function IndexedTable() {
  const data: DataItem[] = [
    {
      data: "Test.com",
      type: "Leak Database",
      record: "60546",
      download: "No",
    },
    {
      data: "Digikala.ir",
      type: "Leak Database",
      record: "50000",
      download: "No",
    },
    {
      data: "Test.com",
      type: "Leak Database",
      record: "60546",
      download: "No",
    },
    {
      data: "Digikala.ir",
      type: "Leak Database",
      record: "50000",
      download: "No",
    },
    {
      data: "Test.com",
      type: "Leak Database",
      record: "60546",
      download: "No",
    },
    {
      data: "Digikala.ir",
      type: "Leak Database",
      record: "50000",
      download: "No",
    },
  ];

  return (
    <div className="w-full  text-sm  bg-transparent text-fe-c-text-title">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b border-fe-c-text-sub bg-blue-500/10">
            <TableHead className="text-sm font-bold text-fe-c-text-title h-16">
              DATABASE NAME
            </TableHead>
            <TableHead className="text-sm font-bold text-fe-c-text-title h-16">
              RECORD
            </TableHead>
            <TableHead className="text-sm font-bold text-fe-c-text-title h-16">
              TYPE
            </TableHead>
            <TableHead className="text-sm font-bold text-fe-c-text-title h-16">
              DATE
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-fe-c-text-sub">
          {data.map((item, index) => (
            <TableRow
              key={index}
              className=" hover:bg-neutral-400/20  dark:hover:bg-white/10"
            >
              <TableCell className="text-fe-c-text-title py-5 max-w-16 truncate xl:max-w-full">
                {item.data}
              </TableCell>
              <TableCell className="text-fe-c-text-title py-5 max-w-16 truncate xl:max-w-full">
                {item.type}
              </TableCell>
              <TableCell
                className={
                  Number(item.record) > 60000
                    ? "text-green-500 font-sans py-5"
                    : "text-red-500 font-sans py-5"
                }
              >
                {item.record}
              </TableCell>
              <TableCell className="text-fe-c-text-title py-5">
                {item.download}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div
        className="flex items-center justify-center gap-2 md:px-7 px-3 py-3  shadow-sm
      mt-11 rounded-lg lg:mt-16 bg-[#F6F6F6] dark:bg-dark-card w-fit mx-auto font-sans "
      >
        <Button className="h-8 w-8 text-fe-c-text-title rounded-md hover:bg-gray-300/40 flex justify-center items-center">
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
            <path
              d="M0.00292961 4.50002C0.00292962 4.30014 0.0704387 4.10026 0.215103 3.94245L3.61952 0.228812C3.89921 -0.0762709 4.36213 -0.0762708 4.64181 0.228812C4.92148 0.533896 4.92148 1.03886 4.64181 1.34394L1.74854 4.50002L4.64181 7.65606C4.92148 7.96114 4.92148 8.4661 4.64181 8.77119C4.36213 9.07627 3.89921 9.07627 3.61952 8.77119L0.215102 5.05759C0.0704387 4.89979 0.0029296 4.6999 0.00292961 4.50002Z"
              className="fill-fe-c-text-title"
            />
          </svg>
        </Button>
        <Button className="h-8 w-8 bg-orange-grad-btn p-0 text-white shadow-md  rounded-md">
          1
        </Button>
        {[2, 3].map((page) => (
          <Button
            key={page}
            className="h-8 w-8 rounded-md hover:bg-gray-300/40 text-fe-c-text-title  "
          >
            {page}
          </Button>
        ))}
        <Button className="h-8 w-8 text-fe-c-text-title rounded-md hover:bg-gray-300/40 flex justify-center items-center">
          <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
            <path
              d="M5.77051 4.49998C5.77051 4.69986 5.703 4.89974 5.55833 5.05755L2.15391 8.77119C1.87423 9.07627 1.41131 9.07627 1.13162 8.77119C0.851959 8.4661 0.851959 7.96114 1.13162 7.65606L4.0249 4.49998L1.13162 1.34394C0.851959 1.03886 0.851959 0.533896 1.13162 0.228813C1.41131 -0.0762701 1.87423 -0.0762701 2.15391 0.228813L5.55833 3.94241C5.703 4.10021 5.77051 4.3001 5.77051 4.49998Z"
              className="fill-fe-c-text-title"
            />
          </svg>
        </Button>
        {/* <div className="relative hidden md:flex  w-fit px-4 gap-4 justify-center items-center">
          <Select
            className={cn(
              "  block w-full  appearance-none rounded-lg border-none  py-2.5 px-5 pr-10 text-sm/6 text-white",
              "bg-orange-grad-btn space-y-1 font-sans",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white",
              "*:text-neutral-950 dark:*:text-neutral-50"
            )}
          >
            <option value="10">10 / Page</option>
            <option value="20">20 / Page</option>
            <option value="50">50 / Page</option>
          </Select>
          <svg
            className="group pointer-events-none absolute top-1/2 -translate-y-1/2 right-9"
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.50002 4C3.34455 4 3.18909 3.94431 3.06635 3.82496L0.177965 1.0164C-0.0593217 0.785669 -0.0593217 0.403769 0.177965 0.173037C0.415252 -0.0576789 0.808004 -0.0576789 1.04529 0.173037L3.50002 2.55992L5.95471 0.173037C6.192 -0.0576789 6.58475 -0.0576789 6.82203 0.173037C7.05932 0.403769 7.05932 0.785669 6.82203 1.0164L3.93368 3.82496C3.81094 3.94431 3.65548 4 3.50002 4Z"
              fill="white"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}
