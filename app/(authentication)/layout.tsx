import React, { ReactNode } from "react";
import Header from "../components/modules/Header/Header";
import Headersm from "../components/modules/Header/Headersm";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden lg:flex">
        <Header />
      </div>
      <div className="flex lg:hidden">
        <Headersm />
      </div>
      <main
        className="hero-grad before:h-[45%]
     md:before:h-[50%] before:z-20 relative w-full h-full min-h-screen"
      >
        {children}
      </main>
    </>
  );
}
