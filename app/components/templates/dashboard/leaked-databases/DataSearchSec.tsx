import { Suspense } from "react";
import LeakSearchForm from "./LeakSearchForm";
import { getHeroQueries } from "@/lib/services/home/HeroSection/getHeroQueries";

export default async function DataSearchSec() {
  const queriesData = await getHeroQueries();
  const leakFilters: string[] = [];

  if (!queriesData) return;
  queriesData.data.searches_queries.map((data) => {
    if (data.type === "leak") {
      data.queries.map((query) => {
        leakFilters.push(query.key);
      });
    }
  });

  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-0">
        Leaked Databases
      </h2>

      <h2
        className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row
        text-lg font-semibold mt-12  mb-7"
      >
        <span className=" inline-block text-fe-c-text-title ">
          Search in Leaked Database.
        </span>
        <span className="text-green-700 inline-block font-sans">
          [ Record : 2,070,284,200 ]
        </span>
      </h2>

      <Suspense>
        <LeakSearchForm leakFilters={leakFilters} />
      </Suspense>
    </section>
  );
}
