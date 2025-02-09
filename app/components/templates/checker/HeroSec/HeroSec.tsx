"use client";

import { Button } from "@headlessui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SMTPForm, SMTPFormSchema } from "@/lib/zod-schemas";

import { submitSMTPForm } from "@/lib/services/submitSMTPForm";
import MainInput from "../../UI/Inputs/MainInput";

export default function HeroSec() {
  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<SMTPForm>({
    defaultValues: {
      smtp_server: "",
      smtp_port: 0,
      smtp_username: "",
      smtp_password: "",
      receiver_email: "",
    },
    resolver: zodResolver(SMTPFormSchema),
  });

  const [success, setSuccess] = useState<string | null>(null);

  const submitHandler: SubmitHandler<SMTPForm> = async (formData) => {
    setSuccess(null);
    const result = await submitSMTPForm(formData);
    // setSubscribe(false);
    setSuccess(result);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
     bg-[#0a081ec0] relative z-30 mt-6 lg:mt-12 mb-20 lg:mb-32
 border border-neutral-700/30 "
      >
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-6 sm:gap-16 sm:gap-y-12">
          <MainInput
            {...register("smtp_server")}
            dirty={dirtyFields.smtp_server}
            error={errors.smtp_server}
            label="Smtp Server"
            placeholder="mail.google.com"
          />
          <MainInput
            {...register("smtp_port")}
            dirty={dirtyFields.smtp_port}
            error={errors.smtp_port}
            label="Port"
            placeholder="587"
          />
          <MainInput
            {...register("smtp_username")}
            dirty={dirtyFields.smtp_username}
            error={errors.smtp_username}
            label="Username"
            placeholder="JohnDoe"
          />
          <MainInput
            {...register("smtp_password")}
            dirty={dirtyFields.smtp_password}
            error={errors.smtp_password}
            label="Password"
            placeholder="*****************"
          />
          <MainInput
            {...register("receiver_email")}
            dirty={dirtyFields.receiver_email}
            error={errors.receiver_email}
            label="Receiver Email"
            placeholder="JohnDoe.google.com"
          />
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="mx-auto flex gap-1 justify-center items-center py-3 lg:py-4 
w-full rounded-lg bg-orange-grad-btn xs:w-40 btn-hover group lg:mt-9 mt-4"
        >
          {!isSubmitting && (
            <>
              <span className="text-xs font-bold lg:text-base text-white">
                Submit
              </span>
              <svg
                className="group-hover:translate-x-1 tran-fast fill-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </>
          )}

          {isSubmitting && (
            <span className="text-xs font-bold lg:text-base text-white">
              Submiting....
            </span>
          )}
        </Button>

        {success && (
          <p
            className="text-justify w-fit mx-auto lg:text-xl font-semibold text-sm leading-7 
           lg:mt-9   mt-5"
          >
            <span className="font-bold text-highlight-med">{success}</span>
          </p>
        )}
      </form>
    </>
  );
}
