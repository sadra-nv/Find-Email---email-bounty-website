"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@headlessui/react";

export default function DarkToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [theme]);
  if (!mounted) {
    return <Button className="w-[4.375rem] h-8 rounded-full p-1"></Button>;
  }

  const handleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };

  return (
    <>
      <Button
        onClick={handleTheme}
        className="relative w-[4.375rem] h-8 rounded-full p-1 mr-auto sm:mr-0 
          transition-all duration-300 ease-in-out dark:bg-neutral-50 bg-[#152330]"
        aria-label={
          theme !== "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <div
          className="
            absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-in-out right-1 bg-white dark:left-1 dark:bg-yellow-400"
        >
          {/* {theme === "dark" ? (
            <div className="w-5 h-5 text-white transition-opacity duration-200 bg-black"></div>
          ) : (
            <div className="w-5 h-5 text-white transition-opacity duration-200 bg-neutral-50"></div>
          )} */}
        </div>
      </Button>
    </>
  );
}
