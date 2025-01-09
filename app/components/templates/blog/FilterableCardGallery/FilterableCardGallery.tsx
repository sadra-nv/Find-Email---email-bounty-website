// import Link from "next/link";
import React, { Suspense } from "react";
import Pagination from "../../home/Pagination/Pagination";

// import pic from "@/public/images/546 4.png";
// import Image from "next/image";
import CategoriesSec from "./CategoriesSec";
import BlogStatsFallback from "../../UI/Loading/Skeletons/BlogStatsFallback";
import TagsSec from "./TagsSec";
import PostsSide from "./PostsSide";
import PostsGridSec from "./PostsGridSec";
import SpinnerSec from "../../UI/Loading/SpinnerSec";

export default function FilterableCardGallery() {
  return (
    <div className="">
      <div className="container">
        <div className="grid xl:grid-cols-7 gap-24">
          <div className="xl:col-span-5 gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Suspense fallback={<SpinnerSec />}>
              <PostsGridSec />
            </Suspense>
            <div className="hidden xl:flex justify-center col-span-3 mt-14">
              <Pagination></Pagination>
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
