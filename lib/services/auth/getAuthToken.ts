"use server";

import { cookies } from "next/headers";

export default async function getAuthToken(): Promise<string | null> {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("ACCESS_TOKEN");
  if (!tokenCookie) return null;

  const token = JSON.parse(tokenCookie.value).token;

  return token;
}
