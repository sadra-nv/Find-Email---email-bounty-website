import StarsSection from "../../UI/StarsSection/StarsSection";
import PaymentType from "./PaymentType";

export default function HeroSec() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
        relative hero-grad overflow-x-hidden"
    >
      <StarsSection className="z-0 xl:h-screen max-h-[31.25rem] sm:max-h-[43.75rem] lg:max-h-screen" />
      <div
        className="w-full absolute h-full xl:h-0 after:z-10 after:bottom-0 after:right-0 after:w-full after:h-28 after:bg-gradient-to-b 
        after:to-[#030014] after:via-[#030014] after:from-transparent after:absolute"
      ></div>

      <div className="container h-full pt-36 lg:pt-64">
        <h2 className="w-fit mx-auto rounded-full bg-purple-300/20 text-xs py-3 px-9 lg:text-sm relative z-30">
          Special Discount for Higher Payments
        </h2>

        <div className="w-fit mx-auto leading-loose text-justify md:text-center relative z-30">
          <h1 className="font-bold lg:text-5xl text-3xl mt-8 mb-5 lg:mt-9 lg:mb-6 text-center">
            Pricing
          </h1>

          <div className="text-sm lg:text-xl leading-loose">
            <p>
              If your payment exceeds $100, you will receive 20% more credits. 
            </p>
            <p className="mt-0 sm:mt-4">
              This discount helps you take full advantage of our site&apos;s
              features in a more economical way.
            </p>
          </div>
        </div>

        <PaymentType />
      </div>
    </section>
  );
}
