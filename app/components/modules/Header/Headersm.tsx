"use client";
import Link from "next/link";
import React, { useState } from "react";
import MiniMenu from "./MiniMenu";

const Headersm = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <Link href={"/"} className="flex items-center gap-2.5">
            <img className="" src="/images/logo.svg" alt="" />
            <h4 className="text-xl text-white font-bold">FindEmail</h4>
          </Link>
          <button
            onClick={() => setIsShowMenu((e) => !e)}
            className="cursor-pointer"
          >
            <img src="/icons/hamber.svg" alt="" />
          </button>
        </div>
      </div>
        <MiniMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu}></MiniMenu>
    </header>
  );
};

export default Headersm;
