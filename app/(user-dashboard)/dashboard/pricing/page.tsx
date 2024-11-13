import PaymentForm from "@/app/components/templates/dashboard/dash-pricing/PaymentForm";
import PricingCredit from "@/app/components/templates/dashboard/dash-pricing/PricingCredit";
import Header from "@/app/components/templates/dashboard/Header/Header";
import QAList from "@/app/components/templates/UI/QA/dashboard/QAList";

export default function PricingPage() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className="h-full w-full">
          <section
            className="w-11/12 mx-auto relative lg:w-full h-full min-h-full mt-4 sm:mt-0 pt-8 sm:pt-4 lg:pt-11 
          rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
          >
            <h2 className="font-semibold w-fit bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
              Pricing
            </h2>

            <h3 className="text-center font-semibold text-sm text-fe-c-text-title lg:text-lg">
              Special Discount for Higher Payments
            </h3>

            <p
              className="w-full relative left-0 sm:w-2/3  leading-7 text-neutral-900 lg:py-5 lg:px-10 px-4 py-3 lg:mt-10
            mt-4 text-justify lg:text-center text-xs font-medium bg-gold-grad sm:rounded-2xl mx-auto"
            >
              <span className="block">
                If your payment exceeds $100, you will receive 20% more
                credits. 
              </span>
              <span className="block">
                This discount helps you take full advantage of our site&apos;s
                features in a more economical way.
              </span>
            </p>

            <PaymentForm />
          </section>
          <PricingCredit />

          <section className="mb-12 my-40 sm:my-12 lg:my-24 container">
            <div className="w-full h-fit flex justify-center items-center gap-2 sm:mb-12 mb-5">
              <div className="w-full bg-gradient-to-l from-black dark:from-white h-0.5 "></div>
              <h2 className="text-center text-fe-c-text-title text-lg font-bold  lg:text-3xl">
                FAQ
              </h2>
              <div className="w-full bg-gradient-to-r from-black dark:from-white h-0.5 "></div>
            </div>

            <h3 className="text-fe-c-text-title mb-4 text-lg font-semibold text-center sm:text-2xl sm:mb-5">
              Frequently asked questions
            </h3>
            <p className="text-fe-c-text-title mb-8 sm:mb-12 text-xs text-center sm:text-base">
              Browse through these FAQs to find answers to commonly asked
              questions.
            </p>
            <QAList faq={1} />
          </section>
        </main>
      </div>
    </div>
  );
}
