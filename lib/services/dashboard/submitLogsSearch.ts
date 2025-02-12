import { LogsSearchForm } from "@/lib/zod-schemas";

const searchUrl = process.env.NEXT_PUBLIC_LOGS_URL as string;

export interface LogsFormResponse {
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
    name: "filter" | "data";
    msg: string;
    type: string;
  }[];
}

export async function submitLogsSearch(
  data: LogsSearchForm,
  token: string
): Promise<LogsFormResponse | false | 401> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify(data),
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

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
