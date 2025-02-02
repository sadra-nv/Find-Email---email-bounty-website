interface FooterFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: object;
}

const searchApiUrl = process.env.NEXT_PUBLIC_FOOTER_FORM_URL as string;
export async function footerFormSubscribe(reqBody: {
  email: string;
}): Promise<FooterFormResponse | false> {
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

    if (response.status === 400) {
      return result;
    }

    if (!response.ok) {
      new Error(`somthing went wrong => ${result}`);
    }

    console.log(reqBody, result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
