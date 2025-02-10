"use server";
import { cookies } from "next/headers";

export async function saveTokens(userTokens: {
  access: string;
  access_expire: number;
}) {
  const cookieStore = cookies();

  cookieStore.delete("ACCESS_TOKEN");

  const accessToken = {
    token: userTokens.access,
    expire: userTokens.access_expire * 1000,
  };

  // console.log("ACCESS_TOKEN", accessToken);

  const expiresAt = new Date(userTokens.access_expire * 1000);

  cookieStore.set("ACCESS_TOKEN", JSON.stringify(accessToken), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
  });
}
