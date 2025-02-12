// stores/authStore.js
import { create } from "zustand";

interface AuthStore {
  token: null | string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
}));

export default useAuthStore;
