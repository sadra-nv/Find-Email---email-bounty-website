import { getBlogStats } from "@/lib/services/blogs/getBlogsStats";
import React from "react";
import CatItems from "./CatItems";

export default async function CategoriesSec() {
  const data = await getBlogStats();

  if (!data) return;
  // console.log(data.data.categories);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
      <div className="text-sm py-4 bg-gradient-to-t from-[#2E2291] to-[#8F5CE1] text-center">
        Categories
      </div>
      <ul className="flex flex-col gap-4 p-4">
        <CatItems data={data.data.categories.top} />
        {/* <li>
          <Link
            href={"/"}
            className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
          >
            <span className="text-xs">url : login : pass</span>
            <span className="text-[10px]">(3)</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
