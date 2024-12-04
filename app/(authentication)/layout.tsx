import React, { ReactNode } from "react";
import Header from "../components/modules/Header/Header";
import Headersm from "../components/modules/Header/Headersm";
import CodeVideo from "@/app/components/templates/UI/CodeVideo/CodeVideo";
import StarsSection from "@/app/components/templates/UI/StarsSection/StarsSection";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        className="hero-grad before:h-[45%]
     md:before:h-[50%] before:z-20 mx-auto max-w-[120rem]"
      >
        <div className="hidden lg:flex">
          <Header />
        </div>
        <div className="flex lg:hidden">
          <Headersm />
        </div>
        <main className=" relative w-full h-full min-h-screen max-h-[68.75rem]">
          <StarsSection isStatic className="z-0 max-h-[31.25rem] " />

          {children}

          <div className="absolute left-0 top-0 w-full h-full">
            <div className="relative w-full h-full overflow-hidden min-h-screen -z-10 max-h-[56.25rem]">
              <CodeVideo className="-left-[27.75rem] top-[12.5rem] w-[43.75rem] h-[29.0625rem]   scale-150 opacity-20 mix-blend-lighten" />
              <CodeVideo className="-right-[27.75rem] top-[12.5rem]   scale-150  w-[43.75rem] h-[29.0625rem] opacity-20 mix-blend-lighten" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
