"use client";

import logo from "@/public/images/logo.png";
import logoText from "@/public/images/logo-text.png";
import Image from "next/image";
import InfoDomain from "./InfoDomain";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/lib/store/dashboardMenuStore";
import { Button } from "@headlessui/react";
import { usePathname } from "next/navigation";
import DataBytes from "./DataBytes";
import { useEffect } from "react";
import Account from "./Account";

export default function Nav() {
  const path = usePathname();

  const { isOpen, closeMenu } = useMenuStore();
  const handleClose = () => {
    closeMenu();
  };

  useEffect(() => {
    closeMenu();
  }, [path, closeMenu]);

  return (
    <>
      <aside
        className={cn(
          "fixed no-bar overflow-y-scroll left-0 z-50 top-0 h-full min-h-screen  bg-fe-c-blue-main min-w-52  ",
          "-translate-x-full lg:-translate-x-0 tran-fast transition-transform duration-300",
          {
            "-translate-x-0": isOpen,
          }
        )}
      >
        <div className="flex flex-col justify-start items-center gap-4 mt-12">
          <Image
            width={59}
            height={59}
            alt="find email logo"
            src={logo}
            placeholder="blur"
          />
          <Image
            width={111}
            height={28}
            alt="find email precision in communication"
            src={logoText}
            placeholder="blur"
          />
        </div>

        <InfoDomain />
        <DataBytes />
        <Account />
      </aside>
      <div
        onClick={handleClose}
        className={cn(
          "absolute w-screen h-screen overflow-x-hidden z-40 -translate-x-full lg:hidden backdrop-blur-sm bg-neutral-600/45 opacity-0 transition-opacity tran-fast",
          {
            "opacity-100 -translate-x-0": isOpen,
          }
        )}
      >
        <Button
          onClick={handleClose}
          className={cn(
            "p-2 font-sans font-bold absolute -right-8 top-10 z-50 bg-white rounded-md tran-fast",
            {
              "right-8": isOpen,
            }
          )}
        >
          <svg
            className="fill-black"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </Button>
      </div>
    </>
  );
}
