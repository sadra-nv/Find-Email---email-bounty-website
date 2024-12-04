import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import logoText from "@/public/images/logo-text.png";
import home from "@/public/icons/home-icon.png";
import blog from "@/public/icons/blog-icon.png";
import price from "@/public/icons/price-icon.png";
import pc from "@/public/icons/pcicon.png";
import faq from "@/public/icons/faw-icon.png";
import support from "@/public/icons/customer-icon.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center py-12 gap-5 ">
          <Link href={"/"} className="flex items-center gap-2.5">
            <Image
              className="animate-logo-spin w-11 h-11"
              alt="find email logo"
              src={logo}
              placeholder="blur"
              width={44}
              height={44}
            />
            <Image
              alt="find email logo description"
              width={137}
              className="w-[8.5625rem] h-10"
              height={41}
              src={logoText}
              placeholder="blur"
            />
          </Link>
          <nav>
            <ul className="flex items-center gap-6 bg-white/15 rounded-xl text-white text-xs xl:text-sm text-center xl:px-6 px-2 ">
              <li>
                <Link href={"/"} className="flex items-center gap-1 py-5">
                  <Image alt="home icon" src={home} width={17} height={15} />
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className="flex items-center gap-1 py-5">
                  <Image alt="blog icon" src={blog} width={16} height={16} />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/pricing"}
                  className="flex items-center gap-1 py-5"
                >
                  <Image alt="price icon" src={price} width={16} height={16} />
                  Pricing
                </Link>
              </li>
              <li className="relative group  ">
                <span className="flex items-center gap-.5 py-5">
                  <Image
                    alt="pc icon"
                    // className="scale-150"
                    src={pc}
                    width={33}
                    height={27}
                  />

                  <span>Online Tools</span>
                  <svg
                    width="6"
                    height="3"
                    className="ml-1"
                    viewBox="0 0 6 3"
                    fill="none"
                  >
                    <path
                      d="M3.00001 3C2.86676 3 2.7335 2.95823 2.6283 2.86872L0.152542 0.7623C-0.0508472 0.589252 -0.0508472 0.302826 0.152542 0.129778C0.355931 -0.0432592 0.692574 -0.0432592 0.895963 0.129778L3.00001 1.91994L5.10404 0.129778C5.30743 -0.0432592 5.64407 -0.0432592 5.84746 0.129778C6.05085 0.302826 6.05085 0.589252 5.84746 0.7623L3.37172 2.86872C3.26652 2.95823 3.13327 3 3.00001 3Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div
                  className="absolute -bottom-24 duration-300 transition-opacity left-0 w-28 bg-white/15 opacity-0 overflow-hidden
                group-hover:opacity-100   tran-fast rounded-lg text-xs divide-y  divide-neutral-400/50"
                >
                  <Link
                    href="/cracker"
                    className="p-1 py-3 hover:bg-white/10 tran-fast block"
                  >
                    Hash Cracker
                  </Link>
                  <Link
                    href="/checker"
                    className="p-1 py-3 hover:bg-white/10 tran-fast block"
                  >
                    Smtp Checker
                  </Link>
                </div>
              </li>
              <li>
                <Link href={"/faq"} className="flex items-center gap-1 py-5">
                  <Image alt="faq icon" src={faq} width={16} height={16} />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  className="flex items-center gap-1 py-5"
                >
                  <Image
                    alt="support icon"
                    src={support}
                    width={16}
                    height={16}
                  />
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="/auth"
            className=" hover-btn rounded-lg flex items-center justify-center text-xs px-5 py-4 gap-1 "
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
          {/* <button>
            <Link
              href={"/"}
              className="flex items-center gap-1 px-5 py-4 rounded-lg text-xs text-white bg-gradient-to-r from-[#C24B76] to-[#FD8330] hover:opacity-75"
            >
              Login/Register
              <img src="/icons/13 1.svg" alt="" />
            </Link>
          </button> */}
        </div>
      </div>
    </header>
  );
}
