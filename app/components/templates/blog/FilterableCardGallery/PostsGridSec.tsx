import FilterableCard from "./FiltrableCard";
import Halo from "../../UI/Halo/Halo";
import { getBlogPosts } from "@/lib/services/blogs/getBlogPosts";

export default async function PostsGridSec({
  params,
}: {
  params: {
    page: number | null;
    query: string | null;
    filter_method: "search" | "tags" | "category" | null;
  };
}) {
  const data = await getBlogPosts(params);
  if (!data) return;
  // console.log(data.data.meta);
  // console.log(data.data.posts);
  return (
    <>
      <FilterableCard className="mx-auto" data={data.data.posts[0]} />
      {/* {data.data.posts.map(
        (data, i) =>
          i === 0 && <FilterableCard className="mx-auto" data={data} key={i} />
      )} */}

      {data.data.posts[1] && (
        <div className="justify-center items-center hidden xl:flex">
          <Halo className="size-40" />
        </div>
      )}
      <FilterableCard className="mx-auto" data={data.data.posts[1]} />

      {/* {data.data.posts.map(
        (data, i) =>
          i === 1 && <FilterableCard className="mx-auto" data={data} key={i} />
      )} */}
      <FilterableCard className="mx-auto" data={data.data.posts[2]} />

      {/* {data.data.posts.map(
        (data, i) =>
          i === 2 && <FilterableCard className="mx-auto" data={data} key={i} />
      )} */}

      {data.data.posts[3] && (
        <div className="justify-center items-center hidden xl:flex">
          <Halo className="size-40" />
        </div>
      )}

      <FilterableCard className="mx-auto" data={data.data.posts[3]} />

      {/* {data.data.posts.map(
        (data, i) =>
          i === 3 && <FilterableCard className="mx-auto" data={data} key={i} />
      )} */}
    </>
  );
}

{
  /* <FilterableCard />
            <div className="justify-center items-center hidden xl:flex">
              <Halo className="size-40" />
            </div>
            <FilterableCard />
            <FilterableCard />
            <div className="justify-center items-center hidden xl:flex">
              <Halo className="size-40" />
            </div>
            <FilterableCard /> */
}
