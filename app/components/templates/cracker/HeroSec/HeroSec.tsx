import { Button, Textarea } from "@headlessui/react";
import StarsSection from "../../UI/StarsSection/StarsSection";
import search from "@/public/icons/search.png";
import Image from "next/image";

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

      <div className="container h-full pt-36 lg:pt-64 relative z-30">
        <h2
          className="w-full text-center xs:w-fit mx-auto rounded-full
         bg-purple-300/20 text-xs py-3 px-9 lg:text-sm relative z-30"
        >
          Free Password Hash Cracker
        </h2>

        <div className="mt-7 lg:mt-9 w-fit mx-auto relative z-30">
          <h1 className="font-bold text-3xl lg:text-5xl text-center xs:w-fit mx-auto mb-5 lg:mb-6">
            Online hash cracker
          </h1>

          <p className="text-sm lg:text-xl leading-8 lg:leading-10 text-justify lg:text-center">
            If your payment exceeds $100, you will receive 20% more credits. 
          </p>
          <p className="text-sm lg:text-xl leading-8 lg:leading-10  text-justify lg:text-center">
            This discount helps you take full advantage of our site&apos;s
            features in a more economical way.
          </p>
        </div>

        <form
          className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
           bg-[#0a081ec0] relative z-30 mt-6 lg:mt-12 mb-20 lg:mb-32
       border border-neutral-700/30 "
        >
          <p className="text-justify w-fit mx-auto lg:text-xl font-semibold text-sm leading-7 ">
            Enter your hashes here and we will attempt to decrypt them for free
            online.
          </p>
          <p
            className="text-justify w-fit mx-auto bg-gold-grad rounded-lg
          py-3 px-5 lg:mt-8 lg:mb-9 mt-6  mb-5
          text-black lg:px-9 lg:py-4 lg:text-sm text-xs"
          >
            max. 25 separated by newline
          </p>

          <div className="w-full lg:w-2/3 mx-auto">
            <Textarea
              placeholder="Enter MD5 hashes here"
              className="bg-white/10 p-4 lg:px-6 lg:py-5 w-full   inline-block rounded-lg lg:mb-9 mb-4
            lg:rounded-xl text-neutral-600 text-xs lg:text-sm outline-none
             focus:border-violet-800 border-2 border-transparent"
              rows={7}
            />
          </div>

          <Button
            className="mx-auto flex gap-1 justify-center items-center py-3 lg:py-4 
          w-full rounded-lg bg-orange-grad-btn xs:w-40 btn-hover"
          >
            <Image src={search} width={21} height={23} alt="icon" />
            <span className="text-xs font-bold lg:text-base text-white">
              Start Search
            </span>
          </Button>
        </form>
      </div>
    </section>
  );
}
