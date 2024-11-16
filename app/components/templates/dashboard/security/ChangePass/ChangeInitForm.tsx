import Image from "next/image";
import logo from "@/public/images/shield-logo.png";
import { Button } from "@headlessui/react";
import DashInput from "../../../UI/Inputs/DashInput";
import { useChangePassFormSlice } from "@/lib/store/dashSecurityChangePassStore";
import NewPassInput from "./NewPassInput";

export default function ChangeInitForm() {
  const { setStep } = useChangePassFormSlice();

  const onClick = () => {
    setStep("forgot");
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
        Change password
      </p>

      <form className="w-full xs:w-fit sm:px-20 ">
        <div className="w-full pb-6 sm:pb-8 border-b border-neutral-500/20 dark:border-neutral-400/30">
          <DashInput
            label="Current password"
            type="password"
            placeholder=""
            className="w-full xs:w-64 sm:w-96"
          />
          <Button
            onClick={onClick}
            style={{ WebkitTextFillColor: "transparent" }}
            className="px-1 bg-clip-text text-xs mt-4 font-semibold bg-orange-grad-btn"
          >
            Forgot password?
          </Button>
        </div>
        <NewPassInput
          label="New password"
          placeholder="+8 characters"
          className="w-full xs:w-64 sm:w-96  pt-5 sm:pt-8"
        />
        {/* <DashInput
          label="New password"
          type="password"
          placeholder="+8 characters"
          className="w-full xs:w-64 sm:w-96  pt-5 sm:pt-8"
        /> */}

        <DashInput
          label="Repeat new password"
          type="password"
          placeholder=""
          className="w-full xs:w-64 sm:w-96  pt-5 sm:pt-8"
        />

        <Button
          // onClick={clickHandler}
          className="bg-red-100 btn-hover
            font-semibold dark:bg-red-200 mt-8 w-full flex justify-center items-center rounded-lg"
        >
          <span
            style={{ WebkitTextFillColor: "transparent" }}
            className=" py-3  px-1 bg-clip-text bg-orange-grad-btn"
          >
            Verify
          </span>
        </Button>
      </form>
    </>
  );
}
