"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@headlessui/react";

export default function DarkToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, [theme]);
  if (!mounted) {
    return <Button className="w-[4.375rem] h-8 rounded-full p-1"></Button>;
  }

  const handleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
    }
  };

  return (
    <>
      {/* <Button
        onClick={handleTheme}
        className="relative w-16 xs:w-[4.375rem] h-8 rounded-full p-1 mr-auto sm:mr-0 
          transition-all duration-300 ease-in-out dark:bg-[#E3F2FF] bg-[#152330]"
        aria-label={
          theme !== "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      > */}
      <label className="theme-switch   inline-block">
        <input
          onChange={handleTheme}
          type="checkbox"
          className="theme-switch__checkbox"
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container">
            <svg viewBox="0 0 144 55" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>

      {/* <div className="absolute left-0 top-0 h-full w-full hidden dark:block">
          <svg
            className="right-2 top-2 absolute"
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M11.1971 2.96995V2.79192C11.1953 1.24806 9.94222 -0.00178256 8.39842 1.90846e-06C7.84835 0.000702841 7.31071 0.163665 6.85283 0.468484C5.56581 -0.387049 3.82893 -0.0371149 2.9734 1.2499C2.66962 1.70691 2.50693 2.24316 2.50557 2.79192V2.96698C1.13426 3.35718 0.338869 4.78529 0.729132 6.15659C1.11934 7.5279 2.54744 8.32329 3.91875 7.93303C4.24444 7.84035 4.54872 7.6845 4.81425 7.47436C5.80517 8.2142 7.16469 8.2142 8.15561 7.47436C9.20119 8.60792 10.9678 8.67918 12.1013 7.6336C13.2349 6.58802 13.3061 4.82145 12.2605 3.6879C11.9666 3.36929 11.6025 3.12349 11.1971 2.96995Z"
              fill="#857734"
            />
            <path
              opacity="0.8"
              d="M11.1024 3.10833V2.92388C11.0979 1.32611 9.77978 0.0345506 8.15823 0.0388644C7.58639 0.040423 7.02746 0.206458 6.55005 0.516588C5.20201 -0.371379 3.37862 -0.014565 2.47727 1.31372C2.15393 1.79024 1.98156 2.35067 1.98204 2.92388C1.97891 2.9843 1.97891 3.04483 1.98204 3.10524C0.538548 3.50427 -0.303378 4.98071 0.101605 6.40303C0.506587 7.82536 2.00505 8.65484 3.44861 8.25581C3.79611 8.15975 4.12069 7.99637 4.40336 7.77525C5.44531 8.54176 6.87485 8.54176 7.91667 7.77525C9.02273 8.94362 10.8806 9.00728 12.0665 7.91755C13.2524 6.82782 13.3169 4.99716 12.2109 3.82873C11.9034 3.50391 11.5241 3.25321 11.1024 3.09606V3.10833Z"
              fill="white"
            />
          </svg>
          <svg
            className="top-3 left-8 absolute"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M8.61303 2.28458V2.14764C8.61161 0.960047 7.64773 -0.0013712 6.46018 1.46805e-06C6.03705 0.000540648 5.62349 0.125897 5.27127 0.360373C4.28125 -0.297731 2.94519 -0.02855 2.28708 0.961465C2.05341 1.31301 1.92826 1.72551 1.92721 2.14764V2.28229C0.872362 2.58245 0.260518 3.681 0.56072 4.73585C0.860878 5.7907 1.95943 6.40255 3.01428 6.10234C3.26481 6.03105 3.49887 5.91117 3.70313 5.74952C4.46537 6.31863 5.51116 6.31863 6.27341 5.74952C7.0777 6.62149 8.4366 6.6763 9.30857 5.87201C10.1805 5.06772 10.2353 3.70882 9.43105 2.83685C9.20494 2.59177 8.92488 2.40269 8.61303 2.28458Z"
              fill="#857734"
            />
            <path
              opacity="0.8"
              d="M8.54035 2.39097V2.24909C8.53689 1.02003 7.52293 0.0265211 6.27557 0.0298394C5.8357 0.0310383 5.40575 0.158758 5.03851 0.39732C4.00155 -0.285733 2.59894 -0.0112603 1.9056 1.0105C1.65687 1.37705 1.52428 1.80815 1.52465 2.24909C1.52224 2.29556 1.52224 2.34212 1.52465 2.3886C0.414269 2.69554 -0.233368 3.83126 0.0781577 4.92536C0.389683 6.01946 1.54235 6.65753 2.65278 6.35058C2.92009 6.27668 3.16977 6.15101 3.38721 5.98092C4.18871 6.57054 5.28836 6.57054 6.08976 5.98092C6.94058 6.87966 8.36975 6.92863 9.28195 6.09038C10.1942 5.25212 10.2438 3.84392 9.39299 2.94513C9.15646 2.69527 8.86471 2.50242 8.54035 2.38154V2.39097Z"
              fill="white"
            />
          </svg>
          <svg
            className="absolute bottom-0.5 right-4"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M9.03895 3.37817V3.23444C9.03746 1.98805 8.02585 0.97903 6.7795 0.98047C6.33542 0.981036 5.90138 1.1126 5.53172 1.35869C4.49269 0.667996 3.09047 0.950505 2.39978 1.98954C2.15453 2.35849 2.02319 2.79142 2.02209 3.23444V3.37577C0.91501 3.69079 0.272871 4.84373 0.587938 5.95081C0.902957 7.05789 2.0559 7.70003 3.16298 7.38496C3.42592 7.31014 3.67157 7.18432 3.88594 7.01467C4.68592 7.61196 5.7835 7.61196 6.58348 7.01467C7.4276 7.92981 8.85378 7.98734 9.76892 7.14322C10.6841 6.29911 10.7416 4.87292 9.89747 3.95778C9.66016 3.70056 9.36623 3.50212 9.03895 3.37817Z"
              fill="#857734"
            />
            <path
              opacity="0.8"
              d="M8.96321 3.48997V3.34106C8.95958 2.05115 7.89541 1.00845 6.5863 1.01193C6.12465 1.01319 5.67341 1.14723 5.28799 1.39761C4.19968 0.680733 2.72762 0.968796 1.99995 2.04115C1.73891 2.42585 1.59975 2.8783 1.60014 3.34106C1.59761 3.38984 1.59761 3.43871 1.60014 3.48748C0.434781 3.80962 -0.244923 5.00158 0.0820276 6.14985C0.408978 7.29812 1.61872 7.96778 2.78413 7.64564C3.06468 7.56808 3.32672 7.43619 3.55492 7.25767C4.39611 7.87648 5.55021 7.87648 6.39129 7.25767C7.28423 8.20092 8.78416 8.25231 9.74153 7.37255C10.6989 6.49279 10.751 5.01486 9.85807 4.07157C9.60983 3.80933 9.30363 3.60694 8.96321 3.48007V3.48997Z"
              fill="white"
            />
          </svg>
          <svg
            className="left-1  rounded-full absolute top-1/2 -translate-y-1/2 "
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <ellipse
              cx="11.5"
              cy="11.5"
              rx="11.5"
              ry="11.5"
              transform="rotate(-180 11.5 11.5)"
              fill="url(#paint0_linear_437_2144)"
            />
            <ellipse
              cx="11.4995"
              cy="11.5"
              rx="9.45556"
              ry="9.45555"
              transform="rotate(-180 11.4995 11.5)"
              fill="url(#paint1_linear_437_2144)"
            />
            <ellipse
              cx="11.5"
              cy="11.5"
              rx="11.5"
              ry="11.5"
              transform="rotate(-180 11.5 11.5)"
              fill="#FF9255"
            />
            <ellipse
              cx="11.4995"
              cy="11.5"
              rx="9.45556"
              ry="9.45555"
              transform="rotate(-180 11.4995 11.5)"
              fill="url(#paint2_linear_437_2144)"
            />
            <mask
              id="mask0_437_2144"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="23"
              height="23"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11.5"
                transform="rotate(-180 11.5 11.5)"
                fill="url(#paint3_linear_437_2144)"
              />
            </mask>
            <g mask="url(#mask0_437_2144)">
              <path
                d="M9.03546 10.5058C2.85832 17.7344 -3.28597 17.8987 -5.58597 17.0772L-9.36454 13.4629L-6.07882 -2.1442L17.7426 -9.53705L31.0498 -3.45848L32.5283 10.9987C27.2712 7.82247 15.2126 3.27724 9.03546 10.5058Z"
                fill="url(#paint4_linear_437_2144)"
              />
              <path
                d="M12.4857 11.5058C26.0218 19.7144 30.0094 17.2188 32.0593 15.8912L34.9069 11.5058L28.1251 -2.92976L3.24259 -4.6549L-8.31311 4.31699L-6.43234 18.7273C-2.04504 14.4288 3.86736 6.27946 12.4857 11.5058Z"
                fill="url(#paint5_linear_437_2144)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_437_2144"
                x1="11.5"
                y1="9.53674e-07"
                x2="11.5"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC123" />
                <stop offset="1" stopColor="#F8832E" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_437_2144"
                x1="11.4995"
                y1="2.04446"
                x2="11.4995"
                y2="20.9556"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFBF24" />
                <stop offset="1" stopColor="#F4924B" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_437_2144"
                x1="11.4995"
                y1="2.04446"
                x2="11.4995"
                y2="20.9556"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFBF24" />
                <stop offset="1" stopColor="#F4924B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_437_2144"
                x1="11.5"
                y1="9.53674e-07"
                x2="11.5"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC123" />
                <stop offset="1" stopColor="#F8832E" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_437_2144"
                x1="11.5819"
                y1="17.4143"
                x2="11.5819"
                y2="-9.53705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF9D55" stopOpacity="0.6" />
                <stop offset="1" stopColor="#FD8A37" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_437_2144"
                x1="15.4276"
                y1="20.1616"
                x2="9.23867"
                y2="-6.06959"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFBD3E" stopOpacity="0.49" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute left-0 top-0 h-full w-full block dark:hidden">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            className="right-1 absolute top-1/2 rounded-full -translate-y-1/2 "
          >
            <g filter="url(#filter0_ii_437_2237)">
              <circle cx="11.5" cy="11.5" r="11.5" fill="#F4FAFF" />
            </g>
            <defs>
              <filter
                id="filter0_ii_437_2237"
                x="-12"
                y="-12"
                width="47"
                height="47"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="12" dy="-12" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_437_2237"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-12" dy="12" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.9 0 0 0 0 0.94 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_437_2237"
                  result="effect2_innerShadow_437_2237"
                />
              </filter>
            </defs>
          </svg>

          <svg
            className="absolute top-1 left-2"
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
          >
            <g opacity="0.5">
              <path
                opacity="0.5"
                d="M11.1971 2.96995V2.79192C11.1953 1.24806 9.94222 -0.00178256 8.39842 1.90846e-06C7.84835 0.000702841 7.31071 0.163665 6.85283 0.468484C5.56581 -0.387049 3.82893 -0.0371149 2.9734 1.2499C2.66962 1.70691 2.50693 2.24316 2.50557 2.79192V2.96698C1.13426 3.35718 0.338869 4.78529 0.729132 6.15659C1.11934 7.5279 2.54744 8.32329 3.91875 7.93303C4.24444 7.84035 4.54872 7.6845 4.81425 7.47436C5.80517 8.2142 7.16469 8.2142 8.15561 7.47436C9.20119 8.60792 10.9678 8.67918 12.1013 7.6336C13.2349 6.58802 13.3061 4.82145 12.2605 3.6879C11.9666 3.36929 11.6025 3.12349 11.1971 2.96995Z"
                fill="#857734"
              />
              <path
                opacity="0.8"
                d="M11.1024 3.10833V2.92388C11.0979 1.32611 9.77978 0.0345506 8.15823 0.0388644C7.58639 0.040423 7.02746 0.206458 6.55005 0.516588C5.20201 -0.371379 3.37862 -0.014565 2.47727 1.31372C2.15393 1.79024 1.98156 2.35067 1.98204 2.92388C1.97891 2.9843 1.97891 3.04483 1.98204 3.10524C0.538548 3.50427 -0.303378 4.98071 0.101605 6.40303C0.506587 7.82536 2.00505 8.65484 3.44861 8.25581C3.79611 8.15975 4.12069 7.99637 4.40336 7.77525C5.44531 8.54176 6.87485 8.54176 7.91667 7.77525C9.02273 8.94362 10.8806 9.00728 12.0665 7.91755C13.2524 6.82782 13.3169 4.99716 12.2109 3.82873C11.9034 3.50391 11.5241 3.25321 11.1024 3.09606V3.10833Z"
                fill="url(#paint0_linear_437_2232)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_437_2232"
                x1="6.49997"
                y1="0.0283203"
                x2="6.49997"
                y2="8.69495"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F7CD3A" />
                <stop offset="1" stopColor="#152330" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            className="absolute bottom-1.5 left-2"
          >
            <g opacity="0.5">
              <path
                opacity="0.5"
                d="M7.75136 3.0366V2.91335C7.75008 1.84451 6.88258 0.979235 5.81379 0.98047C5.43297 0.980955 5.06076 1.09378 4.74376 1.30481C3.85274 0.71251 2.65028 0.954774 2.05799 1.84579C1.84768 2.16218 1.73505 2.53343 1.7341 2.91335V3.03454C0.784736 3.30468 0.234075 4.29338 0.504258 5.24274C0.7744 6.19211 1.7631 6.74278 2.71246 6.47259C2.93795 6.40843 3.1486 6.30053 3.33243 6.15505C4.01845 6.66725 4.95967 6.66725 5.64569 6.15505C6.36955 6.93982 7.59257 6.98916 8.37734 6.26529C9.16211 5.54143 9.21144 4.31841 8.48758 3.53364C8.28408 3.31306 8.03202 3.14289 7.75136 3.0366Z"
                fill="#857734"
              />
              <path
                opacity="0.8"
                d="M7.68633 3.13232V3.00463C7.68322 1.89847 6.77065 1.00431 5.64803 1.0073C5.25214 1.00838 4.86519 1.12333 4.53467 1.33803C3.60141 0.723284 2.33905 0.97031 1.71504 1.8899C1.49119 2.2198 1.37186 2.60779 1.37219 3.00463C1.37002 3.04645 1.37002 3.08836 1.37219 3.13019C0.372843 3.40644 -0.210032 4.42859 0.0703421 5.41328C0.350716 6.39797 1.38812 6.97223 2.38751 6.69598C2.62809 6.62947 2.8528 6.51637 3.0485 6.36329C3.76985 6.89394 4.75953 6.89394 5.4808 6.36329C6.24653 7.17216 7.53279 7.21623 8.35378 6.4618C9.17476 5.70737 9.21945 4.43998 8.45371 3.63107C8.24083 3.40619 7.97825 3.23263 7.68633 3.12383V3.13232Z"
                fill="url(#paint0_linear_437_2229)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_437_2229"
                x1="4.5"
                y1="1"
                x2="4.5"
                y2="7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F7CD3A" />
                <stop offset="1" stopColor="#152330" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            className="absolute top-1.5 left-7"
          >
            <path
              d="M1.52447 0.463526C1.67415 0.00287032 2.32585 0.0028702 2.47553 0.463526L2.56129 0.727457C2.62822 0.933469 2.8202 1.07295 3.03681 1.07295H3.31433C3.79869 1.07295 4.00008 1.69276 3.60822 1.97746L3.38371 2.14058C3.20846 2.2679 3.13513 2.49358 3.20207 2.69959L3.28783 2.96352C3.4375 3.42418 2.91026 3.80724 2.51841 3.52254L2.29389 3.35942C2.11865 3.2321 1.88135 3.2321 1.70611 3.35942L1.48159 3.52254C1.08974 3.80724 0.562497 3.42418 0.712173 2.96353L0.797929 2.69959C0.864866 2.49358 0.791537 2.2679 0.616294 2.14058L0.39178 1.97746C-7.70092e-05 1.69276 0.201311 1.07295 0.685673 1.07295H0.963187C1.1798 1.07295 1.37178 0.933469 1.43871 0.727457L1.52447 0.463526Z"
              fill="#FFC700"
            />
          </svg>

          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            className="absolute top-4 left-6"
          >
            <path
              d="M1.52447 0.463526C1.67415 0.00287032 2.32585 0.0028702 2.47553 0.463526L2.56129 0.727457C2.62822 0.933469 2.8202 1.07295 3.03681 1.07295H3.31433C3.79869 1.07295 4.00008 1.69276 3.60822 1.97746L3.38371 2.14058C3.20846 2.2679 3.13513 2.49358 3.20207 2.69959L3.28783 2.96352C3.4375 3.42418 2.91026 3.80724 2.51841 3.52254L2.29389 3.35942C2.11865 3.2321 1.88135 3.2321 1.70611 3.35942L1.48159 3.52254C1.08974 3.80724 0.562497 3.42418 0.712173 2.96353L0.797929 2.69959C0.864866 2.49358 0.791537 2.2679 0.616294 2.14058L0.39178 1.97746C-7.70092e-05 1.69276 0.201311 1.07295 0.685673 1.07295H0.963187C1.1798 1.07295 1.37178 0.933469 1.43871 0.727457L1.52447 0.463526Z"
              fill="#FFC700"
            />
          </svg>
        </div> */}
      {/* </Button> */}
    </>
  );
}
