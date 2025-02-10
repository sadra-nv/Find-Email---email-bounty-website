"use server";
import { cookies } from "next/headers";

export interface UserSession {
  username: string;
  email: string;
}

export async function saveSession(
  userSession: UserSession,
  expireTime: number
) {
  const cookieStore = cookies();

  cookieStore.delete("USER_SESSION");

  // console.log("USER_SESSION", userSession);

  const expiresAt = new Date(expireTime * 1000);

  cookieStore.set("USER_SESSION", JSON.stringify(userSession), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
  });
}
