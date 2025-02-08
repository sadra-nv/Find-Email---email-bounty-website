import Header from "../components/modules/Header/Header";
import Footer from "../components/modules/Footer/Footer";
import Headersm from "../components/modules/Header/Headersm";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hero-grad before:z-10 mx-auto max-w-[120rem]  ">
        <div className="hidden lg:flex">
          <Header></Header>
        </div>
        <div className="flex lg:hidden">
          <Headersm></Headersm>
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
}
