import Link from "next/link";
import React from "react";
import Pagination from "../Pagination/Pagination";
import FilterableCard from "./FiltrableCard";

export default function FilterableCardGallery() {
  return (
    <div className="">
      <div className="container">
        <div className="grid xl:grid-cols-7 gap-24">
          <div className="xl:col-span-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <FilterableCard />
            <div className="justify-center items-center hidden xl:flex">
              <img src="/images/home/mon.png" alt="" />
            </div>
            <FilterableCard />
            <FilterableCard />
            <div className="justify-center items-center hidden xl:flex">
              <img src="/images/home/mon.png" alt="" />
            </div>
            <FilterableCard />
            <div className="hidden xl:flex justify-center col-span-3 mt-14">
              <Pagination></Pagination>
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
