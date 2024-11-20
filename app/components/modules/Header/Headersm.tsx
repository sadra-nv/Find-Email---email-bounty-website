"use client";
import React, { useState } from "react";
import MiniMenu from "./MiniMenu";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import logoText from "@/public/images/logo-text.png";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import burger from "@/public/icons/burger-icon.png";

import Image from "next/image";

const Headersm = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const closeMenuHandler = () => setIsShowMenu((prevState) => !prevState);

  const path = usePathname();
  useEffect(() => {
    setIsShowMenu(false);
  }, [path]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <Link href={"/"} className="flex items-center gap-2.5">
            <Image
              className="animate-logo-spin"
              alt="find email logo"
              src={logo}
              placeholder="blur"
              width={32}
              height={32}
            />
            <Image
              alt="find email logo text"
              src={logoText}
              placeholder="blur"
              height={26}
              width={89}
            />
          </Link>
          <button onClick={closeMenuHandler} className="cursor-pointer">
            <Image
              width={27}
              height={27}
              alt="burger menu button"
              placeholder="blur"
              src={burger}
            />
          </button>
        </div>
      </div>
      <MiniMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
    </header>
  );
};

export default Headersm;
