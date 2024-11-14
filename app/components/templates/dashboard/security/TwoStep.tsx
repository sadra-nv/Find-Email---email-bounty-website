"use client";

import logo from "@/public/images/shield-logo.png";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { useState } from "react";
import SecurityModal from "../../UI/Modal/SecurityModal";
import InitForm from "./TwoStepForm/InitForm";
import { useTwoFactorFormSlice } from "@/lib/store/dashSecurityTwoFactoreStore";
import CodeForm from "./TwoStepForm/CodeForm";
import SuccessFrom from "./TwoStepForm/SuccessForm";
import TripleShields from "./TwoStepForm/TripleShields";

export default function TwoStep() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
    setTimeout(() => setStep("init"), 300);
  };

  const { formStep, setStep } = useTwoFactorFormSlice();

  let forms;
  if (formStep === "code" || formStep === "success") {
    forms = (
      <>
        <div className="sm:px-20">
          <Image
            width={52}
            height={62}
            placeholder="blur"
            className="mx-auto "
            src={logo}
            alt="logo"
          />

          <TripleShields />
        </div>
        {formStep === "code" && <CodeForm />}
        {formStep === "success" && <SuccessFrom />}
      </>
    );
  }
  return (
    <>
      <SecurityModal
        isOpen={isOpen}
        tapClose={false}
        closeHandler={closeHandler}
        className="min-w-fit lg:w-5/12"
      >
        {formStep === "init" && <InitForm />}
        {forms}
        {/* {forms} */}
        {/* {formStep === "code" ||
          (formStep === "success" && (
            <>
              <div className="sm:px-20">
                <Image
                  width={52}
                  height={62}
                  placeholder="blur"
                  className="mx-auto "
                  src={logo}
                  alt="logo"
                />

                <TripleShields />
              </div>
              {formStep === "code" && <CodeForm />}
              {formStep === "success" && <SuccessFrom />}
            </>
          ))}
        {formStep === "success" && (
          <>
            <div>
              <div className="sm:px-20">
                <Image
                  width={52}
                  height={62}
                  placeholder="blur"
                  className="mx-auto "
                  src={logo}
                  alt="logo"
                />

                <TripleShields />
              </div>
            </div>
            <SuccessFrom />
          </>
        )} */}
      </SecurityModal>
      <h2 className="text-fe-c-text-title mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
        Two-step authentication
      </h2>
      <p className="leading-8 text-xs sm:text-sm font-semibold text-justify">
        Protect your account with an extra verification step. Use an
        authenticator app or receive codes via email to confirm your identity
        each time you log in.
      </p>

      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-6
      pb-6 border-b border-neutral-600/30 dark:border-neutral-200/30 sm:pb-9"
      >
        <Button
          onClick={openHandler}
          className="w-full p-4 py-3 rounded-lg btn-hover h-11
        text-white text-xs sm:text-sm shadow-md font-semibold sm:w-[21.875rem]
        flex gap-2 bg-orange-grad-btn items-center"
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path
              d="M7.99994 17.8157C7.80118 17.8157 7.60251 17.7909 7.41203 17.7329C3.11388 16.5486 0 12.532 0 8.17592V4.54034C0 3.61281 0.670814 2.61078 1.53209 2.25468L6.14492 0.366458C7.34578 -0.122153 8.66247 -0.122153 9.85501 0.366458L14.4678 2.25468C15.3291 2.61078 16 3.61281 16 4.54034V8.17592C16 12.5237 12.8778 16.5404 8.58793 17.7329C8.39746 17.7909 8.1987 17.8157 7.99994 17.8157ZM7.99994 1.25259C7.52789 1.25259 7.06413 1.3437 6.61692 1.52589L2.00415 3.41406C1.60664 3.57969 1.24223 4.11799 1.24223 4.54863V8.18428C1.24223 11.9855 3.97515 15.4969 7.74321 16.5404C7.90884 16.59 8.09104 16.59 8.25667 16.5404C12.0248 15.4969 14.7578 11.9855 14.7578 8.18428V4.54863C14.7578 4.11799 14.3933 3.57969 13.9958 3.41406L9.38304 1.52589C8.93584 1.3437 8.47199 1.25259 7.99994 1.25259Z"
              fill="white"
            />
            <path
              d="M7.99764 9.94822C6.73885 9.94822 5.72021 8.92959 5.72021 7.6708C5.72021 6.412 6.73885 5.39337 7.99764 5.39337C9.25644 5.39337 10.2751 6.412 10.2751 7.6708C10.2751 8.92959 9.25644 9.94822 7.99764 9.94822ZM7.99764 6.6356C7.42621 6.6356 6.96245 7.09937 6.96245 7.6708C6.96245 8.24222 7.42621 8.70599 7.99764 8.70599C8.56907 8.70599 9.03283 8.24222 9.03283 7.6708C9.03283 7.09937 8.56907 6.6356 7.99764 6.6356Z"
              fill="white"
            />
            <path
              d="M7.99807 12.4327C7.65853 12.4327 7.37695 12.1511 7.37695 11.8116V9.32711C7.37695 8.98757 7.65853 8.70599 7.99807 8.70599C8.33761 8.70599 8.61919 8.98757 8.61919 9.32711V11.8116C8.61919 12.1511 8.33761 12.4327 7.99807 12.4327Z"
              fill="white"
            />
          </svg>
          <span>Two-factor authentication</span>
        </Button>
        <div className="flex gap-2 items-center text-xs text-white bg-red-600 rounded-md py-2.5 px-4">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.25 12.5C2.80233 12.5 0 9.69767 0 6.25C0 2.80233 2.80233 0 6.25 0C9.69767 0 12.5 2.80233 12.5 6.25C12.5 9.69767 9.69767 12.5 6.25 12.5ZM6.25 0.872093C3.28488 0.872093 0.872093 3.28488 0.872093 6.25C0.872093 9.21512 3.28488 11.6279 6.25 11.6279C9.21512 11.6279 11.6279 9.21512 11.6279 6.25C11.6279 3.28488 9.21512 0.872093 6.25 0.872093Z"
              fill="white"
            />
            <path
              d="M8.75591 8.01939C8.95952 8.2231 8.95952 8.55222 8.75591 8.75591C8.70759 8.80435 8.65018 8.84276 8.58698 8.86895C8.52377 8.89513 8.45601 8.90857 8.3876 8.9085C8.2543 8.9085 8.12097 8.85747 8.01938 8.75591L6.45432 7.19075L4.88926 8.75593C4.84095 8.80436 4.78355 8.84277 4.72036 8.86896C4.65717 8.89515 4.58942 8.90859 4.52102 8.90852C4.45261 8.90859 4.38486 8.89515 4.32166 8.86897C4.25845 8.84278 4.20105 8.80437 4.15273 8.75593C3.94912 8.55222 3.94912 8.2231 4.15273 8.01939L5.7179 6.45432L4.15271 4.88926C3.9491 4.68555 3.9491 4.35642 4.15271 4.15273C4.35642 3.94912 4.68555 3.94912 4.88926 4.15273L6.45432 5.7179L8.01938 4.15271C8.2231 3.9491 8.55222 3.9491 8.75591 4.15271C8.95952 4.35642 8.95952 4.68555 8.75591 4.88926L7.19075 6.45432L8.75591 8.01939Z"
              fill="white"
            />
          </svg>
          <span>Disabled</span>
        </div>
      </div>
    </>
  );
}
