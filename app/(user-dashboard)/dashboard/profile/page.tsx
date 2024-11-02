import Header from "@/app/components/templates/dashboard/Header/Header";
import SearchSec from "@/app/components/templates/dashboard/profile/SearchList/SearchSec";
import ProfileSidebar from "@/app/components/templates/dashboard/profile/Sidebar/ProfileSidebar";

export default function DashboardProfilePage() {
  return (
    <>
      <ProfileSidebar />
      <div className="w-full h-full lg:ms-[17.3125rem] lg:w-[calc(100%_-_17.3125rem)] lg:pl-5 lg:pr-8">
        <Header className="" />
        <main className=" h-full  w-full">
          <SearchSec />
        </main>
      </div>
    </>
  );
}
