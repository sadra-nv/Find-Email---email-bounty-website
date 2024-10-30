import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/templates/dashboard/Header/Header";
import Nav from "../components/templates/dashboard/Nav/Nav";

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
        disableTransitionOnChange
      >
        <div className="w-full overflow-x-hidden text-fe-c-text-normal min-h-screen h-full bg-fe-c-bg-main">
          <Nav />
          <div className="ms-[33%] min-h-screen">
            <Header />
            {children}
          </div>
        </div>
      </ThemeProvider>

      {/* <UDNavWrapper />
      <div className="no-bar w-3/4 min-h-screen ms-[25%] tablet-small:w-full tablet-small:ms-0 overflow-auto">
        {children}
      </div> */}
    </>
  );
}
