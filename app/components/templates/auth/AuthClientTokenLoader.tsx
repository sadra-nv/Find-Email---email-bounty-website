"use client";

import getAuthToken from "@/lib/services/auth/getAuthToken";
import useAuthStore from "@/lib/store/authStore";
import { useEffect } from "react";

export default function AuthClientTokenLoader() {
  const setToken = useAuthStore((state) => state.setToken);
  //   accesing the token
  //   const token = useAuthStore((state) => state.token);

  // Clear token from Zustand store
  const clearToken = useAuthStore((state) => state.clearToken);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getAuthToken();

        if (!token) {
          clearToken();
        } else {
          setToken(token);
        }
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    fetchToken();
  }, [setToken, clearToken]);

  return null; // This component doesn't render anything
}
