import { Button } from "@headlessui/react";
import pic from "@/public/images/shield-red.png";
import Image from "next/image";

export default function EndSessionForm({
  closeHandler,
}: {
  closeHandler: () => void;
}) {
  const clickHandler = () => {
    closeHandler();
  };
  return (
    <form className="sm:px-20">
      <Image
        width={52}
        height={62}
        placeholder="blur"
        className="mx-auto "
        src={pic}
        alt="logo"
      />
      <div className=" text-fe-c-text-title font-semibold my-4 sm:mt-5">
        <p className="text-sm sm:text-base text-center">Delete Session</p>
        <p
          className="text-xs sm:text-sm  font-medium
          text-center w-fit mx-auto  mt-4 sm:mt-5 mb-6 sm:mb-8"
        >
          Do you want to delete this session?
        </p>
        <div className="flex w-fit text-xs sm:text-sm justify-between gap-4 items-center mx-auto">
          <Button
            className="bg-neutral-400/30 w-32 sm:w-40 py-3.5 sm:py-4
               dark:bg-white/15 rounded-lg btn-hover"
          >
            Yes , delete it
          </Button>
          <Button
            onClick={clickHandler}
            className="bg-[#FF0D00]  text-white py-3.5 sm:py-4 w-32 sm:w-40
                 rounded-lg btn-hover "
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
