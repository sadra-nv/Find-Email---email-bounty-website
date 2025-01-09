import { getPlaceholderImage } from "../getPlaceholderImage";

interface ArticleSingle {
  ok: boolean;
  code: number;
  message: string;
  data: {
    placeholderIMG: string;
    id: string;
    title: string;
    description: string;
    slug: string;
    content: string;
    image_url: string;
    tags: string[];
    category: string;
    status: string;
    likes: number;
    views: number;
    liked: boolean;
    published_at: number;
    meta_keywords: string[];
    meta_description: string;
  };
}

export async function getBlogSingle(
  slug: string
): Promise<ArticleSingle | false> {
  const articleApiUrl = process.env.BLOG_POST_SINGLE_URL as string;

  console.log(slug, "slug");
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ slug: slug }),
  };

  try {
    const response = await fetch(articleApiUrl, body);
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    const blurURI = await getPlaceholderImage(result.data.image_url);
    result.data.placeholderIMG = blurURI.placeholder;

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

// export default async function BlogPage({
//     params,
//   }: {
//     params: { slug: string };
//   }) {
//     const article = await getSingleArticle(params.slug);
//     console.log(article, "5465879848dwa");
//     if (!article) return;
