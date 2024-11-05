import PasswordInput from "@/app/components/templates/dashboard/security/PasswordInput";
import { Checkbox } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-dvw h-dvh flex justify-center items-center text-xs xl:text-sm">
        <div className="w-[300px] h-[576px] lg:w-[382px] lg:h-[596px] bg-[#0a081e] bg-opacity-60 p-6 rounded-xl lg:rounded-[20px] border border-white/5">
          <div className="flex justify-between items-center p-2  w-[250px] h-[50px] bg-gradient-to-r from-[#C24B76]/15 to-[#FD8330]/15 rounded-[10px] ">
            <button className="w-[110px] h-[35px] rounded-md">Sign</button>
            <button className="hover-btn w-[110px] h-[35px] rounded-md">
              Login
            </button>
          </div>
          <form className="mt-7 flex flex-col gap-10">
            <div>
              <label className="font-bold" htmlFor="userName">
                Email Or Username
              </label>
              <input
                placeholder="Enter Your Email Or Username"
                className="outline-none px-3 mt-4 w-full h-11 rounded bg-white/[8%]"
                type="text"
                name=""
                id=""
              />
            </div>
            <PasswordInput className="" title="Password"></PasswordInput>
            <div className="flex justify-between items-center">
              <div>
                <Checkbox
                  className="group inline-block min-w-4 size-4 rounded-md 
          mr-2 translate-y-1
           p-1 bg-neutral-600/30 data-[checked]:bg-orange-grad-btn"
                >
                  <svg
                    width="16"
                    height="16"
                    className="fill-white -translate-x-1 -translate-y-1 scale-75 hidden group-data-[checked]:block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                </Checkbox>
                <label className="text-[10px]" htmlFor="">
                  Remember Me
                </label>
              </div>
              <Link className="text-[10px] opacity-60" href={'/'}>Forget password?</Link>
            </div>
            <button className="hover-btn h-11 rounded-lg">Login to account</button>
          </form>
          <div className="flex items-center gap-4 mt-7">
            <span className="w-full bg-gradient-to-l from-white to-[#0E0A24] h-px"></span>
            <span>Or</span>
            <span className="w-full bg-gradient-to-r from-white to-[#0E0A24] h-px"></span>
          </div>
          <div className="flex justify-between items-center mt-7">
            <Link className="flex items-center justify-center rounded-lg font-bold gap-2 bg-white w-[120px] h-[40px]" href={'/'}>
              <img src="/icons/google-icon-login.svg" alt="" />
              <span className="text-black">Google</span>
            </Link>
            <Link className="flex items-center justify-center rounded-lg font-bold gap-2 bg-white w-[120px] h-[40px]" href={'/'}>
              <img src="/icons/github-icon-login.svg" alt="" />
              <span className="text-black">Github</span>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
