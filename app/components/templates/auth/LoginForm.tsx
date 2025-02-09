"use client";
import { Button, Checkbox } from "@headlessui/react";
import Link from "next/link";
import MainInput from "../UI/Inputs/MainInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormSchema, type LoginForm } from "@/lib/zod-schemas";
import { submitLoginForm } from "@/lib/services/auth/submitLoginForm";
// import MainInput from "../UI/Inputs/MainInput";

export default function LoginForm() {
  const [enabled, setEnabled] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const [success, setSuccess] = useState<string | null>(null);

  const submitHandler: SubmitHandler<LoginForm> = async (formData) => {
    console.log(formData, enabled);
    setSuccess(null);
    const result = await submitLoginForm({ ...formData, remember_me: enabled });
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
      setError("password", {
        type: "manual",
        message: result.message,
      });
      setSuccess(null);
    } else {
      setError("password", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <MainInput
        {...register("username")}
        error={errors.username}
        dirty={dirtyFields.username}
        type="text"
        label="Username"
        placeholder="Enter Your Username..."
        className="w-full"
      />
      <MainInput
        {...register("password")}
        error={errors.password}
        dirty={dirtyFields.password}
        type="password"
        label="Password"
        placeholder="**********"
        className="w-full mt-8"
      />

      <div className="flex justify-between gap-4 items-center mt-4">
        <div>
          <Checkbox
            name="remember_me"
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
          <span className="text-xs font-bold  text-white">Remember Me</span>
        </div>
        <Link href="/auth/forgot-password" className="text-xs text-white/60">
          Forgot Password?
        </Link>
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="block bg-orange-grad-btn  rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-full btn-hover"
      >
        {!isSubmitting && (
          <span className="text-xs font-bold lg:text-base text-white">
            Log In
          </span>
        )}

        {isSubmitting && (
          <span className="text-xs font-bold lg:text-base text-white">
            Submitting ....
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
  );
}
