import Header from "@/app/components/templates/dashboard/Header/Header";
import ProfileSidebar from "@/app/components/templates/dashboard/profile/Sidebar/ProfileSidebar";

export default function DashboardProfilePage() {
  return (
    <>
      {/* xl:w-[23%] lg:w-[30%] w-2/5 */}
      <ProfileSidebar />
      <div className="ms-[17.3125rem] w-[calc(100%_-_17.3125rem)] pl-5 pr-8">
        <Header className="" />
        <main className=" h-full w-full"></main>
      </div>
    </>
  );
}
