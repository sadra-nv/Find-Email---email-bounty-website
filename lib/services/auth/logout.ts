"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookiesStore = cookies();
  cookiesStore.delete("ACCESS_TOKEN");
  cookiesStore.delete("USER_SESSION");
  redirect("/auth");
}
