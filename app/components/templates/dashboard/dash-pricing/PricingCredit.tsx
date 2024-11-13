import CreditItem from "./CreditItem";

const text = `In this section, you need one credit to download every 5000 results. For example:
If your search yields between 0 and 5000 results, you will need one credit to download them.
If the number of results is between 5001 and 10000, you will need two credits.
Similarly, every additional 5000 results will require one additional credit.`;

export default function PricingCredit() {
  return (
    <section className="mt-12 lg:mt-24  container">
      <h2 className="w-fit text-sm lg:text-base font-bold lg:mb-5 mb-6 rounded-lg bg-gold-grad text-black px-6 py-3">
        About Credits
      </h2>
      <h3 className="text-fe-c-text-title mb-12 text-base lg:text-lg font-bold lg:mb-5">
        Explanation of Credits
      </h3>

      <p className="text-justify lg:leading-6 text-sm leading-8 lg:text-base">
        Credits on FindEmail.io are used as the internal currency to access
        various site services. Below are detailed explanations on how to use
        credits in different sections of the site:
      </p>

      <div className=" mt-12 lg:mt-9 space-y-9 lg:space-y-12">
        <CreditItem title="Domain Section" text={text} />
        <CreditItem title="Leak Section" text={text} />
        <CreditItem title="Logs Section" text={text} />
        <CreditItem title="Practical Examples" text={text} />
      </div>

      <h2
        className="sm:w-fit text-justify sm:rounded-lg bg-highlight-dark text-white dark:bg-blue-900 text-xs py-3 px-9 lg:text-sm  z-30
          mt-6 lg:mt-11 leading-8 absolute w-full left-0 sm:left-auto sm:relative"
      >
        By using these credits, you can effectively utilize our services and
        access the necessary data.
      </h2>
    </section>
  );
}
