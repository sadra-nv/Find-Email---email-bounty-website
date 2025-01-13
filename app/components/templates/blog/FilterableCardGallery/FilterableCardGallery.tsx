// import Link from "next/link";
import React, { Suspense } from "react";

// import pic from "@/public/images/546 4.png";
// import Image from "next/image";
import CategoriesSec from "./CategoriesSec";
import BlogStatsFallback from "../../UI/Loading/Skeletons/BlogStatsFallback";
import TagsSec from "./TagsSec";
import PostsSide from "./PostsSide";
import PostsGridSec from "./PostsGridSec";
import SpinnerSec from "../../UI/Loading/SpinnerSec";
import PaginationWrapper from "../../home/Pagination/PaginationWrapper";

export default function FilterableCardGallery({
  params,
}: {
  params: {
    page: number | null;
    query: string | null;
    filter_method: "search" | "tags" | "category" | null;
  };
}) {
  return (
    <div className="">
      <div className="container">
        <div className="grid xl:grid-cols-7 gap-24 mt-8 sm:mt-0">
          <div className="xl:col-span-5 gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:max-h-[65.625rem]">
            <Suspense
              fallback={
                <SpinnerSec className="col-span-1 md:col-span-2 xl:col-span-3" />
              }
            >
              <PostsGridSec params={params} />
            </Suspense>
            <div className="flex justify-center col-span-1 md:col-span-2 xl:col-span-3 mt-14">
              <Suspense fallback={<div></div>}>
                <PaginationWrapper params={params} />
              </Suspense>
            </div>
          </div>
          <div className="xl:col-span-2 flex flex-col gap-6">
            <Suspense fallback={<BlogStatsFallback title="Categories" />}>
              <CategoriesSec />
            </Suspense>
            <Suspense fallback={<BlogStatsFallback title="Posts" />}>
              <PostsSide />
            </Suspense>
            <Suspense fallback={<BlogStatsFallback title="Tags" />}>
              <TagsSec />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
