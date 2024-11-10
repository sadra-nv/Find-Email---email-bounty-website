"use client";
import { Button, Checkbox } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import MainInput from "../UI/Inputs/MainInput";

export default function LoginForm() {
  const [enabled, setEnabled] = useState(false);

  return (
    <form>
      <MainInput
        type="email"
        label="Email or Username"
        placeholder="Enter Your Email Or Username..."
        className="w-full"
      />
      <MainInput
        type="password"
        label="Password"
        placeholder="**********"
        className="w-full mt-8"
      />
      <div className="flex justify-between gap-4 items-center mt-4">
        <div>
          <Checkbox
            name="remember-me"
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

      <Button className="block bg-orange-grad-btn  rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-full btn-hover">
        Log In
      </Button>
    </form>
  );
}
