import Header from "@/app/components/templates/dashboard/Header/Header";
import LogsSearchSec from "@/app/components/templates/dashboard/logs-search/LogsSearchSec";
import LogsStats from "@/app/components/templates/dashboard/logs-search/LogsStats";
import { Button } from "@headlessui/react";

export default function DashboardLogsPage() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className=" h-full  w-full">
          <LogsSearchSec />

          <section
            className="w-11/12 mx-auto lg:w-full h-fit py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl
     bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
          >
            <div className="text-xs w-fit font-bold mb-6 lg:mb-8 mx-auto text-fe-c-text-title lg:text-sm">
              <span>[33] more results for </span>
              <span className="ml-3 py-1.5 px-3 bg-[#36F8FF1F] rounded-md">
                send.com
              </span>
            </div>

            <div className="rounded-md lg:rounded-lg text-xs font-semibold text-black bg-gold-grad w-fit mx-auto px-4 py-3 lg:px-12">
              The password will be displayed after downloading !
            </div>

            <p className="text-xs lg:text-sm text-center font-bold my-4 lg:my-5">
              You are currently using a free account. To download the full
              results, please recharge your account.
            </p>

            <Button
              className="bg-orange-grad-btn btn-hover font-bold shadow-md
             mx-auto block text-xs text-white rounded-lg px-5 lg:px-4 py-2 lg:py-2.5 lg:text-sm"
            >
              Go Upgrade
            </Button>
          </section>
          <LogsStats />
        </main>
      </div>
    </div>
  );
}
