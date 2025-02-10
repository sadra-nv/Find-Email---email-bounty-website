import { saveSession, UserSession } from "./saveSession";
import { saveTokens } from "./saveTokens";

interface RegisterFormData extends UserSession {
  exp_time: number;
  status: string;
  token: string;
}

interface RegisterFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: RegisterFormData;
  errors?: {
    name: "password" | "username";
    msg: string;
    type: string;
  }[];
}

const searchApiUrl = process.env.NEXT_PUBLIC_LOGIN_URL as string;
export async function submitLoginForm(reqBody: {
  username: string;
  password: string;
  remember_me: boolean;
}): Promise<RegisterFormResponse | false> {
  const userAgent = window ? navigator.userAgent : "Next.js App";

  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": userAgent,
    },

    body: JSON.stringify({
      ...reqBody,
      g_response: "",
    }),
  };

  try {
    const response = await fetch(searchApiUrl, body);
    const result = (await response.json()) as RegisterFormResponse;
    // console.log(result);

    if (response.status == 422) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }

    if (!response.ok) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }

    // console.log(reqBody, result);

    await saveSession(
      { username: result.data.username, email: result.data.email },
      result.data.exp_time
    );

    await saveTokens({
      access: result.data.token,
      access_expire: result.data.exp_time,
    });

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
