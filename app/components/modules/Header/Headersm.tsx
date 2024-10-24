"use client";
import React, { useState } from "react";
import MiniMenu from "./MiniMenu";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import logoText from "@/public/images/logo-text.png";
import burger from "@/public/icons/header-open.png";

import Image from "next/image";

const Headersm = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
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
          <button
            onClick={() => setIsShowMenu((e) => !e)}
            className="cursor-pointer"
          >
            <Image alt="burger menu button" placeholder="blur" src={burger} />
          </button>
        </div>
      </div>
      <MiniMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
    </header>
  );
};

export default Headersm;
