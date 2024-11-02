import Header from "@/app/components/templates/dashboard/Header/Header";
import SearchSec from "@/app/components/templates/dashboard/profile/PaymentSec/SearchSec";
import ProfileSidebar from "@/app/components/templates/dashboard/profile/Sidebar/ProfileSidebar";

export default function DashboardProfilePage() {
  return (
    <div
      className="sm:ms-[17.3125rem] sm:w-[calc(100%_-_17.3125rem)]
           lg:ms-52 lg:w-[calc(100%_-_13rem)]"
    >
      <ProfileSidebar />
      <div className="w-full h-full lg:ms-[17.3125rem] lg:w-[calc(100%_-_17.3125rem)] lg:pl-5 lg:pr-8">
        <Header className="" />
        <main className=" h-full  w-full">
          <SearchSec />
        </main>
      </div>
    </div>
  );
}
