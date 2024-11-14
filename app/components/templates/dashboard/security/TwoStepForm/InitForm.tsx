"use client";
import logo from "@/public/images/shield-logo.png";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { useTwoFactorFormSlice } from "@/lib/store/dashSecurityTwoFactoreStore";

export default function InitForm() {
  const { setStep } = useTwoFactorFormSlice();
  const clickHandler = () => {
    setStep("code");
  };

  return (
    <div className="w-fit mx-auto">
      <Image
        width={52}
        height={62}
        placeholder="blur"
        className="mx-auto"
        src={logo}
        alt="logo"
      />

      <h3 className="text-fe-c-text-title text-center text-sm mt-5 mb-3 sm:text-base">
        Choose verification method
      </h3>

      <p className="text-fe-c-text-title text-xs  mb-3  text-center">
        This extra step will be required every time you sign in.
      </p>
      <p className="text-fe-c-text-title text-xs underline decoration-fe-c-text-title text-center mb-5  ">
        How does it work?
      </p>

      <Button
        onClick={clickHandler}
        className="w-full p-4 py-3 rounded-lg btn-hover sm:h-11
      text-white text-xs sm:text-sm shadow-md font-semibold 
      flex gap-2 bg-orange-grad-btn items-center"
      >
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
          <path
            d="M2.29412 2.1L8.30711 7.21104C8.55985 7.42587 8.96956 7.42587 9.22231 7.21104L15.2353 2.1M3.58824 12H13.9412C15.3707 12 16.5294 11.0151 16.5294 9.8V3.2C16.5294 1.98497 15.3707 1 13.9412 1H3.58824C2.15879 1 1 1.98497 1 3.2V9.8C1 11.0151 2.15879 12 3.58824 12Z"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <span>Send verification code to email</span>
      </Button>
      <Button
        className="w-full p-4 py-3 rounded-lg btn-hover  mt-4 sm:mt-5 sm:h-11 items-center
      text-fe-c-text-title text-xs sm:text-sm shadow-sm font-semibold sm:w-[21.875rem]
      flex gap-2 bg-neutral-400/30 dark:bg-white/15 "
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M11.6895 13.173V13.7461C11.6895 14.2875 11.2465 14.7305 10.7051 14.7305H3.09375C2.55234 14.7305 2.10938 14.2875 2.10938 13.7461V2.03906C2.10938 1.49766 2.55234 1.05469 3.09375 1.05469H10.7051C11.2465 1.05469 11.6895 1.49766 11.6895 2.03906V2.62969C11.8512 2.61563 12.0164 2.60508 12.1816 2.60508C12.368 2.60508 12.5578 2.61563 12.7441 2.6332V2.03906C12.7441 0.914062 11.8301 0 10.7051 0H3.09375C1.96875 0 1.05469 0.914062 1.05469 2.03906V15.9609C1.05469 17.0859 1.96875 18 3.09375 18H10.7051C11.8301 18 12.7441 17.0859 12.7441 15.9609V13.166C12.5578 13.1871 12.368 13.1977 12.1816 13.1977C12.0129 13.1977 11.8512 13.1871 11.6895 13.173ZM7.71328 16.9453H6.08203C5.75859 16.9383 5.50547 16.6711 5.5125 16.3477C5.51953 16.0383 5.76914 15.7852 6.08203 15.7781H7.7168C8.04023 15.7711 8.30742 16.0242 8.31445 16.3477C8.32148 16.6711 8.06836 16.9383 7.74492 16.9453H7.71328Z"
            className="fill-fe-c-text-title"
          />
          <path
            d="M12.1816 3.13593C9.54841 3.13593 7.41443 5.26991 7.41443 7.90311C7.41443 10.5363 9.54841 12.6703 12.1816 12.6703C14.8148 12.6703 16.9453 10.5328 16.9453 7.90311C16.9453 5.26991 14.8113 3.13593 12.1816 3.13593ZM14.8886 7.23514L12.0691 10.0547C11.7316 10.3922 11.1867 10.3922 10.8527 10.0547L9.2988 8.50077C8.96834 8.15975 8.97537 7.61483 9.31638 7.28436C9.65037 6.95741 10.1847 6.95741 10.5187 7.28436L11.4609 8.22655L13.6687 6.01522C14.0062 5.67772 14.5511 5.67772 14.8886 6.01522C15.2226 6.35272 15.2226 6.89764 14.8886 7.23514Z"
            className="fill-fe-c-text-title"
          />
        </svg>

        <span>Enter code from authenticator app</span>
      </Button>
    </div>
  );
}
