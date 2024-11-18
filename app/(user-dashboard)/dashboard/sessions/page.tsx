import Header from "@/app/components/templates/dashboard/Header/Header";
import SessionsSec from "@/app/components/templates/dashboard/sessions/SessionsSec";

export default function DashboardSessionsPage() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className=" h-full  w-full">
          <SessionsSec />
        </main>
      </div>
    </div>
  );
}
