const searchUrl = process.env.NEXT_PUBLIC_PAYMENT_TYPE_URL as string;

interface LogsFormResponse {
  ok: boolean;
  code: number;
  message: string;
  data:
    | {
        amount: number;
        credit: number;
        method: "crypto";
        payment_url: string;
      }
    | {
        method: "perfect_money";
        payment_url: string;
        payment_id: string;
        payment_units: string;
        payee_account: string;
        payee_name: string;
        callback_url: string;
        amount: number;
        credit: number;
      };
}

export async function startPaymentType(
  data: { method: string; type: string; amount: string },
  token: string
): Promise<LogsFormResponse | false> {
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
    // console.log(data, result);

    if (!response.ok) {
      return result;
    }

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
