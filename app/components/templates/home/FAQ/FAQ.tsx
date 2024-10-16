import React from "react";
import QAList from "../../UI/QA/QAList";
import box from "@/public/images/home/m011t0438_g_interrogation_box_07sep22 1.png";
import Image from "next/image";
import Halo from "../../UI/Halo/Halo";

export default function FAQ() {
  return (
    <div>
      <div className="container">
        <div className="">
          <div className="flex justify-center mb-32">
            <Halo className="size-80" />
          </div>
          <div className="flex gap-2 items-center mb-8">
            <span className="grow bg-gradient-to-l from-white via-transparent to-transparent h-0.5"></span>
            <h5 className="font-bold text-3xl">FAQ</h5>
            <span className="grow bg-gradient-to-r from-white via-transparent to-transparent h-0.5"></span>
          </div>
          <div className="*:text-center mb-12">
            <h4 className="text-lg sm:text-2xl font-bold mb-5">
              Frequently asked questions
            </h4>
            <p className="text-sm sm:text-lg">
              Browse through these FAQs to find answers to commonly asked
              questions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className=" justify-center items-start pt-16 hidden sm:flex">
              <Image
                className="animate-3d-qa "
                alt="3d_question_box"
                src={box}
                width={430}
                height={430}
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-5 relative">
              <svg
                preserveAspectRatio="xMidYMax meet"
                viewBox="0 0 1221 1541"
                fill="none"
                className="absolute top-8 sm:-top-20 w-full animate-blob"
              >
                <g opacity="0.15" filter="url(#filter0_f_1_340)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M765.421 492.013C837.05 503.14 904.449 519.843 960.798 562.257C1025.13 610.683 1100.38 666.347 1098.98 743.086C1097.59 819.383 1009.86 861.519 954.321 917.92C893.88 979.305 855.047 1077.81 765.421 1081.85C674.991 1085.94 611.115 1003.13 557.146 935.852C512.17 879.784 503.884 812.274 493.671 743.086C480.808 655.953 423.981 551.44 491.228 489.311C558.475 427.18 671.712 477.456 765.421 492.013Z"
                    fill="#4FA9E2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_340"
                    x="0.666687"
                    y="0.666687"
                    width="1556.67"
                    height="1539.67"
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
                      stdDeviation="229.167"
                      result="effect1_foregroundBlur_1_340"
                    />
                  </filter>
                </defs>
              </svg>

              <QAList faq={"a"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
