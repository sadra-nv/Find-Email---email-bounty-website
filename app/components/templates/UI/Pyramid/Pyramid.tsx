"use client";
import Pillar from "./Pillar";
import { useObserver } from "@/hooks/useObserver";
import { cn } from "@/lib/utils";
import { LegacyRef } from "react";

export default function Pyramid({ className }: { className?: string }) {
  const [observeRef, isInView] = useObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    },
    false
  );
  return (
    <div
      ref={observeRef as LegacyRef<HTMLDivElement>}
      className={cn(
        "w-full h-fit flex justify-center items-center overflow-hidden relative pb-12 lg:pb-0",
        className
      )}
    >
      <div
        className="w-full h-auto md:w-[40.9375rem] md:h-[613px] min-w-fit relative after:-top-6 md:after:top-0 
        after:w-full after:bg-pyramid-top
      after:left-0 after:h-3/5 after:absolute after:z-20"
      >
        <div
          className="absolute -top-16 left-0 z-20 bg-pyramid-tl
          w-full  h-full"
        ></div>
        <div
          className="absolute -top-16 right-0 z-20 bg-pyramid-tr
          w-full  h-full "
        ></div>
        <div className="absolute w-full h-full left-0 bottom-0 grid grid-cols-2 ">
          <svg
            id="inner-pyramid"
            className="z-30 absolute left-1/2 -translate-x-1/2 blur-md lg:blur-none top-[20%]  "
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 365 464"
            fill="none"
          >
            <g filter="url(#filter0_f_130_292)">
              <path
                d="M50 371.176L199.23 50L315 371.176L258.788 290.882L230.682 414L199.23 263.449L172.462 306.941L105.543 414L116.919 290.882L50 371.176Z"
                fill="#F0F1FF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_130_292"
                x="0"
                y="0"
                width="365"
                height="464"
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
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur_130_292"
                />
              </filter>
            </defs>
          </svg>

          {/* <svg
          id="inner-pyramid"
            className="w-1/3 z-30 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 278 352"
            fill="none"
          >
            <g filter="url(#filter0_f_117_287)">
              <path
                d="M40 280L151.5 40L238 280L196 220L175 312L151.5 199.5L131.5 232L81.5 312L90 220L40 280Z"
                fill="#F0F1FF"
                fillOpacity="0.44"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_117_287"
                x="0"
                y="0"
                width="278"
                height="352"
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
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_117_287"
                />
              </filter>
            </defs>
          </svg> */}

          <svg
            id="pyramid-back-glow"
            className="z-40 w-full absolute left-0 top-0 animate-pyramid-glow scale-75 md:scale-100"
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 1441 1421"
            fill="none"
          >
            <g filter="url(#filter0_f_36_313)">
              <ellipse
                cx="720.5"
                cy="710.5"
                rx="261.5"
                ry="251.5"
                fill="#f5d0fe"
                fillOpacity="0.6"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_36_313"
                x="0.670013"
                y="0.670013"
                width="1439.66"
                height="1419.66"
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
                <feGaussianBlur
                  stdDeviation="229.165"
                  result="effect1_foregroundBlur_36_313"
                />
              </filter>
            </defs>
          </svg>

          <div className=" flex justify-between gap-4 mr-4">
            <Pillar
              className={cn(
                "-translate-y-[31.25rem] duration-700 delay-500 transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
            <Pillar
              className={cn(
                "-translate-y-[31.25rem] duration-700 delay-300 transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
            <Pillar
              className={cn(
                "-translate-y-[37.5rem] duration-700  transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
          </div>
          <div className=" flex flex-row-reverse justify-between gap-4 ml-9">
            <Pillar
              className={cn(
                "-translate-y-[31.25rem] duration-700 delay-500 transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
            <Pillar
              className={cn(
                "-translate-y-[31.25rem] duration-700 delay-300 transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
            <Pillar
              className={cn(
                "-translate-y-[37.5rem] duration-700  transition-transform ease-linear ",
                {
                  "-translate-y-0": isInView,
                }
              )}
            />
          </div>
        </div>

        <div className="z-10 relative  ">
          <div className="bg-pyramid-bottom absolute bottom-0 md:-bottom-4 w-full h-2/3 left-0"></div>
          <svg
            id="main-pyramid"
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 662 611"
            fill="none"
          >
            <path
              d="M341 0C334.569 256.839 267.785 367.123 0 484.5C241.596 632.041 381.783 673.029 661.5 484.5C434.448 363.748 344.217 271.142 341 0Z"
              fill="url(#paint0_radial_130_290)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_130_290"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(337.5 163.5) rotate(90.8642) scale(447.542 484.539)"
              >
                <stop stopColor="#F0F1FF" />
                <stop offset="0.454039" stopColor="#25C0F9" />
                <stop offset="1" stopColor="#3D4ADF" />
              </radialGradient>
            </defs>
          </svg>

          {/* <svg
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 662 611"
            fill="none"
          >
            <g filter="url(#filter0_i_35_295)">
              <path
                d="M341 0C334.569 256.839 267.785 367.123 0 484.5C241.596 632.041 381.783 673.029 661.5 484.5C434.448 363.748 344.217 271.142 341 0Z"
                fill="url(#paint0_radial_35_295)"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_35_295"
                x="0"
                y="0"
                width="661.5"
                height="635.991"
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
                <feOffset dy="50" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.180392 0 0 0 0 0.054902 0 0 0 0 0.443137 0 0 0 0.23 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_35_295"
                />
              </filter>
              <radialGradient
                id="paint0_radial_35_295"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(337.5 163.5) rotate(90.8642) scale(447.542 484.539)"
              >
                <stop stopColor="#FEF7F7" />
                <stop offset="1" stopColor="#2D2EC0" />
              </radialGradient>
            </defs>
          </svg> */}

          <svg
            id="pyramid-outer-glow"
            className="animate-pyramid-glow absolute left-0 -top-10 scale-105"
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 689 663"
            fill="none"
          >
            <g filter="url(#filter0_f_35_295)">
              <path
                d="M354.401 25C348.189 282.684 283.677 393.33 25 511.093C258.379 659.119 393.797 700.242 664 511.093C444.671 389.944 357.509 297.033 354.401 25Z"
                fill="url(#paint0_radial_35_295)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_35_295"
                x="0"
                y="0"
                width="689"
                height="663"
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
                <feGaussianBlur
                  stdDeviation="12.5"
                  result="effect1_foregroundBlur_35_295"
                />
              </filter>
              <radialGradient
                id="paint0_radial_35_295"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(351.02 189.037) rotate(90.8321) scale(449.01 468.062)"
              >
                <stop stopColor="#3D4ADF" />
                <stop offset="1" stopColor="#10034B" />
              </radialGradient>
            </defs>
          </svg>

          <div
            className="absolute bottom-0 right-8 md:right-20
        bg-pyramid-right w-full h-[25rem] scale-x-125 "
          ></div>
          <div
            className="absolute bottom-0 left-8 md:left-20 bg-pyramid-left
          w-full h-[25rem] scale-x-125"
          ></div>
        </div>
      </div>

      <div className="w-full absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-6 z-30">
        <div
          className="p-1 lg:p-2 btn-hover bg-gradient-to-t from-highlight-dark to-highlight-med relative z-40 
         w-fit rounded-xl mx-auto"
        >
          <button
            className="btn-hover lg:text-xl lg:font-bold bg-gradient-to-t from-highlight-dark to-highlight-med
        border-none lg:px-24 lg:py-6 rounded-md mx-auto text-sm px-6 py-3 block"
          >
            Useful Features
          </button>
        </div>
        <h2 className="block w-fit lg:mt-9 mt-5 mx-auto text-xs font-bold lg:text-xl">
          Bulid A lead Base For Any Purpose
        </h2>
      </div>
    </div>
  );
}
