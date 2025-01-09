export interface BlogStats {
  ok: boolean;
  code: number;
  message: string;
  data: {
    posts: {
      total: number;
    };
    categories: {
      total: number;
      top: {
        name: string;
        slug: string;
        description: string;
        count: number;
      }[];
    };
    tags: {
      total: number;
      top: {
        name: string;
        slug: string;
        description: string;
        count: number;
      }[];
    };
  };
}

export async function getBlogStats(): Promise<BlogStats | false> {
  const blogStatsAPI = process.env.BLOG_STATS_URL as string;

  try {
    const response = await fetch(blogStatsAPI);
    const result = await response.json();

    if (!response.ok) {
      return false;
    }

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
