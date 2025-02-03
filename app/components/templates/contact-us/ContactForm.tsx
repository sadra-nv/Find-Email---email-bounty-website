"use client";

import { Button, Field, Label, Textarea } from "@headlessui/react";
import MainInput from "../UI/Inputs/MainInput";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactUsForm, ContactUsFormSchema } from "@/lib/zod-schemas";
import { submitContactUsForm } from "@/lib/services/submitContactUsForm";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<ContactUsForm>({
    defaultValues: {
      email: "",
      message: "",
      full_name: "",
    },
    resolver: zodResolver(ContactUsFormSchema),
  });

  const [success, setSuccess] = useState(false);

  const submitHandler: SubmitHandler<ContactUsForm> = async (formData) => {
    const result = await submitContactUsForm(formData);
    // setSubscribe(false);
    setSuccess(false);

    if (result && result.ok) {
      setSuccess(true);
      // setSubscribe(true);
    } else if (result && result.code == 422) {
      result.errors?.map((error) => {
        setError(error.name, {
          type: "manual",
          message: error.msg,
        });
      });
      setSuccess(false);
    } else {
      setError("message", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(false);
    }
  };

  return (
    <section className="container">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
         bg-[#0a081ec0] relative z-30 mt-6 lg:mt-12 mb-20 lg:mb-32
     border border-neutral-700/30 w-full sm:w-1/2 xl:w-5/12 mx-auto"
      >
        <div>
          <h2 className="text-white font-bold text-base lg:text-xl text-center">
            Send a message
          </h2>
          <p className="text-justify leading-8 text-xs lg:text-base mt-4 lg:mb-11 mb-16">
            If you would like to discuss anything related to payment, account,
            licensing, partnerships, or have pre-sales questions, you’re at the
            right place.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-6 ">
          <MainInput
            {...register("full_name")}
            dirty={dirtyFields.full_name}
            error={errors.full_name}
            label="Full Name"
            placeholder="John Doe"
          />

          <MainInput
            {...register("email")}
            dirty={dirtyFields.email}
            error={errors.email}
            type="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <Field>
            <Label className="text-white mb-4 block text-sm font-bold lg:text-lg">
              Message
            </Label>
            <Textarea
              {...register("message")}
              placeholder="Enter your message here"
              className="bg-white/10  w-full  py-4 px-4 lg:py-5 lg:px-5
               inline-block rounded-lg lg:mb-9 mb-4 
             text-neutral-100  text-xs lg:text-sm "
              rows={7}
            />

            {errors.message && dirtyFields.message && (
              <p
                className={cn(
                  "hidden gap-2 justify-start items-center text-sm text-red-500  ",
                  {
                    " mt-3 flex ": errors.message,
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
                {errors.message.message}
              </p>
            )}

            <p
              className={cn(
                "hidden gap-2 justify-start items-center text-sm text-highlight-med  ",
                {
                  " mt-3 flex ": success,
                }
              )}
            >
              Your message has been sent!
            </p>
          </Field>
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
              Submiting ....
            </span>
          )}
        </Button>
      </form>
    </section>
  );
}
