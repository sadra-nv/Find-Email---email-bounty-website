import Link from "next/link";
import Image from "next/image";
import speaker from "@/public/images/speaker 1.png";
import calender from "@/public/images/calender.png";
import { SinglePostCard } from "@/lib/services/blogs/getBlogPosts";
import { cn } from "@/lib/utils";
import { RelatedArticleSingle } from "@/lib/services/blogs/getBlogRelated";

export default function FilterableCard({
  data,
  className,
}: {
  data: SinglePostCard | RelatedArticleSingle;
  className?: string;
}) {
  // console.log(data);
  const placeholder = !data ? "" : data.placeholderIMG;

  if (!data) return;
  return (
    <div className={cn("filter-card group w-fit", className)}>
      <div className="relative flex justify-center items-center ">
        <div className="justify-center items-start flex flex-col relative">
          <div
            className="bg-red-100 w-40 h-40 relative
           before:bg-[#030014] before:w-11/12 before:h-5/6 before:absolute
            before:left-1/2 before:-translate-x-1/2 before:top-0
            before:blur-sm before:bg-opacity-90"
          ></div>
          <div
            className=" w-40 h-32  after:w-full after:absolute
           relative after:left-0 after:bottom-0 after:h-2/3 after:bg-gradient-to-t after:from-[#030014]"
          ></div>
          <ul
            className="grid-cols-6 grid w-72 h-full opacity-10
          absolute left-1/2  top-0"
          >
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
          </ul>
        </div>
        <Image
          blurDataURL={placeholder}
          alt={data.title}
          src={data.image_url}
          placeholder={data.placeholderIMG ? "blur" : "empty"}
          width={140}
          height={140}
          className="absolute top-2 group-hover:translate-y-4 size-[8.75rem]
                  group-hover:scale-[115%] duration-300 ease-in transition-all"
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Image alt="speaker" src={speaker} />
            <span className="text-xs"> {data.tags[0]}</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-highlight-dark to-highlight-light"></div>
          <div className="flex items-center gap-1">
            <Image alt="calender" src={calender} />
            <span className="text-xs">
              {new Date(Number(data.published_at) * 1000).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
          </div>
        </div>
        <h2 className="text-sm/8">{data.title}</h2>
        <button className="w-fit mb-8 group">
          <Link
            href={`/blog/${data.slug}`}
            className="flex items-center gap-1 py-3 px-4 rounded-lg text-xs text-white hover-btn"
          >
            Read More
            <svg
              width="16"
              height="16"
              className="size-4 group-hover:translate-x-1 tran-fast fill-neutral-50"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
