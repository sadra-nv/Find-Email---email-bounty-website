import Link from "next/link";
import NotifItem from "./NotifItem";

export default function NotifTab() {
  return (
    <ul>
      <div
        className="pt-5 mt-4 pb-4 bg-[#F0F0F0] dark:bg-fe-c-bg-light dark:backdrop-blur-2xl
      w-[calc(100%_+_1.25rem)] -translate-x-2.5 sm:w-[calc(100%_+_4rem)] sm:-translate-x-8"
      >
        <div className="translate-x-2.5 sm:translate-x-8 mr-5 sm:mr-16">
          <h3 className="mb-5 text-xs sm:text-sm font-semibold text-fe-c-text-title">
            For more security of your account, use the two-step option
          </h3>
          <Link
            href="/dashboard/security"
            className="flex gap-2 px-4 rounded-lg bg-fe-c-bg-light
          dark:backdrop-blur-3xl py-3 w-full xs:max-w-[21.875rem]
          items-center justify-start text-xs sm:text-sm font-semibold shadow-md"
          >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path
                d="M7.99994 17.8157C7.80118 17.8157 7.60251 17.7909 7.41203 17.7329C3.11388 16.5486 0 12.532 0 8.17592V4.54034C0 3.61281 0.670814 2.61078 1.53209 2.25468L6.14492 0.366458C7.34578 -0.122153 8.66247 -0.122153 9.85501 0.366458L14.4678 2.25468C15.3291 2.61078 16 3.61281 16 4.54034V8.17592C16 12.5237 12.8778 16.5404 8.58793 17.7329C8.39746 17.7909 8.1987 17.8157 7.99994 17.8157ZM7.99994 1.25259C7.52789 1.25259 7.06413 1.3437 6.61692 1.52589L2.00415 3.41406C1.60664 3.57969 1.24223 4.11799 1.24223 4.54863V8.18428C1.24223 11.9855 3.97515 15.4969 7.74321 16.5404C7.90884 16.59 8.09104 16.59 8.25667 16.5404C12.0248 15.4969 14.7578 11.9855 14.7578 8.18428V4.54863C14.7578 4.11799 14.3933 3.57969 13.9958 3.41406L9.38304 1.52589C8.93584 1.3437 8.47199 1.25259 7.99994 1.25259Z"
                className="fill-fe-c-text-title"
              />
              <path
                d="M7.99788 9.94822C6.73909 9.94822 5.72046 8.92959 5.72046 7.6708C5.72046 6.412 6.73909 5.39337 7.99788 5.39337C9.25668 5.39337 10.2753 6.412 10.2753 7.6708C10.2753 8.92959 9.25668 9.94822 7.99788 9.94822ZM7.99788 6.6356C7.42646 6.6356 6.96269 7.09937 6.96269 7.6708C6.96269 8.24222 7.42646 8.70599 7.99788 8.70599C8.56931 8.70599 9.03308 8.24222 9.03308 7.6708C9.03308 7.09937 8.56931 6.6356 7.99788 6.6356Z"
                className="fill-fe-c-text-title"
              />
              <path
                d="M7.99807 12.4327C7.65853 12.4327 7.37695 12.1511 7.37695 11.8115V9.32708C7.37695 8.98754 7.65853 8.70596 7.99807 8.70596C8.33761 8.70596 8.61919 8.98754 8.61919 9.32708V11.8115C8.61919 12.1511 8.33761 12.4327 7.99807 12.4327Z"
                className="fill-fe-c-text-title"
              />
            </svg>

            <span className="w-fit">Two-factor authentication</span>
          </Link>
        </div>
      </div>
      <NotifItem />
      <NotifItem />
    </ul>
  );
}
