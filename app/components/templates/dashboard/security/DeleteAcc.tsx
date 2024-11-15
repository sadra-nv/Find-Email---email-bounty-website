"use client";

import { Button } from "@headlessui/react";
import SecurityModal from "../../UI/Modal/SecurityModal";
import { useState } from "react";
import DeleteAccForm from "./DeleteAccForm";

export default function DeleteAcc() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <>
      <SecurityModal
        isOpen={isOpen}
        tapClose={true}
        closeHandler={closeHandler}
        className="min-w-fit lg:w-5/12"
      >
        <DeleteAccForm closeHandler={closeHandler} />
      </SecurityModal>
      <h2
        className="text-fe-c-text-title mb-2 sm:mb-3 font-semibold text-sm sm:text-base
      sm:mt-9 mt-6"
      >
        Delete account
      </h2>
      <p className="leading-8 text-xs sm:text-sm font-semibold text-justify">
        If you delete your account, all the collected and personal data will be
        removed. Learn more about how Snov.io handles your data after account
        deletion from
        <span
          style={{ WebkitTextFillColor: "transparent" }}
          className="underline decoration-orange-600 underline-offset-4 px-1 bg-clip-text bg-orange-grad-btn"
        >
          Terms and Conditions
        </span>
        and
        <span
          style={{ WebkitTextFillColor: "transparent" }}
          className="underline decoration-orange-600 underline-offset-4 px-1 bg-clip-text bg-orange-grad-btn"
        >
          Privacy Policy
        </span>
        .
      </p>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-6
      "
      >
        <Button
          onClick={clickHandler}
          className="w-full p-4 py-3 rounded-lg btn-hover h-11
        text-fe-c-text-title text-xs sm:text-sm shadow-sm font-semibold sm:w-[21.875rem]
        flex gap-2 border border-red-600/50 bg-red-600/20 dark:bg-red-900/40"
        >
          <svg width="13" height="19" viewBox="0 0 13 19" fill="none">
            <path
              d="M9.85618 18.0046C9.68857 18.0046 9.52096 17.9428 9.38864 17.8105C9.13282 17.5547 9.13282 17.1312 9.38864 16.8754L11.8763 14.3878C12.1321 14.132 12.5555 14.132 12.8113 14.3878C13.0672 14.6436 13.0672 15.067 12.8113 15.3228L10.3237 17.8105C10.1914 17.9428 10.0238 18.0046 9.85618 18.0046Z"
              className="fill-fe-c-text-title"
            />
            <path
              d="M12.3438 18.0046C12.1762 18.0046 12.0086 17.9428 11.8763 17.8105L9.38864 15.3228C9.13282 15.067 9.13282 14.6436 9.38864 14.3878C9.64446 14.132 10.0679 14.132 10.3237 14.3878L12.8113 16.8754C13.0672 17.1312 13.0672 17.5547 12.8113 17.8105C12.679 17.9428 12.5114 18.0046 12.3438 18.0046Z"
              className="fill-fe-c-text-title"
            />
            <path
              d="M6.8322 9.1478C6.80574 9.1478 6.7881 9.1478 6.76163 9.1478C6.71752 9.13898 6.65577 9.13898 6.60285 9.1478C4.04468 9.06841 2.11279 7.05713 2.11279 4.57831C2.11279 2.05539 4.16818 0 6.69106 0C9.21398 0 11.2694 2.05539 11.2694 4.57831C11.2605 7.05713 9.31984 9.06841 6.85867 9.1478C6.84985 9.1478 6.84102 9.1478 6.8322 9.1478ZM6.69106 1.32321C4.90036 1.32321 3.436 2.78757 3.436 4.57831C3.436 6.34259 4.81214 7.76284 6.56756 7.82459C6.62049 7.81577 6.73517 7.81577 6.84985 7.82459C8.57884 7.7452 9.93734 6.32495 9.94616 4.57831C9.94616 2.78757 8.48181 1.32321 6.69106 1.32321Z"
              className="fill-fe-c-text-title"
            />
            <path
              d="M6.68661 18.7984C4.88706 18.7984 3.18453 18.3309 1.8966 17.4664C0.670427 16.646 0 15.5256 0 14.3171C0 13.1086 0.679249 11.9971 1.8966 11.1855C4.5342 9.42123 8.82139 9.42123 11.459 11.1855C11.7589 11.3884 11.8471 11.803 11.6442 12.1029C11.4414 12.4117 11.0267 12.4911 10.7268 12.2882C8.53029 10.8238 4.82531 10.8238 2.62878 12.2882C1.78192 12.8528 1.32321 13.5673 1.32321 14.3171C1.32321 15.0669 1.79075 15.7991 2.62878 16.3637C3.69617 17.0782 5.13404 17.4664 6.67779 17.4664C7.03947 17.4664 7.33939 17.7663 7.33939 18.128C7.33939 18.4896 7.04829 18.7984 6.68661 18.7984Z"
              className="fill-fe-c-text-title"
            />
          </svg>

          <span>Delete account</span>
        </Button>
      </div>
    </>
  );
}
