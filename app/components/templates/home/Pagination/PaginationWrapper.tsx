// import Link from 'next/link'
import React from "react";

import { getBlogPosts } from "@/lib/services/blogs/getBlogPosts";
import Pagination from "./Pagination";

const PaginationWrapper = async ({
  params,
}: {
  params: {
    page: number | null;
    query: string | null;
    filter_method: "search" | "tags" | "category" | null;
  };
}) => {
  const data = await getBlogPosts(params);
  if (!data) return;
  const meta = data.data.meta;
  // console.log(data.data.meta);
  // {
  //   page: 1,
  //   per_page: 4,
  //   total_pages: 6,
  //   total_items: 24,
  //   next: 2,
  //   prev: null
  // }

  //   <ExerSingleNavItem
  //   activeTag={searchParams.category}
  //   tag="all"
  //   title="همه"
  // />

  // const dots = [0, 1, 2, 3];

  return (
    <div className="flex items-center gap-1">
      {<Pagination meta={meta} />}

      <span></span>
    </div>
  );
};

export default PaginationWrapper;
