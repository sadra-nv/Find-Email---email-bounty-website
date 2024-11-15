import { create } from "zustand";

interface FormState {
  isApp: boolean;
  formStep: "init" | "code" | "success" | "final";
  setStep: (step: "init" | "code" | "success" | "final") => void;
  setIsApp: (value: boolean) => void;
}

export const useTwoFactorFormSlice = create<FormState>((set) => ({
  formStep: "init",
  setStep: (step) => set({ formStep: step }),
  isApp: false,
  setIsApp: (value) => {
    set({ isApp: value });
  },
}));
