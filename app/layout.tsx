import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// const merriweather = localFont({
//   src: "../public/fonts/merriweather-regular.woff2",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Find Email",
  description: "Precision in communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${merriweather.className} max-w-[120rem] mx-auto relative bg-[#030014] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
