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
import LikeBtn from "@/app/components/templates/blog/LikeBtn";

export default async function page({ params }: { params: { blogId: string } }) {
  const data = await getBlogSingle(params.blogId);
  // console.log(data, params);
  if (!data) return <div className="h-screen w-full"></div>;

  const related = await getBlogRelated(params.blogId);

  // console.log(related);

  return (
    <div className="z-20 relative min-h-screen">
      <StarsSection isStatic />
      <div className="">
        <div className="container ">
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
                <div className="flex justify-start items-center gap-3">
                  <div className="flex flex-row-reverse gap-2 justify-start items-center">
                    <svg
                      className="fill-neutral-50 size-4"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                    </svg>
                    {data.data.views}
                  </div>
                  <LikeBtn isLiked={data.data.liked} id={data.data.id} />
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

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}) {
  const details = await getBlogSingle(params.blogId);
  if (!details) return;
  return {
    title: details.data.title,
    describtion: details.data.meta_description,
    keywords: details.data.meta_keywords,
  };
}
