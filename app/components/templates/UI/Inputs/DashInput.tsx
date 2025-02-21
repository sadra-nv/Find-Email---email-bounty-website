"use client";

import { cn } from "@/lib/utils";
import { Button, Field, Input, Label } from "@headlessui/react";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";

interface MainInputType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  label: string;
  placeholder: string;
}

export default forwardRef<HTMLInputElement, MainInputType>(function DashInput(
  {
    className,
    label,
    dirty,
    error,
    placeholder,
    type,
    ...props
  }: MainInputType,
  ref
) {
  const [passwordVisiblity, setPasswordVisibility] = useState(false);

  const showPasswordHandler = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const inputType = type ? type : "text";

  return (
    <Field className={cn("", className)}>
      <Label className="text-fe-c-text-title mb-4 block text-xs font-semibold lg:text-sm">
        {label}
      </Label>
      <div className="relative w-full">
        <Input
          placeholder={placeholder}
          ref={ref}
          {...props}
          className="w-full rounded-lg bg-neutral-400/25 dark:bg-white/15
           py-3 h-12 px-4 lg:py-3 lg:px-5 text-fe-c-text-title text-xs/3 "
          type={passwordVisiblity ? "text" : inputType}
        />

        {error && dirty && (
          <p
            className={cn(
              "hidden gap-2 justify-start items-center text-sm text-red-500  ",
              {
                " mt-3 flex ": error,
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
            {error?.message}
          </p>
        )}

        {type === "password" && (
          <Button
            onClick={showPasswordHandler}
            className="absolute top-1/2 p-3 -translate-y-1/2 z-30 end-2"
          >
            {!passwordVisiblity && (
              <svg
                className="size-3 fill-fe-c-text-sub"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            )}
            {passwordVisiblity && (
              <svg
                className="size-3 fill-fe-c-text-sub"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
              </svg>
            )}
          </Button>
        )}
      </div>
    </Field>
  );
});
