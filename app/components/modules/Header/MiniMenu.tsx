import Link from "next/link";
import React, { useState } from "react";
import home from "@/public/icons/home-icon.png";
import blog from "@/public/icons/blog-icon.png";
import price from "@/public/icons/price-icon.png";
import pc from "@/public/icons/pcicon.png";
import faq from "@/public/icons/faw-icon.png";
import support from "@/public/icons/customer-icon.png";
import Image from "next/image";
import close from "@/public/icons/close-icon.png";
import { Button } from "@headlessui/react";
import { cn } from "@/lib/utils";

type MiniMenuProps = {
  isShowMenu: boolean;
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const MiniMenu: React.FC<MiniMenuProps> = ({ isShowMenu, setIsShowMenu }) => {
  const [openTools, setOpenTools] = useState(false);

  const toolsClickHandler = () => {
    setOpenTools((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`z-50 duration-500 ${
          !isShowMenu ? "translate-x-full" : "translate-x-0"
        } fixed top-0 w-[calc(100dvw-25%)] right-0 h-dvh bg-background hero-grad before:h-2/3 flex flex-col py-16`}
      >
        <nav>
          <ul className="flex flex-col gap-6  text-sm px-6 py-5">
            <span
              onClick={() => setIsShowMenu(false)}
              className="cursor-pointer w-fit"
            >
              <Image alt="close menu icon" src={close} width={20} height={20} />
            </span>

            <li className="mt-10">
              <Link href={"/"} className="flex items-center gap-2">
                <Image alt="home icon" src={home} width={16} height={16} />
                Home
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="flex items-center gap-2">
                <Image alt="blog icon" src={blog} width={16} height={16} />
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/pricing"} className="flex items-center gap-2">
                <Image alt="price icon" src={price} width={16} height={16} />
                Pricing
              </Link>
            </li>
            <li className="relative group">
              <Button
                onClick={toolsClickHandler}
                className="flex items-center gap-2 "
              >
                <Image
                  alt="pc icon"
                  className="scale-150"
                  src={pc}
                  width={16}
                  height={16}
                />

                <span>Online Tools</span>
                <svg
                  className="size-2 "
                  width="6"
                  height="3"
                  viewBox="0 0 6 3"
                  fill="none"
                >
                  <path
                    d="M3.00001 3C2.86676 3 2.7335 2.95823 2.6283 2.86872L0.152542 0.7623C-0.0508472 0.589252 -0.0508472 0.302826 0.152542 0.129778C0.355931 -0.0432592 0.692574 -0.0432592 0.895963 0.129778L3.00001 1.91994L5.10404 0.129778C5.30743 -0.0432592 5.64407 -0.0432592 5.84746 0.129778C6.05085 0.302826 6.05085 0.589252 5.84746 0.7623L3.37172 2.86872C3.26652 2.95823 3.13327 3 3.00001 3Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <div
                className={cn(
                  "  duration-300 ",
                  "transition-opacity  w-28 h-0 opacity-0 overflow-hidden",
                  "tran-fast rounded-lg  ml-2 text-sm",
                  { "translate-y-0 opacity-100 h-fit": openTools }
                )}
              >
                <Link
                  href="/cracker"
                  className="p-1 py-2 pt-3 hover:bg-white/10 tran-fast block"
                >
                  Hash Cracker
                </Link>
                <Link
                  href="/checker"
                  className="p-1 py-2 pb-0 hover:bg-white/10 tran-fast block"
                >
                  Smtp Checker
                </Link>
              </div>
            </li>
            <li>
              <Link href={"/faq"} className="flex items-center gap-2">
                <Image alt="faq icon" src={faq} width={16} height={16} />
                FAQ
              </Link>
            </li>
            <li>
              <Link href={"/contact-us"} className="flex items-center gap-2">
                <Image
                  alt="support icon"
                  src={support}
                  width={16}
                  height={16}
                />
                Contact us
              </Link>
            </li>
            <button className="w-fit h-fit">
              <Link
                href={"/auth"}
                className="flex items-center gap-1 px-5 py-3 rounded-lg text-xs text-white hover-btn"
              >
                Login/Register
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path
                    d="M16.9808 0.306708C16.915 0.212135 16.8271 0.13481 16.7245 0.0813831C16.6219 0.0279564 16.5077 2.79172e-05 16.3918 0L8.70866 0C7.52652 0 6.56451 0.953417 6.56451 2.125V2.67679L6.65099 2.74762L9.50985 5.58096C9.9151 5.98187 10.1381 6.51596 10.1381 7.08333C10.1381 7.65071 9.9151 8.18479 9.50985 8.58571L6.65099 11.419L6.56451 11.4899V12.75C6.56451 13.9216 7.52652 14.875 8.70866 14.875H11.2102C11.3549 14.8751 11.4962 14.8316 11.6155 14.7502C11.7347 14.6689 11.8261 14.5536 11.8777 14.4195L17.0594 0.961208C17.1008 0.853968 17.1153 0.73836 17.1016 0.624343C17.0879 0.510326 17.0464 0.401318 16.9808 0.306708Z"
                    fill="#2196F3"
                  />
                  <path
                    d="M14.7023 7.08325H10.1381C10.1381 7.65063 9.9151 8.18471 9.50985 8.58563L6.65099 11.419L6.56451 11.4898V12.7499C6.56451 13.9215 7.52652 14.8749 8.70866 14.8749H11.2102C11.3549 14.875 11.4962 14.8315 11.6155 14.7502C11.7347 14.6688 11.8261 14.5535 11.8777 14.4195L14.7023 7.08325Z"
                    fill="#1D83D4"
                  />
                  <path
                    d="M4.86135 10.5711C4.7309 10.5173 4.61942 10.4264 4.54095 10.3099C4.46248 10.1935 4.42053 10.0566 4.42037 9.91657V7.79157H1.56152C1.37196 7.79157 1.19017 7.71694 1.05614 7.5841C0.922102 7.45126 0.846802 7.2711 0.846802 7.08324C0.846802 6.89537 0.922102 6.71521 1.05614 6.58237C1.19017 6.44953 1.37196 6.3749 1.56152 6.3749H4.42037V4.2499C4.42108 4.11013 4.46341 3.97367 4.54206 3.85765C4.62071 3.74163 4.73217 3.6512 4.86247 3.59772C4.99277 3.54423 5.13611 3.53007 5.2745 3.557C5.41289 3.58393 5.54018 3.65076 5.64039 3.74911L8.49925 6.58244C8.56568 6.64817 8.61838 6.72623 8.65434 6.81216C8.6903 6.89809 8.70881 6.99021 8.70881 7.08324C8.70881 7.17626 8.6903 7.26838 8.65434 7.35431C8.61838 7.44024 8.56568 7.5183 8.49925 7.58403L5.64039 10.4174C5.54044 10.5165 5.41308 10.584 5.2744 10.6114C5.13573 10.6387 4.99199 10.6247 4.86135 10.5711Z"
                    fill="white"
                  />
                  <path
                    d="M16.1153 0.0700666L11.8213 1.48886C11.5388 1.58534 11.2938 1.76668 11.1202 2.00764C10.9466 2.24861 10.8532 2.53721 10.8528 2.83327V15.5833C10.8528 16.3646 11.4939 16.9999 12.2822 16.9999C12.4352 16.9999 12.5803 16.978 12.7375 16.9298L17.0315 15.511C17.314 15.4145 17.559 15.2332 17.7326 14.9922C17.9062 14.7513 17.9996 14.4627 18 14.1666V1.41661C18 0.483733 17.0844 -0.225308 16.1153 0.0700666Z"
                    fill="#64B5F6"
                  />
                  <path
                    d="M8.70866 7.08325H0.846802C0.846802 7.27111 0.922102 7.45128 1.05614 7.58412C1.19017 7.71696 1.37196 7.79159 1.56152 7.79159H4.42038V9.91659C4.42108 10.0564 4.46341 10.1928 4.54206 10.3088C4.62071 10.4249 4.73218 10.5153 4.86247 10.5688C4.99277 10.6223 5.13611 10.6364 5.2745 10.6095C5.41289 10.5826 5.54018 10.5157 5.64039 10.4174L8.49925 7.58404C8.56572 7.51835 8.61844 7.4403 8.65437 7.35435C8.69031 7.26841 8.70876 7.17628 8.70866 7.08325Z"
                    fill="white"
                  />
                  <path
                    d="M10.8528 8.5H18V14.1667C18 14.7723 17.6104 15.312 17.0322 15.5111L12.7375 16.9299C12.5803 16.978 12.4352 17 12.2822 17C11.4939 17 10.8528 16.3646 10.8528 15.5833V8.5Z"
                    fill="#579ED6"
                  />
                </svg>
              </Link>
            </button>
          </ul>
        </nav>
      </div>
      <div
        onClick={() => setIsShowMenu(false)}
        className={`z-[49] transition-opacity  duration-500 blur-md  ${
          !isShowMenu
            ? "opacity-0 translate-x-full"
            : "opacity-70 translate-x-0"
        } fixed top-0 w-dvw right-0 h-dvh bg-background flex flex-col py-16`}
      ></div>
    </>
  );
};

export default MiniMenu;
