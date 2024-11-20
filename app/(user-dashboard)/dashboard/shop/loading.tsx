import LoadingSec from "@/app/components/templates/UI/Loading/LoadingSec";

export default function DashboardProfileLoading() {
  return (
    <div className="w-full lg:ms-52 lg:w-[calc(100%_-_13rem)]">
      <div className="w-full lg:w-[80.5%] mx-auto h-full  ">
        <main className=" h-full  w-full">
          <LoadingSec className="py-0" />
        </main>
      </div>
    </div>
  );
}
