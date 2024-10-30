import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function showTodaysDate() {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", { weekday: "long" });

  const year = today.getFullYear();

  const dayOfMonth = today.getDate().toString().padStart(2, "0");

  const month = today.toLocaleDateString("en-US", { month: "long" });

  return {
    day: day,
    year: year,
    dayOfMonth: dayOfMonth,
    month: month,
  };
}
