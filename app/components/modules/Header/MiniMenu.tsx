import Link from "next/link";
import React from "react";
type MiniMenuProps = {
  isShowMenu: boolean;
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const MiniMenu: React.FC<MiniMenuProps> = ({ isShowMenu, setIsShowMenu }) => {
  console.log(isShowMenu);
  return (
    <>
      <div
        className={`z-50 duration-500 ${
          !isShowMenu ? "translate-x-full" : "translate-x-0"
        } fixed top-0 w-[calc(100dvw-25%)] right-0 h-dvh bg-gradient-to-b from-[#400C27] to-[#030015] flex flex-col py-16`}
      >
        <nav>
          <ul className="flex flex-col gap-6  text-sm px-6 py-5">
            <span className="cursor-pointer w-fit" onClick={() => setIsShowMenu((e) => !e)}>
              <img src="/icons/cancel.svg" alt="" />
            </span>
            
            <li className="mt-10">
              <Link href={"/"} className="flex items-center gap-1">
                <img src="/icons/Group.svg" alt="" />
                Home
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="flex items-center gap-1">
                <img src="/icons/8 1.svg" alt="" />
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                <img src="/icons/Group 238340.svg" alt="" />
                Pricing
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                <img src="/icons/9079356 1.svg" alt="" />
                Online Tools
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                <img src="/icons/11 1.svg" alt="" />
                FAQ
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center gap-1">
                <img src="/icons/Customer Support 1.svg" alt="" />
                Contact us
              </Link>
            </li>
            <button className="w-fit h-fit">
              <Link
                href={"/"}
                className="flex items-center gap-1 px-5 py-3 rounded-lg text-xs text-white hover-btn"
              >
                Login/Register
                <img src="/icons/13 1.svg" alt="" />
              </Link>
            </button>
          </ul>
        </nav>
      </div>
      <div
        onClick={() => setIsShowMenu((e) => !e)}
        className={`z-40 opacity-70 duration-500 blur-sm ${
          !isShowMenu ? "translate-x-full" : "translate-x-0"
        } fixed top-0 w-dvw right-0 h-dvh bg-gradient-to-b from-[#06265c] to-[#030015] flex flex-col py-16`}
      ></div>
    </>
  );
};

export default MiniMenu;
