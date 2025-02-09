"use client";

import { cn } from "@/lib/utils";
import {
  forwardRef,
  // HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { Button, Field, Input, Label, Transition } from "@headlessui/react";
import { UseFormSetValue } from "react-hook-form";

interface MainInputType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  label: string;
  name: "email" | "repeat_password" | "password";
  setValue: UseFormSetValue<{
    email: string;
    repeat_password: string;
    password: string;
  }>;
}

export default forwardRef<HTMLInputElement, MainInputType>(
  function NewPassInput(
    {
      className,
      label,
      dirty,
      error,
      name,
      setValue,
      placeholder,
      ...props
    }: MainInputType,
    ref
  ) {
    const [passwordVisiblity, setPasswordVisibility] = useState(false);

    const showPasswordHandler = () => {
      setPasswordVisibility((prevState) => !prevState);
    };

    const [validation, setValidation] = useState({
      length: false,
      lowerCase: false,
      number: false,
      upperCase: false,
    });

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!value) return;
      setValue(name, value);

      setTimeout(() => {
        setValidation({
          length: value.length >= 8,
          lowerCase: /[a-z]/.test(value),
          number: /\d/.test(value),
          upperCase: /[A-Z]/.test(value),
        });
      }, 500);
    };

    const [show, setShow] = useState(false);
    const focusHandler = () => {
      setShow(true);
    };

    return (
      <>
        <Field className={cn("", className)}>
          <Label className="text-white mb-4 block text-sm font-bold lg:text-lg">
            {label}
          </Label>
          <div className="relative w-full">
            <Input
              ref={ref}
              {...props}
              onFocus={focusHandler}
              onChange={changeHandler}
              className="w-full rounded-lg bg-white/10 py-4 px-4 lg:py-5 
            lg:px-5 text-neutral-100 text-xs/3 lg:text-sm/3"
              type={passwordVisiblity ? "text" : "password"}
              placeholder={placeholder}
            />
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
          </div>
        </Field>
        <Transition show={show}>
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-8",
              "gap-5 mt-5 sm:mt-7 w-full text-white  mx-auto",
              "transition duration-300 ease-in data-[closed]:opacity-0 data-[closed]:scale-95"
            )}
          >
            <div className="flex gap-2 justify-start items-center ">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 14C3.1386 14 0 10.8614 0 7C0 3.1386 3.1386 0 7 0C10.8614 0 14 3.1386 14 7C14 10.8614 10.8614 14 7 14ZM7 0.976744C3.67907 0.976744 0.976744 3.67907 0.976744 7C0.976744 10.3209 3.67907 13.0233 7 13.0233C10.3209 13.0233 13.0233 10.3209 13.0233 7C13.0233 3.67907 10.3209 0.976744 7 0.976744Z"
                  className={cn("fill-[#B3B3B3]  tran-fast", {
                    "fill-green-500": validation.length,
                  })}
                />
                <path
                  d="M6.07957 9.33127C5.94934 9.33127 5.82561 9.27918 5.73445 9.18802L3.89163 7.34523C3.70279 7.15639 3.70279 6.84383 3.89163 6.65499C4.08047 6.46616 4.39302 6.46616 4.58186 6.65499L6.07957 8.15267L9.42654 4.80569C9.61538 4.61685 9.92794 4.61685 10.1168 4.80569C10.3056 4.99453 10.3056 5.30709 10.1168 5.49592L6.42468 9.18802C6.33352 9.27918 6.2098 9.33127 6.07957 9.33127Z"
                  className={cn("fill-[#B3B3B3] tran-fast ", {
                    "fill-green-500": validation.length,
                  })}
                />
              </svg>
              <span
                className={cn("text-xs tran-fast", {
                  "text-green-500": validation.length,
                })}
              >
                8 characters
              </span>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 14C3.1386 14 0 10.8614 0 7C0 3.1386 3.1386 0 7 0C10.8614 0 14 3.1386 14 7C14 10.8614 10.8614 14 7 14ZM7 0.976744C3.67907 0.976744 0.976744 3.67907 0.976744 7C0.976744 10.3209 3.67907 13.0233 7 13.0233C10.3209 13.0233 13.0233 10.3209 13.0233 7C13.0233 3.67907 10.3209 0.976744 7 0.976744Z"
                  className={cn("fill-[#B3B3B3]  tran-fast", {
                    "fill-green-500": validation.lowerCase,
                  })}
                />
                <path
                  d="M6.07957 9.33127C5.94934 9.33127 5.82561 9.27918 5.73445 9.18802L3.89163 7.34523C3.70279 7.15639 3.70279 6.84383 3.89163 6.65499C4.08047 6.46616 4.39302 6.46616 4.58186 6.65499L6.07957 8.15267L9.42654 4.80569C9.61538 4.61685 9.92794 4.61685 10.1168 4.80569C10.3056 4.99453 10.3056 5.30709 10.1168 5.49592L6.42468 9.18802C6.33352 9.27918 6.2098 9.33127 6.07957 9.33127Z"
                  className={cn("fill-[#B3B3B3] tran-fast ", {
                    "fill-green-500": validation.lowerCase,
                  })}
                />
              </svg>
              <span
                className={cn("text-xs tran-fast", {
                  "text-green-500": validation.lowerCase,
                })}
              >
                One lowercase character
              </span>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 14C3.1386 14 0 10.8614 0 7C0 3.1386 3.1386 0 7 0C10.8614 0 14 3.1386 14 7C14 10.8614 10.8614 14 7 14ZM7 0.976744C3.67907 0.976744 0.976744 3.67907 0.976744 7C0.976744 10.3209 3.67907 13.0233 7 13.0233C10.3209 13.0233 13.0233 10.3209 13.0233 7C13.0233 3.67907 10.3209 0.976744 7 0.976744Z"
                  className={cn("fill-[#B3B3B3]  tran-fast", {
                    "fill-green-500": validation.number,
                  })}
                />
                <path
                  d="M6.07957 9.33127C5.94934 9.33127 5.82561 9.27918 5.73445 9.18802L3.89163 7.34523C3.70279 7.15639 3.70279 6.84383 3.89163 6.65499C4.08047 6.46616 4.39302 6.46616 4.58186 6.65499L6.07957 8.15267L9.42654 4.80569C9.61538 4.61685 9.92794 4.61685 10.1168 4.80569C10.3056 4.99453 10.3056 5.30709 10.1168 5.49592L6.42468 9.18802C6.33352 9.27918 6.2098 9.33127 6.07957 9.33127Z"
                  className={cn("fill-[#B3B3B3] tran-fast ", {
                    "fill-green-500": validation.number,
                  })}
                />
              </svg>
              <span
                className={cn("text-xs tran-fast", {
                  "text-green-500": validation.number,
                })}
              >
                One number
              </span>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 14C3.1386 14 0 10.8614 0 7C0 3.1386 3.1386 0 7 0C10.8614 0 14 3.1386 14 7C14 10.8614 10.8614 14 7 14ZM7 0.976744C3.67907 0.976744 0.976744 3.67907 0.976744 7C0.976744 10.3209 3.67907 13.0233 7 13.0233C10.3209 13.0233 13.0233 10.3209 13.0233 7C13.0233 3.67907 10.3209 0.976744 7 0.976744Z"
                  className={cn("fill-[#B3B3B3]  tran-fast", {
                    "fill-green-500": validation.upperCase,
                  })}
                />
                <path
                  d="M6.07957 9.33127C5.94934 9.33127 5.82561 9.27918 5.73445 9.18802L3.89163 7.34523C3.70279 7.15639 3.70279 6.84383 3.89163 6.65499C4.08047 6.46616 4.39302 6.46616 4.58186 6.65499L6.07957 8.15267L9.42654 4.80569C9.61538 4.61685 9.92794 4.61685 10.1168 4.80569C10.3056 4.99453 10.3056 5.30709 10.1168 5.49592L6.42468 9.18802C6.33352 9.27918 6.2098 9.33127 6.07957 9.33127Z"
                  className={cn("fill-[#B3B3B3] tran-fast ", {
                    "fill-green-500": validation.upperCase,
                  })}
                />
              </svg>
              <span
                className={cn("text-xs tran-fast", {
                  "text-green-500": validation.upperCase,
                })}
              >
                One uppercase character
              </span>
            </div>
          </div>
        </Transition>

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
      </>
    );
  }
);
