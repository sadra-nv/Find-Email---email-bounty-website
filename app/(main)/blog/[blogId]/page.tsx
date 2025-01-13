// import HeroSection from "@/app/components/templates/home/HeroSection/HeroSection";
import FilterableCard from "@/app/components/templates/blog/FilterableCardGallery/FiltrableCard";
import CategoriesSec from "@/app/components/templates/blog/FilterableCardGallery/CategoriesSec";
import PostsSide from "@/app/components/templates/blog/FilterableCardGallery/PostsSide";
import StarsSection from "@/app/components/templates/UI/StarsSection/StarsSection";
import { getBlogRelated } from "@/lib/services/blogs/getBlogRelated";
import { getBlogSingle } from "@/lib/services/blogs/getBlogSingle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Halo from "@/app/components/templates/UI/Halo/Halo";

export default async function page({ params }: { params: { blogId: string } }) {
  const data = await getBlogSingle(params.blogId);
  // console.log(data, params);
  if (!data) return;

  const related = await getBlogRelated(params.blogId);

  // console.log(related);

  return (
    <div className="z-20 relative">
      <StarsSection isStatic />
      <div className="">
        <div className="container">
          <div className="md:pt-52 pt-32">
            <div className="mb-8">
              <h1 className="text-xl xl:text-4xl font-bold mb-5">
                {data.data.title}
              </h1>
              <p className="text-sm/8 xl:text-lg">{data.data.description}</p>
            </div>
            <div className="grid xl:grid-cols-7 gap-6 pb-8">
              <div className="xl:col-span-5">
                <div className="w- mb-6">
                  <Image
                    src={data.data.image_url}
                    placeholder="blur"
                    blurDataURL={data.data.placeholderIMG}
                    className="w-full h-[18.75rem] object-cover rounded-lg"
                    width={900}
                    height={300}
                    alt={data.data.title}
                  />
                </div>
                <button>
                  <Link
                    href={"/"}
                    className="flex items-center mb-4 gap-1 px-[18px] py-3 rounded-lg text-xs text-black bg-gradient-to-t from-[#B1A110] to-[#FFF280]"
                  >
                    {data.data.category}
                  </Link>
                </button>

                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: data.data.content }}
                ></div>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  {data.data.tags.map((tag, i) => (
                    <Link
                      key={i}
                      href={"/"}
                      className={cn(
                        "flex items-center gap-1 px-[18px] py-3 rounded-lg text-xs text-black ",
                        "bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]",
                        {
                          "bg-gradient-to-t from-[#B1A110] to-[#FFF280]":
                            i === 0,
                        }
                      )}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="xl:col-span-2 flex flex-col gap-6">
                <CategoriesSec />
                <PostsSide />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <video className="mix-blend-lighten opacity-15 " autoPlay muted loop>
            <source src="/videos/q-c3d7becf.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-xs md:text-xl xl:text-3xl">
            Related Posts
          </div>
        </div>
      </div>
      {related && (
        <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mb-16 gap-y-10">
          <FilterableCard className="mx-auto" data={related.data.posts[0]} />

          {related.data.posts[1] && (
            <div className="justify-center items-center hidden xl:flex">
              <Halo className="size-40" />
            </div>
          )}

          <FilterableCard className="mx-auto" data={related.data.posts[1]} />

          {related.data.posts[2] && (
            <div className="justify-center items-center hidden xl:flex">
              <Halo className="size-40" />
            </div>
          )}

          <FilterableCard className="mx-auto" data={related.data.posts[2]} />
        </div>
      )}
    </div>
  );
}
