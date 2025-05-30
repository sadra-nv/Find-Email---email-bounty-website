"use server";

import { NewTicketForm } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";

const searchUrl = process.env.NEXT_PUBLIC_TICKETS_NEW_URL as string;

export interface NewTicketFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: {
    id: string;
    data: string;
    filter: string;
    count: number;
    created_at: number;
    download_option: {
      count: number;
      credit: number;
    }[];
    result: {
      domain: string;
      username: string;
    }[];
  };
  errors?: {
    name: "subject" | "message";
    msg: string;
    type: string;
  }[];
}

export async function submitNewTicket(
  data: NewTicketForm,
  token: string
): Promise<NewTicketFormResponse | false | 401> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify({ ...data, priority: "high" }),
  };

  try {
    const response = await fetch(searchUrl, body);
    const result = await response.json();
    console.log(result);

    if (response.status == 422) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }
    if (response.status == 401) {
      // new Error(`somthing went wrong => ${result}`);
      return 401;
    }

    if (!response.ok) {
      //   new Error(`somthing went wrong => ${result}`);
      return result;
    }

    // console.log(reqBody, result);

    revalidatePath("/dashboard/tickets");
    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
