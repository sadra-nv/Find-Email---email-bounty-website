import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function SiteOverview({
  children,
  className,
  blog,
}: {
  children?: ReactNode;
  className?: string;
  blog?: boolean;
}) {
  return (
    <section className={cn("overflow-hidden pb-6 ", className)}>
      {children}
      <div
        className={cn("flex justify-center mb-6 ", {
          "-translate-y-2 sm:-translate-y-10": blog,
        })}
      >
        <a
          href=""
          className="text-sm md:text-lg rounded-lg bg-gradient-to-t from-[#07255B]
           to-[#061742] py-1.5 sm:py-2 px-4 sm:px-5"
        >
          Lorem Ipsum
        </a>
      </div>
      <div className="container">
        <div className="flex flex-col pb-10">
          <div className="flex justify-center relative items-center">
            <img
              src="/vectors/Background 1.png"
              className="absolute h-full object-cover"
              alt=""
            />
            <div className="block absolute inset-0 mx-auto h-auto sm:h-full aspect-square pointer-events-none research-radar-scanner-wrapper-visible m-auto animate-normal">
              <div className="absolute h-full w-full -rotate-[201deg] research-radar-scanner">
                <div className="h-full w-full rounded-full before:content-[''] before:absolute before:w-full before:h-full before:bg-[linear-gradient(267deg,rgba(99,102,241,.4)13.23%,rgba(3,0,20,0)50%)] before:rounded-full before:block"></div>
              </div>
            </div>
            <img
              src="/icons/Group 238477.svg"
              className="absolute h-20 sm:h-24 animate-pulse"
              alt=""
            />
            <video
              className="hidden lg:block absolute -right-1/2 xl:-right-1/3 h-4/5 mix-blend-lighten opacity-50"
              autoPlay
              muted
              loop
            >
              <source src="/videos/q-ba39153a.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <video
              className="hidden lg:block absolute -left-1/2 xl:-left-1/3 h-4/5 mix-blend-lighten opacity-50"
              autoPlay
              muted
              loop
            >
              <source src="/videos/q-ba39153a.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="grid grid-cols-2 w-full items-center justify-center sm:px-32">
              <div className="flex flex-col justify-center items-center py-12">
                <img
                  src="/vectors/11281907 1.svg"
                  alt=""
                  className="w-10 sm:w-auto"
                />
                <span className="text-sm md:text-xl mt-2">2,028,741,188</span>
                <span className="text-xs md:text-sm mt-1 sm:mt-2">
                  Logs [ url:login:pass ] Record
                </span>
              </div>
              <div className="flex flex-col justify-center items-center py-12">
                <img
                  src="/vectors/m003t0635_i_business_growth_06oct_22 1.svg"
                  alt=""
                  className="w-10 sm:w-auto"
                />
                <span className="text-sm md:text-xl mt-2">76,523</span>
                <span className="text-xs md:text-sm mt-1 sm:mt-2">
                  Total Search Record
                </span>
              </div>
              <div className="flex flex-col justify-center items-center py-12">
                <img
                  src="/vectors/Email 2.svg"
                  alt=""
                  className="w-10 sm:w-auto"
                />
                <span className="text-sm md:text-xl mt-2">496,580,230</span>
                <span className="text-xs md:text-sm mt-1 sm:mt-2">
                  Company Email Record
                </span>
              </div>
              <div className="flex flex-col justify-center items-center py-12">
                <img
                  src="/vectors/data_management_10 1.svg"
                  alt=""
                  className="w-10 sm:w-auto"
                />
                <span className="text-sm md:text-xl mt-2">6,117,822,935</span>
                <span className="text-xs md:text-sm mt-1 sm:mt-2">
                  Leak database Record
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
