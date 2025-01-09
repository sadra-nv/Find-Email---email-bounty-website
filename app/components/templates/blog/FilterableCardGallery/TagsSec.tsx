import { getBlogStats } from "@/lib/services/blogs/getBlogsStats";
import Link from "next/link";
import React from "react";

export default async function TagsSec() {
  const data = await getBlogStats();
  //   console.log(data);

  if (!data) return;

  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
      <div className="text-sm py-4 bg-gradient-to-t from-[#2E2291] to-[#8F5CE1] text-center">
        Tags
      </div>
      <ul className="flex flex-col gap-4 p-4">
        {data.data.tags.top.map((data, i) => (
          <li key={i}>
            <Link
              href={"/"}
              className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
            >
              <span className="text-xs">{data.name}</span>
              <span className="text-[10px]">({data.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
