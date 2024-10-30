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
    <section className="bg-ba-c-bg-main flex flex-col w-full h-screen justify-center items-center gap-6 px-[5%]">
      <h2 className=" text-ba-t-h2 font-bold text-ba-c-text-title">
        Something went wrong!!!
      </h2>
      <p className=" text-ba-t-h3 font-medium ">{message}</p>
      <Button onClick={() => reset()}>Retry</Button>
    </section>
  );
}
