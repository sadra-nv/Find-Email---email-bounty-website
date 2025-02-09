import { RegisterForm } from "@/lib/zod-schemas";

interface RegisterFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: object;
  errors?: {
    name: "password" | "email";
    msg: string;
    type: string;
  }[];
}

const searchApiUrl = process.env.NEXT_PUBLIC_REGISTER_URL as string;
export async function submitRegisterForm(
  reqBody: RegisterForm
): Promise<RegisterFormResponse | false> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: reqBody.email,
      password: reqBody.password,
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
