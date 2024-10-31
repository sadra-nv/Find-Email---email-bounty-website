"use client";

import { Button } from "@headlessui/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  let message = "";

  if (error.message) {
    message = error.message;
    if (error.digest) {
      message += ` ${error.digest} `;
    }
  }

  return (
    <section className="bg-fe-c-bg-main flex flex-col w-full h-screen justify-center items-center gap-6 px-[5%]">
      <h2 className=" text-3xl font-bold text-fe-c-text-title">
        Something went wrong!!!
      </h2>
      <p className=" text-xl font-bold ">{message}</p>
      <Button
        className="px-6 rounded-md py-2 text-neutral-50 bg-orange-grad-btn"
        onClick={() => reset()}
      >
        Retry
      </Button>
    </section>
  );
}
