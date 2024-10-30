import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/templates/dashboard/Header/Header";

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
        <div className="w-full text-fe-c-text-normal min-h-screen h-full bg-fe-c-bg-main">
          <Header />
          <div>{children}</div>
        </div>
      </ThemeProvider>

      {/* <UDNavWrapper />
      <div className="no-bar w-3/4 min-h-screen ms-[25%] tablet-small:w-full tablet-small:ms-0 overflow-auto">
        {children}
      </div> */}
    </>
  );
}
