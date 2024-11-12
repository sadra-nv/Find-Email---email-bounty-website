import Header from "@/app/components/templates/dashboard/Header/Header";
import { Button, Textarea } from "@headlessui/react";

export default function BulkPage() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className=" h-full  w-full">
          <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
            <h2 className="w-fit bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-0">
              Bulk Search [only Domain]
            </h2>

            <h2
              className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row
        text-lg font-semibold mt-12  mb-7"
            >
              max. 25 separated by newline
            </h2>

            <form>
              <Textarea
                placeholder="Write a message"
                cols={7}
                className="bg-neutral-200 dark:bg-dark-card rounded-lg sm:rounded-xl w-full
                p-4 shadow-sm border-neutral-600/60 min-h-48"
              />
              <Button
                className="font-semibold text-xs text-white flex gap-2 items-center
              rounded-lg bg-orange-grad-btn p-3 btn-hover ml-auto mt-8"
              >
                <svg width="13" height="13" viewBox="0 0 13 13">
                  <path
                    d="M6.19968 12.3952C2.7823 12.3952 0 9.61386 0 6.19762C0 2.78137 2.7823 0 6.19968 0C9.61707 0 12.3994 2.78137 12.3994 6.19762C12.3994 9.61386 9.61707 12.3952 6.19968 12.3952ZM6.19968 0.906968C3.27827 0.906968 0.907271 3.28322 0.907271 6.19762C0.907271 9.11201 3.27827 11.4883 6.19968 11.4883C9.1211 11.4883 11.4921 9.11201 11.4921 6.19762C11.4921 3.28322 9.1211 0.906968 6.19968 0.906968Z"
                    fill="white"
                  />
                  <path
                    d="M12.5485 13C12.4336 13 12.3187 12.9577 12.228 12.867L11.0183 11.6577C10.8429 11.4823 10.8429 11.1921 11.0183 11.0168C11.1937 10.8414 11.484 10.8414 11.6594 11.0168L12.8691 12.2261C13.0445 12.4014 13.0445 12.6916 12.8691 12.867C12.7784 12.9577 12.6635 13 12.5485 13Z"
                    fill="white"
                  />
                </svg>
                <span>Search Project...</span>
              </Button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
