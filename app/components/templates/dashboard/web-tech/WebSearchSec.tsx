import Search from "../../UI/Search/Search";

export default function WebSearchSec() {
  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-0">
        Search in DataBase
      </h2>

      <h2
        className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row
        text-lg font-semibold mt-12  mb-7"
      >
        Search Field
      </h2>

      <Search
        placeHolder="Just Type Domain Search"
        className="w-full md:w-2/3 mx-auto block rounded-full border border-neutral-500/10"
      />
    </section>
  );
}
