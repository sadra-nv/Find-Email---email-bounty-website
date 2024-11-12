import Search from "../../UI/Search/Search";

export default function LogsSearchSec() {
  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Logs Database
      </h2>
      <div className="w-fit mx-auto">
        <p className="text-sm font-semibold w-fit mx-auto text-center leading-8">
          You will not download duplicate results anymore, ensuring that your
          credits are used efficiently
        </p>

        <p
          className="text-xs  bg-gold-grad sm:rounded-xl mt-5 text-center sm:py-3 px-8 text-neutral-800 w-full
        absolute left-0 sm:relative py-5 leading-loose font-semibold"
        >
          If you have more than <span className="font-sans">400</span> credits,
          you can perform searches based on port and subdomain
        </p>
      </div>

      <h2 className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row  text-lg font-semibold mt-36 sm:mt-12 mb-7">
        <span className=" inline-block text-fe-c-text-title ">
          Search in Logs Database.
        </span>
        <span className="text-green-700 inline-block font-sans">
          [ Record : 2,070,284,200 ]
        </span>
      </h2>

      <Search
        placeHolder="Just Type Domain Search"
        className="w-full md:w-2/3 mx-auto block rounded-full border border-neutral-500/10"
      />
    </section>
  );
}
