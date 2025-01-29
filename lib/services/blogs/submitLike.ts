"use server";

import { revalidatePath } from "next/cache";

const blogStatsAPI = process.env.BLOG_POST_LIKE as string;

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

    console.log("liked");
    revalidatePath("/blog/[blogId]", "page");
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
