import { create } from "zustand";

interface FormState {
  formStep: "init" | "forgot" | "new";
  setStep: (step: "init" | "forgot" | "new") => void;
}

export const useChangePassFormSlice = create<FormState>((set) => ({
  formStep: "init",
  setStep: (step) => set({ formStep: step }),
}));
