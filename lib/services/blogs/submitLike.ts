const blogStatsAPI = process.env.NEXT_PUBLIC_BLOG_POST_LIKE as string;

export async function submitLike({
  id,
}: {
  id: string;
}): Promise<true | false> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ post_id: id }),
  };

  try {
    const response = await fetch(blogStatsAPI, body);

    if (!response.ok) {
      return false;
    }

    console.log("liked", await response.json());
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
