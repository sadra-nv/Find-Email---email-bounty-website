import FilterableCard from "./FiltrableCard";
import Halo from "../../UI/Halo/Halo";
import { getBlogPosts } from "@/lib/services/blogs/getBlogPosts";

export default async function PostsGridSec() {
  const data = await getBlogPosts();
  if (!data) return;
  return (
    <>
      {data.data.posts.map(
        (data, i) => i === 0 && <FilterableCard data={data} key={i} />
      )}
      <div className="justify-center items-center hidden xl:flex">
        <Halo className="size-40 mr-20" />
      </div>
      {data.data.posts.map(
        (data, i) => i === 1 && <FilterableCard data={data} key={i} />
      )}
      {data.data.posts.map(
        (data, i) => i === 2 && <FilterableCard data={data} key={i} />
      )}

      <div className="justify-center items-center hidden xl:flex">
        <Halo className="size-40 mr-20" />
      </div>
      {data.data.posts.map(
        (data, i) => i === 3 && <FilterableCard data={data} key={i} />
      )}
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
