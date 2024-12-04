import { Button } from "@headlessui/react";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="relative z-10 w-full h-full min-h-screen max-h-[56.25rem]
    flex flex-col justify-start items-center pt-36 lg:pt-64"
    >
      <video
        className="mix-blend-lighten  absolute  -z-10 opacity-15
      top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[53.75rem] h-[38.4375rem] overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source src="/videos/q-c3d7becf.webm" type="video/webm" />
        Your browser does not support the video playback.
      </video>
      <div className="w-full relative z-20 h-full flex flex-col justify-start items-center">
        <h1 className="font-bold text-sm sm:text-3xl leading-7 sm:leading-10 text-center w-11/12 lg:w-5/12 mb-6 sm:mb-8">
          Open your Email and click on the link sent to activate your account
        </h1>
        <div className="sm:flex-row flex-col flex justify-between items-center gap-4 w-9/12 sm:w-fit">
          <Button className="w-full xs:max-w-64 sm:w-fit font-bold text-xs sm:text-base py-3 px-8 bg-orange-grad-btn rounded-full">
            Active My Account
          </Button>
          <Button className="w-full xs:max-w-64 sm:w-fit font-bold text-xs sm:text-base py-3 px-8 bg-[#282242] rounded-full">
            Resend Active Link
          </Button>
        </div>
        <Link
          className="block py-3 px-10 bg-blue-grad-btn rounded-lg mt-8 sm:mt-14 text-xs sm:text-sm"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
