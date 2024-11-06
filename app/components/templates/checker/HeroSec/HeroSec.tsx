import { Button } from "@headlessui/react";
import MainInput from "../../UI/Inputs/MainInput";
import StarsSection from "../../UI/StarsSection/StarsSection";

export default function HeroSec() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
            relative hero-grad overflow-x-hidden"
    >
      <StarsSection
        isStatic
        className="z-0 xl:h-screen max-h-[31.25rem] sm:max-h-[43.75rem] lg:max-h-screen"
      />
      <div
        className="w-full absolute h-full xl:h-0 after:z-10 after:bottom-0 after:right-0 after:w-full after:h-28 after:bg-gradient-to-b 
            after:to-[#030014] after:via-[#030014] after:from-transparent after:absolute"
      ></div>

      <div className="container h-full pt-36 lg:pt-64 relative z-30">
        <h2
          className="w-full text-center xs:w-fit mx-auto rounded-full
             bg-purple-300/20 text-xs py-3 px-9 lg:text-sm relative z-30"
        >
          Online Smtp Checker
        </h2>

        <div className="mt-7 lg:mt-9 w-fit mx-auto relative z-30">
          <h1 className="font-bold text-3xl lg:text-5xl text-center xs:w-fit mx-auto mb-5 lg:mb-6">
            Online Smtp checker
          </h1>
        </div>

        <form
          className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
               bg-[#0a081ec0] relative z-30 mt-6 lg:mt-12 mb-20 lg:mb-32
           border border-neutral-700/30 "
        >
          <div className="sm:grid-cols-2 grid grid-cols-1 gap-6 sm:gap-16 sm:gap-y-12">
            <MainInput label="Smtp Server" placeholder="Company Email" />
            <MainInput label="Port" placeholder="9612287444" />
            <MainInput label="Username" placeholder="Alireza" />
            <MainInput
              type="password"
              label="Password"
              placeholder="*****************"
            />
            <MainInput
              type="email"
              label="Email"
              placeholder="ar.sing7979@gmail.com"
            />
          </div>
          <Button
            className="mx-auto flex gap-1 justify-center items-center py-3 lg:py-4 
          w-full rounded-lg bg-orange-grad-btn xs:w-40 btn-hover group lg:mt-9 mt-4"
          >
            <span className="text-xs font-bold lg:text-base text-white">
              Submit
            </span>
            <svg
              className="group-hover:translate-x-1 tran-fast fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Button>
        </form>
      </div>
    </section>
  );
}
