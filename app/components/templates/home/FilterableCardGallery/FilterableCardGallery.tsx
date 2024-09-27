import Link from "next/link";
import React from "react";

export default function FilterableCardGallery() {
  return (
    <div className="">
      <div className="container">
        <div className="grid xl:grid-cols-7 gap-24">
          <div className="xl:col-span-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="">
              <div className="relative flex justify-center items-center">
                <img
                  className="mix-blend-lighten "
                  src="/images/ii.png"
                  alt=""
                />
                <img
                  className="absolute top-14 w-32 sm:w-auto sm:top-16"
                  src="/images/bitcoincore.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 md:ml-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238267.svg" alt="" />
                    <span className="text-xs">New</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238266.svg" alt="" />
                    <span className="text-xs">September 13, 2024</span>
                  </div>
                </div>
                <h2 className="text-sm">
                  What is Data Leakage and How to Prevent It? What is Data
                  Leakage
                </h2>
                <button className="w-fit">
                  <Link
                    href={"/"}
                    className="flex items-center gap-1 py-4 px-5 rounded-lg text-xs text-white bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
                  >
                    Login/Register
                    <img src="/icons/13 1.svg" alt="" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="justify-center items-center hidden xl:flex">
                <img src="/images/home/mon.png" alt="" />
            </div>
            <div className="">
              <div className="relative flex justify-center items-center">
                <img
                  className="mix-blend-lighten"
                  src="/images/ii.png"
                  alt=""
                />
                <img
                  className="absolute top-14 w-32 sm:w-auto sm:top-16"
                  src="/images/bitcoincore.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 md:ml-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238267.svg" alt="" />
                    <span className="text-xs">New</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238266.svg" alt="" />
                    <span className="text-xs">September 13, 2024</span>
                  </div>
                </div>
                <h2 className="text-sm">
                  What is Data Leakage and How to Prevent It? What is Data
                  Leakage
                </h2>
                <button className="w-fit">
                  <Link
                    href={"/"}
                    className="flex items-center gap-1 py-4 px-5 rounded-lg text-xs text-white bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
                  >
                    Login/Register
                    <img src="/icons/13 1.svg" alt="" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="">
              <div className="relative flex justify-center items-center">
                <img
                  className="mix-blend-lighten"
                  src="/images/ii.png"
                  alt=""
                />
                <img
                  className="absolute top-14 w-32 sm:w-auto sm:top-16"
                  src="/images/bitcoincore.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 md:ml-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238267.svg" alt="" />
                    <span className="text-xs">New</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238266.svg" alt="" />
                    <span className="text-xs">September 13, 2024</span>
                  </div>
                </div>
                <h2 className="text-sm">
                  What is Data Leakage and How to Prevent It? What is Data
                  Leakage
                </h2>
                <button className="w-fit">
                  <Link
                    href={"/"}
                    className="flex items-center gap-1 py-4 px-5 rounded-lg text-xs text-white bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
                  >
                    Login/Register
                    <img src="/icons/13 1.svg" alt="" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="justify-center items-center hidden xl:flex">
                <img src="/images/home/mon.png" alt="" />
            </div>
            <div className="">
              <div className="relative flex justify-center items-center">
                <img
                  className="mix-blend-lighten"
                  src="/images/ii.png"
                  alt=""
                />
                <img
                  className="absolute top-14 w-32 sm:w-auto sm:top-16"
                  src="/images/bitcoincore.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 md:ml-10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238267.svg" alt="" />
                    <span className="text-xs">New</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="/icons/Group 238266.svg" alt="" />
                    <span className="text-xs">September 13, 2024</span>
                  </div>
                </div>
                <h2 className="text-sm">
                  What is Data Leakage and How to Prevent It? What is Data
                  Leakage
                </h2>
                <button className="w-fit">
                  <Link
                    href={"/"}
                    className="flex items-center gap-1 py-4 px-5 rounded-lg text-xs text-white bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
                  >
                    Login/Register
                    <img src="/icons/13 1.svg" alt="" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
              <div className="text-sm py-4 bg-gradient-to-t from-[#07255B] to-[#061742] text-center">
                Categories
              </div>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
                  >
                    <span className="text-xs">url : login : pass</span>
                    <span className="text-[10px]">(3)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
                  >
                    <span className="text-xs">url : login : pass</span>
                    <span className="text-[10px]">(3)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
              <div className="text-sm py-4 bg-gradient-to-t from-[#07255B] to-[#061742] text-center">
                Post
              </div>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <Link
                    href={"/"}
                    className="flex gap-3 items-center p-4 bg-[#131332] rounded-lg"
                  >
                    <img src="/images/546 4.png" alt="" />
                    <div className="flex flex-col text-xs gap-1">
                      <p>FindEmail.io:</p>
                      <span>Secret Weapon for</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-lg overflow-hidden bg-[#0B0B25]">
              <div className="text-sm py-4 bg-gradient-to-t from-[#07255B] to-[#061742] text-center">
                Tags
              </div>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
                  >
                    <span className="text-xs">url : login : pass</span>
                    <span className="text-[10px]">(3)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-between items-center p-4 bg-[#131332] rounded-lg"
                  >
                    <span className="text-xs">url : login : pass</span>
                    <span className="text-[10px]">(3)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
