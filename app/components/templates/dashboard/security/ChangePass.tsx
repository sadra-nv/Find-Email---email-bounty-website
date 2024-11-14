import { Button } from "@headlessui/react";

export default function ChangePass() {
  return (
    <>
      <h2
        className="text-fe-c-text-title mb-2 sm:mb-3 font-semibold text-sm sm:text-base
      sm:mt-9 mt-6"
      >
        Password
      </h2>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-6
      pb-6 border-b border-neutral-600/30 dark:border-neutral-200/30 sm:pb-9"
      >
        <Button
          className="w-full p-4 py-3 rounded-lg btn-hover h-11
        text-fe-c-text-title text-xs sm:text-sm shadow-sm font-semibold sm:w-[21.875rem]
        flex gap-2 bg-neutral-400/30 dark:bg-white/15"
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M13.2474 7.51163C12.9232 7.51163 12.6544 7.24279 12.6544 6.9186V5.33721C12.6544 2.84651 11.9507 1.18605 8.50322 1.18605C5.05578 1.18605 4.35206 2.84651 4.35206 5.33721V6.9186C4.35206 7.24279 4.08322 7.51163 3.75904 7.51163C3.43485 7.51163 3.16602 7.24279 3.16602 6.9186V5.33721C3.16602 3.04419 3.7195 0 8.50322 0C13.2869 0 13.8404 3.04419 13.8404 5.33721V6.9186C13.8404 7.24279 13.5716 7.51163 13.2474 7.51163Z"
              className="fill-fe-c-text-title"
            />
            <path
              d="M8.4975 14.2326C7.08215 14.2326 5.92773 13.0782 5.92773 11.6628C5.92773 10.2475 7.08215 9.09308 8.4975 9.09308C9.91285 9.09308 11.0673 10.2475 11.0673 11.6628C11.0673 13.0782 9.91285 14.2326 8.4975 14.2326ZM8.4975 10.2791C7.73843 10.2791 7.11378 10.9038 7.11378 11.6628C7.11378 12.4219 7.73843 13.0466 8.4975 13.0466C9.25657 13.0466 9.88122 12.4219 9.88122 11.6628C9.88122 10.9038 9.25657 10.2791 8.4975 10.2791Z"
              className="fill-fe-c-text-title"
            />
            <path
              d="M12.4535 16.9999H4.54651C1.05954 16.9999 0 15.9404 0 12.4534V10.872C0 7.38507 1.05954 6.32553 4.54651 6.32553H12.4535C15.9405 6.32553 17 7.38507 17 10.872V12.4534C17 15.9404 15.9405 16.9999 12.4535 16.9999ZM4.54651 7.51158C1.71581 7.51158 1.18605 8.04925 1.18605 10.872V12.4534C1.18605 15.2762 1.71581 15.8139 4.54651 15.8139H12.4535C15.2842 15.8139 15.814 15.2762 15.814 12.4534V10.872C15.814 8.04925 15.2842 7.51158 12.4535 7.51158H4.54651Z"
              className="fill-fe-c-text-title"
            />
          </svg>

          <span>Change password</span>
        </Button>
      </div>
    </>
  );
}
