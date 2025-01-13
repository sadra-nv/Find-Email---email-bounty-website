import React from "react";
// import email from "@/public/icons/email-icon.png";
// import speaker from "@/public/icons/speaker-icon.png";
// import database from "@/public/icons/data-icon.png";
// import wrentch from "@/public/icons/wrentch-icon.png";
// import Image from "next/image";
// import { Button } from "@headlessui/react";
import { getBlogStats } from "@/lib/services/blogs/getBlogsStats";
import CatItems from "./CatItems";

export default async function CategoryList() {
  const data = await getBlogStats();

  if (!data) return;

  return (
    <section className="mb-6 md:mb-12">
      <div className="">
        <div className="flex sm:justify-center gap-0 md:gap-0 w-full overflow-auto">
          <CatItems data={data.data.categories.top} />
          {/* <Button className="px-10 py-2 rounded-lg text-xs ml-6 hover-btn shrink-0">
            All Tags
          </Button>
          <Button className="flex items-center gap-2 shrink-0">
            <Image
              placeholder="blur"
              className="w-5 h-auto"
              src={email}
              alt="company email"
              width={20}
              height={20}
            />
            <h4 className="text-sm md:text-base">Company Email</h4>
          </Button>
          <Button className="flex items-center gap-2 shrink-0">
            <Image
              className="w-5 h-auto"
              src={database}
              width={20}
              height={20}
              alt="leaked databases"
            />
            <h4 className="text-sm md:text-base">Leaked Database</h4>
          </Button>
          <Button className="flex items-center gap-2 shrink-0">
            <Image
              className="w-5 h-auto"
              src={speaker}
              width={20}
              height={20}
              alt="news "
            />
            <h4 className="text-sm md:text-base">News</h4>
          </Button>
          <Button className="flex items-center gap-2 shrink-0 mr-6">
            <Image
              className="w-5 h-auto"
              src={wrentch}
              width={20}
              height={20}
              alt="tools "
            />
            <h4 className="text-sm md:text-base">Tools</h4>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
