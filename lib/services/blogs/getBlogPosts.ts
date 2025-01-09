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
      next: null;
      prev: null;
    };
  };
}

export async function getBlogPosts(): Promise<BlogPosts | false> {
  const blogStatsAPI = process.env.BLOG_POSTS_URL as string;

  try {
    const response = await fetch(blogStatsAPI);
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
