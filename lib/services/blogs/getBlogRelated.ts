import { getPlaceholderImage } from "../getPlaceholderImage";

export interface RelatedArticleSingle {
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
  published_at: number;
  placeholderIMG: string;
  similarity_score: number;
}

export interface RelatedArticle {
  ok: boolean;
  code: number;
  message: string;
  data: {
    posts: RelatedArticleSingle[];
    meta: {
      page: number;
      per_page: number;
      total_pages: number;
      total_items: number;
      next: number | null;
      prev: number | null;
    };
  };
}

export async function getBlogRelated(
  slug: string
): Promise<RelatedArticle | false> {
  const articleApiUrl = process.env.BLOG_POST_RELATED as string;

  try {
    const response = await fetch(`${articleApiUrl}slug=${slug}`);
    // BLOG_POST_RELATED= http://5.255.116.133/blog/related-posts?per_page=4&post_id=565ff99e

    const result = await response.json();
    console.log(`${articleApiUrl}slug=${slug}`);

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
