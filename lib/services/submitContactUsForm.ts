interface FooterFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: object;
  errors?: {
    name: "message" | "email" | "full_name";
    msg: string;
    type: string;
  }[];
}

// # {
//   #     "full_name": "test",
//   #     "email": "test@google.com",
//   #     "message": "test for test",
//   #     "g_response": ""
//   # }

const searchApiUrl = process.env.NEXT_PUBLIC_CONTACT_US_FORM_URL as string;
export async function submitContactUsForm(reqBody: {
  email: string;
  full_name: string;
  message: string;
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

    if (response.status == 422) {
      // new Error(`somthing went wrong => ${result}`);
      return result;
    }

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
