import { getBlogPosts } from "@/lib/services/blogs/getBlogPosts";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default async function PostsSide() {
  const data = await getBlogPosts({ page: 1 });
  if (!data) return;

  //   console.log(data.data.posts);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
      <div className="text-sm py-4 bg-gradient-to-t from-[#2E2291] to-[#8F5CE1] text-center">
        Post
      </div>
      <ul className="flex flex-col gap-4 p-4">
        {data.data.posts.map((data, i) => (
          <Fragment key={i}>
            {i < 3 && (
              <li key={i}>
                <Link
                  href={"/"}
                  className="flex gap-3 items-center p-4 bg-[#131332] rounded-lg"
                >
                  <Image
                    className="rounded-lg w-24 h-16 object-cover"
                    placeholder="blur"
                    blurDataURL={data.placeholderIMG}
                    width={100}
                    height={60}
                    alt={data.title}
                    src={data.image_url}
                  />

                  <div className="flex flex-col text-xs gap-1">
                    <p>{data.title}</p>
                    {/* <span>Secret Weapon for</span> */}
                  </div>
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
