"use client";

import { useTwoFactorFormSlice } from "@/lib/store/dashSecurityTwoFactoreStore";
import { Button } from "@headlessui/react";

export default function SuccessFrom() {
  const { setStep } = useTwoFactorFormSlice();
  const clickHandler = () => {
    setStep("final");
  };

  return (
    <form className="sm:px-20">
      <div className=" text-fe-c-text-title font-semibold mb-4">
        <p
          className="text-xs sm:text-sm 
          text-center w-fit mx-auto  mt-4 sm:mt-5 mb-6 sm:mb-8"
        >
          Two-step verification has been successfully{" "}
          <br className="hidden xs:block" /> activated for you
        </p>
        <Button
          onClick={clickHandler}
          className="bg-orange-grad-btn btn-hover  mt-8 w-full flex justify-center items-center rounded-lg"
        >
          <span className=" py-3  px-1 text-white ">Final approval</span>
        </Button>
      </div>
    </form>
  );
}
