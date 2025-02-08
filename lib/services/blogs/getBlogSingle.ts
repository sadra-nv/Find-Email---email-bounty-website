import { getPlaceholderImage } from "../getPlaceholderImage";
import crypto from "crypto";
import { headers } from "next/headers";

interface ArticleSingle {
  ok: boolean;
  code: number;
  message: string;
  data: {
    placeholderIMG: string;
    id: string;
    title: string;
    description: string;
    slug: string;
    content: string;
    image_url: string;
    tags: string[];
    category: string;
    status: string;
    likes: number;
    views: number;
    liked: boolean;
    published_at: number;
    meta_keywords: string[];
    meta_description: string;
  };
}

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/l7eMhPuYvbJwpH7N6tK2SLIE
9pU+zBLfXDBaHWrWb1xsw26+GkaP5i22SYLsRo2g++5bHGloYOKLDmnrqVZt54fD
FXrqokN6TuzfRKeVwI0dB+sGhNB20DwM2xcbaphnrP/Qe5OOh27B59SHfEj2axyQ
yH2VtvfnzptTc9FfcwIDAQAB
-----END PUBLIC KEY-----`;

function encryptData(data: string): string {
  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // Convert Buffer to Uint8Array
    new Uint8Array(Buffer.from(data))
  );

  return encryptedData.toString("base64");
}

const articleApiUrl = process.env.BLOG_POST_SINGLE_URL as string;
export async function getBlogSingle(
  slug: string
): Promise<ArticleSingle | false> {
  const ip = headers().get("x-forwarded-for") || "127.0.0.1";
  console.log("client ip", ip);
  const encryptedIP = encryptData(ip);

  // console.log("ip", encryptedIP);

  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-encrypted": encryptedIP,
    },

    body: JSON.stringify({ slug: slug }),
  };

  try {
    const response = await fetch(articleApiUrl, body);
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      return false;
    }

    const blurURI = await getPlaceholderImage(result.data.image_url);
    result.data.placeholderIMG = blurURI.placeholder;

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
