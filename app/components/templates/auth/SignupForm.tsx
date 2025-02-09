"use client";

import { Button } from "@headlessui/react";
// import MainInput from "../UI/Inputs/MainInput";
// import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterForm, RegisterFormSchema } from "@/lib/zod-schemas";
import MainInput from "../UI/Inputs/MainInput";
import { submitRegisterForm } from "@/lib/services/auth/submitRegisterForm";
import NewPassInput from "./NewPassInput";
// import NewPassInput from "./NewPassInput";

export default function SignupForm() {
  // const [enabled, setEnabled] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const [success, setSuccess] = useState<string | null>(null);

  const submitHandler: SubmitHandler<RegisterForm> = async (formData) => {
    // console.log(formData);
    setSuccess(null);
    const result = await submitRegisterForm(formData);
    // setSubscribe(false);

    if (result && result.ok) {
      setSuccess(result.message);
      // setSubscribe(true);
    } else if (result && result.code == 422) {
      result.errors?.map((error) => {
        setError(error.name, {
          type: "manual",
          message: error.msg,
        });
      });
      setSuccess(null);
    } else if (result && !result.ok) {
      setError("repeat_password", {
        type: "manual",
        message: result.message,
      });
      setSuccess(null);
    } else {
      setError("repeat_password", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="space-y-6">
        <MainInput
          {...register("email")}
          dirty={dirtyFields.email}
          error={errors.email}
          label="Enter Your Email"
          placeholder="Enter Your Email"
          className="w-full"
        />
        <NewPassInput
          {...register("password")}
          dirty={dirtyFields.password}
          error={errors.password}
          label="Password"
          placeholder="Enter Your Password"
          className="w-full"
          setValue={setValue}
        />
        <MainInput
          type="password"
          error={errors.repeat_password}
          dirty={dirtyFields.repeat_password}
          {...register("repeat_password")}
          label="Repeat Password"
          placeholder="Enter Your Password"
          className="w-full"
        />
      </div>
      {/* <div className="mt-8">
        <Checkbox
          name="agree-to-terms"
          checked={enabled}
          onChange={setEnabled}
          className="group inline-block min-w-4 size-4 rounded-md 
mr-2 translate-y-1
p-1 bg-neutral-100 data-[checked]:bg-orange-grad-btn"
        >
          <svg
            width="16"
            height="16"
            className="fill-white -translate-x-1 -translate-y-1 scale-75 hidden group-data-[checked]:block"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
          </svg>
        </Checkbox>
        <span className="text-xs font-bold  text-white">
          I agree to privacy policy & terms
        </span>
      </div> */}

      <Button
        disabled={isSubmitting}
        type="submit"
        className="bg-orange-grad-btn block rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-full btn-hover"
      >
        {!isSubmitting && (
          <span className="text-xs font-bold lg:text-base text-white">
            Submit
          </span>
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

      {/* <Link
        href="/auth/activate-account"
        className="bg-orange-grad-btn block rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-full btn-hover"
      >
        Sign Up
      </Link> */}
    </form>
  );
}
