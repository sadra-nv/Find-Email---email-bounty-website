interface RegisteringUserResponse {
  ok: boolean;
  code: number;
  message: string;
  data: [];
}

const articleApiUrl = process.env.NEXT_PUBLIC_REGISTER_VERIFY_URL as string;
export async function verifyRegisteringUser(
  slug: string
): Promise<RegisteringUserResponse | false> {
  try {
    const response = await fetch(articleApiUrl + slug);
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      return result;
    }

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
