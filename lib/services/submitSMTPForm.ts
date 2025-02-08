import { SMTPForm } from "../zod-schemas";

const searchApiUrl = process.env.NEXT_PUBLIC_SMTP_CHECKER_URL as string;
export async function submitSMTPForm(
  reqBody: SMTPForm
): Promise<string | false> {
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
    console.log(result);

    if (!response.ok) {
      new Error(`somthing went wrong => ${result}`);
      // return result;
    }

    // console.log(reqBody, result);

    return "SMTP server is working.";
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
