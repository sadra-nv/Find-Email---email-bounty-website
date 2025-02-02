"use client";

import { footerFormSubscribe } from "@/lib/services/footerFormSubscribe";
import { cn } from "@/lib/utils";
import { type FooterForm, FooterFormSchema } from "@/lib/zod-schemas";
import { Button, Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FooterForm>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(FooterFormSchema),
  });
  const [subscribe, setSubscribe] = useState(false);

  const submitHandler: SubmitHandler<FooterForm> = async (formData) => {
    const result = await footerFormSubscribe(formData);
    setSubscribe(false);

    if (result && result.ok) {
      setSubscribe(true);
    } else if (result && !result.ok) {
      setError("email", {
        type: "manual",
        message: result.message,
      });
    } else {
      setError("email", {
        type: "manual",
        message: "Failed to connect to server",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex w-[15.5rem] h-10 rounded-md overflow-hidden"
      >
        <Input
          {...register("email")}
          placeholder="Your email"
          className="w-full h-full px-3 text-black  text-sm"
          type="text"
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-14 bg-neutral-900 group"
        >
          {!isSubmitting && (
            <svg
              width="16"
              height="16"
              className="fill-neutral-50  inline-block tran-fast group-hover:translate-x-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          )}
          {isSubmitting && (
            <svg
              className="fill-neutral-50 inline-block animate-normal size-4"
              viewBox="0 0 256 256"
            >
              <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
            </svg>
          )}
        </Button>
      </form>
      <p
        className={cn(
          "hidden gap-2 justify-start items-center text-sm text-highlight-light  ",
          {
            " mt-3 flex ": subscribe,
          }
        )}
      >
        You successfully subscribed !
      </p>
      <p
        className={cn(
          "hidden gap-2 justify-start items-center text-sm text-red-500  ",
          {
            " mt-3 flex ": errors.email,
          }
        )}
      >
        <svg
          width="16"
          height="16"
          className="fill-red-500"
          viewBox="0 0 16 16"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        {errors.email?.message}
      </p>
    </>
  );
}
