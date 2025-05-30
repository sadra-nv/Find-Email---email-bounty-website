import { CrackerForm } from "../zod-schemas";

export interface CrackerFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: {
    stats: {
      hashes_count: number;
      all: number;
      valid: number;
      invalid: number;
      found: number;
      not_found: number;
    };
    result:
      | {
          hash: string;
          password: string;
        }[]
      | [];
    valid: string[] | [];
    invalid: string[] | [];
  };
}

const searchApiUrl = process.env.NEXT_PUBLIC_HASH_CRACKER_URL as string;
export async function submitCrackerForm(
  reqBody: CrackerForm
): Promise<CrackerFormResponse | false> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ ...reqBody, g_response: "" }),
  };

  try {
    const response = await fetch(searchApiUrl, body);
    const result = await response.json();
    // console.log(result);

    if (!response.ok) {
      new Error(`somthing went wrong => ${result}`);
      // return result;
    }

    // console.log(reqBody, result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
