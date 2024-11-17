import pic from "@/public/icons/bluestar.png";
import Image from "next/image";

export default function NotifItem() {
  return (
    <li
      className="w-full h-fit border-t  pt-4 mt-4
      first:pt-4 first:mt-4 first:border-none
      border-neutral-500/20 dark:border-neutral-300/20"
    >
      <h3 className="px-5 rounded-lg py-2 w-fit mb-5 bg-highlight-dark">
        From Support Find Email
      </h3>
      <div>
        <div className="flex items-center gap-1 mb-1 sm:mb-4">
          <Image
            className="min-w-5"
            src={pic}
            width={30}
            height={30}
            alt="icon"
          />
          <h4 className="text-sm sm:text-base font-semibold text-fe-c-text-title">
            In Mail messages in LinkedIn Automation
          </h4>
        </div>
        <p className="text-justify font-semibold text-xs sm:text-sm text-fe-c-text-title leading-7">
          We’ve made it even easier to track and compare your email and LinkedIn
          outreach in one place! The new General tab brings together key stats
          from both channels so you can quickly see which one is driving better
          results for you.
        </p>
      </div>
    </li>
  );
}
