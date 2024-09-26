import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#8F5CE1] to-[#2E2291]">
        <div className="bg-[url('/images/bgfooter.svg')] p-8 md:container flex flex-col-reverse md:flex-row gap-10 md:justify-between">
          <div className="b l flex justify-between md:flex-row-reverse w-full">
            <ul className="flex flex-col gap-5  text-xs font-normal">
              <li className="text-base font-bold">site</li>
              <li className="opacity-75">Pricing</li>
              <li className="opacity-75">Blog</li>
              <li className="opacity-75">Support</li>
            </ul>
            <ul className="flex flex-col gap-5  text-xs font-normal">
              <li className="text-base font-bold">Pages</li>
              <li className="opacity-75">Pricing</li>
              <li className="opacity-75">Forum</li>
              <li className="opacity-75">Contact</li>
              <li className="opacity-75">Help Center</li>
            </ul>
            <div className="flex items-center">
              <ul className="flex flex-col items-center justify-center  gap-5 md:gap-3  text-xs font-normal md:grid md:grid-cols-2 h-fit">
                <li className="">
                  <img src="/icons/Twitter1.svg" alt="" />
                </li>
                <li className="">
                  <img src="/icons/Instagram1.svg" alt="" />
                </li>
                <li className="">
                  <img src="/icons/Facebook2.svg" alt="" />
                </li>
                <li className="">
                  <img src="/icons/LinkedIn.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>

          <div className="t r flex flex-col gap-5">
            <h2 className="font-bold">Find email addresses in seconds</h2>
            <p className="text-xs opacity-75">Subscribe to newsletter</p>
            <div className="flex w-[248px] h-10 rounded-md overflow-hidden">
              <input
                placeholder="Your email"
                className="w-full h-full px-3 text-black placeholder:text-sm"
                type="text"
                name=""
                id=""
              />
              <button className="w-20 bg-gradient-to-b from-[#8F5CE1] to-[#2E2291]">
                <i className="bi bi-arrow-right text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs py-5">
        <p>©2024 Find Email All rights reserved.</p>
      </div>
    </>
  );
}
