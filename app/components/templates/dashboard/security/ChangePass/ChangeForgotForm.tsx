import Image from "next/image";
import logo from "@/public/images/shield-logo.png";
import { Button } from "@headlessui/react";
import DashInput from "../../../UI/Inputs/DashInput";
import { useChangePassFormSlice } from "@/lib/store/dashSecurityChangePassStore";

export default function ChangeForgotForm() {
  const { setStep } = useChangePassFormSlice();

  const clickHandler = () => {
    setStep("new");
  };
  return (
    <>
      <div className="sm:px-20">
        <Image
          width={52}
          height={62}
          placeholder="blur"
          className="mx-auto mb-5 sm:mb-6"
          src={logo}
          alt="logo"
        />
      </div>
      <p className="text-sm sm:text-base font-semibold mb-4 text-fe-c-text-title text-center">
        Forgot password?
      </p>

      <form className="w-full xs:w-fit sm:px-20 ">
        <DashInput
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          className="w-full xs:w-64 sm:w-96 "
        />

        <Button
          onClick={clickHandler}
          className="btn-hover mt-5 sm:mt-8 text-xs sm:text-sm
            font-semibold  text-white py-3  px-1 h-12 w-full
            group gap-2 flex justify-center bg-orange-grad-btn items-center rounded-lg"
        >
          <span>Send Reset Link</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="fill-white tran-fast group-hover:translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Button>
      </form>
    </>
  );
}
