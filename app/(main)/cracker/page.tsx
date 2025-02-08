import HeroSec from "@/app/components/templates/cracker/HeroSec/HeroSec";
import StarsSection from "@/app/components/templates/UI/StarsSection/StarsSection";

export default function ToolsPage() {
  return (
    <main>
      <section
        className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
              relative max-h-fit overflow-y-hidden overflow-x-hidden"
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

          <HeroSec />
        </div>
      </section>
    </main>
  );
}
