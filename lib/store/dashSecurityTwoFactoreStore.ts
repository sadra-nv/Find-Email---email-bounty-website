import { create } from "zustand";

interface FormState {
  formStep: "init" | "code" | "success" | "final";
  setStep: (step: "init" | "code" | "success" | "final") => void;
}

export const useTwoFactorFormSlice = create<FormState>((set) => ({
  formStep: "init",
  setStep: (step) => set({ formStep: step }),
}));
