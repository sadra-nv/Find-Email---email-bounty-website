"use client";

import { Checkbox } from "@headlessui/react";
import { useState } from "react";
// import MainInput from "../UI/Inputs/MainInput";
import Link from "next/link";
// import NewPassInput from "./NewPassInput";

export default function SignupForm() {
  const [enabled, setEnabled] = useState(false);

  return (
    <form>
      <div className="space-y-6">
        {/* // todo conenct these to hook form /*}

        {/* <MainInput
          type="email"
          label="Enter Your Email"
          placeholder="Enter Your Email"
          className="w-full"
        />
        <MainInput
          type="text"
          label="Enter Your Username"
          placeholder="Enter Your Username"
          className="w-full"
        />
       
        <NewPassInput
          label="Password"
          placeholder="Enter Your Password"
          className="w-full"
        />
        <MainInput
          type="password"
          label="Repeat Password"
          placeholder="Repeat Your Password"
          className="w-full "
        /> */}
      </div>
      <div className="mt-8">
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
      </div>

      <Link
        href="/auth/activate-account"
        className="bg-orange-grad-btn block rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-full btn-hover"
      >
        Sign Up
      </Link>
    </form>
  );
}
