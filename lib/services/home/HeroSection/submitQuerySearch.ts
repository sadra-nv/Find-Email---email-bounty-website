"use server";

interface QuerySearchSubmit {
  ok: boolean;
  code: number;
  message: string;
  data: {
    count: number;
    result: {
      domain: string;
      username: string;
    }[];
  };
}

const searchApiUrl = process.env.HOME_HERO_QUERIES_SEARCH_URL as string;
export async function submitQuerySearch(
  method: string,
  type: string,
  data: string
): Promise<QuerySearchSubmit | false> {
  // [{ method: "logs", type: "domain", data: "test.com" }];
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ method: method, type: type, data: data }),
  };
  console.log({ method: method, type: type, data: data });
  try {
    const response = await fetch(searchApiUrl, body);
    const result = await response.json();

    if (!response.ok) {
      new Error("somthing went wrong");
    }

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
