import AccountInfo from "./AccountInfo";
import ProfPic from "@/app/components/templates/dashboard/profile/Sidebar/ProfPic";

export default function ProfileSidebar() {
  return (
    <aside
      className="sm:w-[17.3125rem] w-11/12 max-w-80 mx-auto lg:ms-52 sm:pt-0 pt-40 p-5 no-bar
     bg-white dark:bg-transparent sm:shadow-sm  sm:fixed left-0 top-0 h-full min-h-screen overflow-y-auto"
    >
      <ProfPic />
      <AccountInfo />
    </aside>
  );
}
