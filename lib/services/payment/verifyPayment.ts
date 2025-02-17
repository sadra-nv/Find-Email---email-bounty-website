import getAuthToken from "../auth/getAuthToken";

const searchUrl = process.env.PAYMENT_VERIFY_URL as string;

interface LogsFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data: {
    payment_id: string;
    method: string;
    amount: number;
    credit: number;
    status: string;
    is_paid: boolean;
  };
}

export async function verifyPayment(data: {
  method: string;
  token: string;
}): Promise<LogsFormResponse | false> {
  const token = await getAuthToken();

  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : "",
    },

    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(searchUrl, body);
    const result = await response.json();
    // console.log(data, result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
