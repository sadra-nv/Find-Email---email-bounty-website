import { getPlaceholderImage } from "../getPlaceholderImage";

export interface SinglePostCard {
  placeholderIMG: string;
  id: string;
  title: string;
  description: string;
  slug: string;
  image_url: string;
  tags: string[];
  category: string;
  status: string;
  likes: number;
  views: number;
  liked: boolean;
  published_at: string;
}

export interface BlogPosts {
  ok: boolean;
  code: number;
  message: string;
  data: {
    posts: SinglePostCard[];
    meta: {
      page: number;
      per_page: number;
      total_pages: number;
      total_items: number;
      next: null | number;
      prev: null | number;
    };
  };
}

export async function getBlogPosts({
  page,
  query,
  filter_method,
}: {
  filter_method?: "search" | "tags" | "category" | null;
  page?: number | null;
  query?: string | null;
}): Promise<BlogPosts | false> {
  const blogStatsAPI = process.env.BLOG_POSTS_URL as string;
  const filterMethod = filter_method ? `filter_type=${filter_method}&` : "";
  const filterQuery = query ? `filter=${query}&` : "";
  const pageNumber = page ? `page=${page}&` : "1&";

  // # http://5.255.116.133/blog/posts?filter_type=tags&filter=logs&page=1&per_page=4
  // console.log(
  //   `${blogStatsAPI}?${filterMethod}${filterQuery}${pageNumber}&per_page=4`
  // );
  try {
    const response = await fetch(
      `${blogStatsAPI}?${filterMethod}${filterQuery}${pageNumber}per_page=4`
    );
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    for (let index = 0; index < result.data.posts.length; index++) {
      const post = result.data.posts[index];
      const blurURI = await getPlaceholderImage(post.image_url);
      post.placeholderIMG = blurURI.placeholder;
    }

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
