// import Link from "next/link";
import Image from "next/image";
import React from "react";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#8F5CE1] to-[#2E2291] ">
        <div className="bg-[url('/images/bgfooter.svg')]">
          <div className="container">
            <div className=" p-8  flex flex-col-reverse md:flex-row gap-10 sm:gap-20 lg:gap-40 md:justify-between">
              <div className="b l flex justify-between md:flex-row-reverse w-full">
                <ul className="flex flex-col gap-5  text-xs font-normal md:text-base">
                  <li className="text-base md:text-[22px] font-bold">site</li>
                  <li className="opacity-75">Pricing</li>
                  <li className="opacity-75">Blog</li>
                  <li className="opacity-75">Support</li>
                </ul>
                <ul className="flex flex-col gap-5  text-xs font-normal md:text-base">
                  <li className="text-base md:text-[22px] font-bold">Pages</li>
                  <li className="opacity-75">Pricing</li>
                  <li className="opacity-75">Forum</li>
                  <li className="opacity-75">Contact</li>
                  <li className="opacity-75">Help Center</li>
                </ul>
                <div className="flex items-center">
                  <ul className="flex flex-col items-center justify-center  gap-5 md:gap-3  text-xs font-normal md:grid md:grid-cols-2 h-fit">
                    <li className="">
                      <Image
                        width={75}
                        height={75}
                        className="md:hidden size-8"
                        src="/icons/Twitter1.svg"
                        alt=""
                      />
                      <Image
                        width={75}
                        height={75}
                        className="hidden md:block"
                        src="/icons/Twitter1md.svg"
                        alt=""
                      />
                    </li>
                    <li className="">
                      <Image
                        width={75}
                        height={75}
                        className="md:hidden size-8"
                        src="/icons/Instagram1.svg"
                        alt=""
                      />
                      <Image
                        width={75}
                        height={75}
                        className="hidden md:block"
                        src="/icons/Instagrammd1.svg"
                        alt=""
                      />
                    </li>
                    <li className="">
                      <Image
                        width={75}
                        height={75}
                        className="md:hidden size-8"
                        src="/icons/Facebook2.svg"
                        alt=""
                      />
                      <Image
                        width={75}
                        height={75}
                        className="hidden md:block"
                        src="/icons/Facebookmd2.svg"
                        alt=""
                      />
                    </li>
                    <li className="">
                      <Image
                        width={75}
                        height={75}
                        className="md:hidden size-8"
                        src="/icons/LinkedIn.svg"
                        alt=""
                      />
                      <Image
                        width={75}
                        height={75}
                        className="hidden md:block"
                        src="/icons/LinkedInmd.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="t r flex flex-col gap-5">
                <h2 className="font-bold md:text-[22px]">
                  Find email addresses in seconds
                </h2>
                <p className="text-xs opacity-75 md:text-base">
                  Subscribe to newsletter
                </p>
                <FooterForm />
              </div>
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
