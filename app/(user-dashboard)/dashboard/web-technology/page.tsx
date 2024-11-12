import Header from "@/app/components/templates/dashboard/Header/Header";
import WebSearchSec from "@/app/components/templates/dashboard/web-tech/WebSearchSec";
import WebStats from "@/app/components/templates/dashboard/web-tech/WebStats";

export default function WebTechPage() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className=" h-full  w-full">
          <WebSearchSec />
          <WebStats />
        </main>
      </div>
    </div>
  );
}
