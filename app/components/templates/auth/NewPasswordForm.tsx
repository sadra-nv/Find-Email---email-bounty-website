import MainInput from "../UI/Inputs/MainInput";
import Link from "next/link";

export default function NewPasswordForm() {
  return (
    <div className="relative z-10 w-full h-full min-h-screen flex justify-center items-center pt-36 lg:pt-56">
      <div className="relative mb-24">
        <video
          className="mix-blend-lighten  absolute  -z-10
      -top-[6.6875rem] left-1/2 -translate-x-1/2 w-[28.75rem] h-[13.4375rem] overflow-hidden"
          autoPlay
          muted
          loop
        >
          <source src="/videos/q-c3d7becf.webm" type="video/webm" />
          Your browser does not support the video playback.
        </video>
        <div className="bg-[#0A081E80] p-6 sm:py-8 sm:px-10 w-full max-w-sm backdrop-blur rounded-xl  sm:rounded-2xl">
          <form>
            <MainInput
              type="password"
              label="New Password"
              placeholder="Enter New Password"
              className="w-full"
            />
            <MainInput
              type="password"
              label="Repeat New Password"
              placeholder="Repeat New Password  "
              className="w-full mt-8"
            />

            <Link
              href="/auth/new-password"
              className="w-full  rounded-lg bg-orange-grad-btn font-bold text-xs sm:text-sm
            justify-center px-3  py-3 sm:py-5 my-9 flex gap-2 items-center group btn-hover"
            >
              <span>Set New Password</span>
              <svg
                width="16"
                height="16"
                className="fill-neutral-50   tran-fast group-hover:translate-x-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                ></path>
              </svg>
            </Link>

            <Link
              href="/auth"
              className="btn-hover block mx-auto w-fit py-3 px-5 rounded-lg font-bold text-xs sm:text-sm bg-blue-grad"
            >
              Back to login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
