"use server";

import { cookies } from "next/headers";

export default async function getTokenCookie() {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("ACCESS_TOKEN");
  if (!tokenCookie) return;

  const token = JSON.parse(tokenCookie.value).token;

  return token;
}
