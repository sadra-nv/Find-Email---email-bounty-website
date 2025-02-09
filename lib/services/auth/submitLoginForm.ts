interface RegisterFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: object;
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
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...reqBody,
      g_response: "",
    }),
  };

  try {
    const response = await fetch(searchApiUrl, body);
    const result = await response.json();
    console.log(result);

    if (response.status == 422) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }

    if (!response.ok) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }

    // console.log(reqBody, result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
