"use client";

import DashOtp from "../../../UI/Inputs/DashOtp";
import { Button } from "@headlessui/react";
import { useTwoFactorFormSlice } from "@/lib/store/dashSecurityTwoFactoreStore";

export default function CodeForm() {
  const { setStep } = useTwoFactorFormSlice();

  const clickHandler = () => {
    setStep("success");
  };
  return (
    <form className="sm:px-20">
      <div className=" text-fe-c-text-title font-semibold mb-4">
        <p className="text-sm sm:text-base text-center">
          We sent a verification code to
        </p>
        <p
          className="text-xs/3 sm:text-sm/3 px-8 py-2 bg-blue-400/20 dark:bg-blue-500/60 rounded-lg 
        text-center w-fit mx-auto  mt-3 sm:mt-4"
        >
          ar.sing7979@gmail.com
        </p>
        <p
          className="text-xs sm:text-sm 
        text-center w-fit mx-auto  mt-4 sm:mt-5 mb-6 sm:mb-8"
        >
          If you didn’t get the email, check your spam folder.
        </p>
        <DashOtp />
        <Button
          onClick={clickHandler}
          className="bg-red-100 btn-hover dark:bg-red-200 mt-8 w-full flex justify-center items-center rounded-lg"
        >
          <span
            style={{ WebkitTextFillColor: "transparent" }}
            className=" py-3  px-1 bg-clip-text bg-orange-grad-btn"
          >
            Verify
          </span>
        </Button>
      </div>
    </form>
  );
}
