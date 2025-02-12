import { cookies } from "next/headers";
import AccountInfo from "./AccountInfo";
import ProfPic from "@/app/components/templates/dashboard/profile/Sidebar/ProfPic";

export default function ProfileSidebar() {
  const sessionCookie = cookies().get("USER_SESSION");
  if (!sessionCookie) return;

  const session = JSON.parse(sessionCookie?.value);
  return (
    <aside
      className="sm:w-[17.3125rem] w-11/12 max-w-80 mx-auto lg:ms-52 sm:pt-0 pt-40 p-5 no-bar
     bg-white dark:bg-transparent sm:shadow-sm  sm:fixed left-0 top-0 h-full min-h-screen overflow-y-auto"
    >
      <ProfPic session={session} />
      <AccountInfo session={session} />
    </aside>
  );
}
