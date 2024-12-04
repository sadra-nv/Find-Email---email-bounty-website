import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Nav from "../components/templates/dashboard/Nav/Nav";
import StarsSection from "../components/templates/UI/StarsSection/StarsSection";

export default function UserDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        enableSystem={false}
        attribute="class"
        // disableTransitionOnChange
      >
        <div className="bg-fe-c-bg-main">
          <div className="dark:hero-grad before:z-10 mx-auto max-w-[120rem]">
            <div
              className="w-full  relative overflow-x-hidden text-fe-c-text-normal min-h-screen  
        h-full bg-white dark:bg-fe-c-bg-main sm:bg-fe-c-bg-main "
            >
              <Nav />
              <StarsSection
                isStatic
                className="z-0 pointer-events-none dark:block hidden h-[31.25rem] sm:max-h-[calc(100vh_+_3rem)] sm:h-full"
              />
              <div className="w-full  relative h-full min-h-screen z-20">
                {children}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
