import Image from "next/image";
import StarsSection from "../UI/StarsSection/StarsSection";
import pic from "@/public/images/particle-bg.jpg";
// import guy from "@/public/images/guy.png";
// import phone from "@/public/icons/phone-gold.png";
import email from "@/public/icons/email-blue.png";

export default function HeroSec() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
        relative hero-grad "
    >
      <StarsSection
        isStatic
        className="z-0 xl:h-screen max-h-[31.25rem] sm:max-h-[43.75rem] lg:max-h-screen"
      />
      {/* <div
        className="w-full absolute h-full xl:h-0 after:z-10 after:bottom-0 after:right-0 after:w-full after:h-28 after:bg-gradient-to-b 
        after:to-[#030014] after:via-[#030014] after:from-transparent after:absolute"
      ></div> */}

      <div className="container h-full pt-36 lg:pt-64 relative z-30">
        <h1 className="w-fit mx-auto font-bold text-3xl lg:text-5xl">
          Let&apos;s work together
        </h1>
        <p className="text-center mx-auto w-fit text-xs mb-6 mt-4 lg:mb-9 leading-10 lg:text-xl">
          Any question or remark? just write us a message
        </p>

        <div className="mx-auto relative w-full sm:w-fit">
          <Image
            placeholder="blur"
            className="w-full max-w-[54.1875rem] mx-auto object-cover rounded-2xl lg:rounded-3xl relative z-10"
            width={867}
            height={415}
            src={pic}
            alt="picture of some particles"
          />

          <div
            className="mx-auto sm:w-10/12 sm:-translate-y-1/2 z-20 relative
          w-full space-y-4 sm:space-y-0 mt-4 mb-6 sm:mt-0 sm:mb-0
          sm:flex justify-between gap-8 items-center"
          >
            <div className="bg-blue-grad mx-auto flex gap-3 p-4 w-full sm:w-1/2 rounded-lg lg:rounded-xl truncate">
              <div className="bg-white rounded-lg p-1 min-w-fit">
                <Image width={30} height={30} src={email} alt="icon" />
              </div>
              <div>
                <div className="text-xs ">Email</div>
                <div className="text-sm lg:text-base font-bold">
                  Findemail.io@gmail.com
                </div>
              </div>
            </div>
            {/* <div className="bg-blue-grad flex gap-3 p-4 w-full sm:w-1/2 rounded-lg lg:rounded-xl truncate">
              <div className="bg-white rounded-lg p-1 min-w-fit">
                <Image width={30} height={30} src={phone} alt="icon" />
              </div>
              <div>
                <div className="text-xs ">Phone</div>
                <div className="text-sm lg:text-base font-bold">
                  +1234567812345
                </div>
              </div>
            </div> */}
          </div>

          {/* <div
            className="p-5 bg-black/45 backdrop-blur lg:rounded-3xl rounded-2xl
            w-full sm:w-fit
           sm:absolute left-0 top-11 z-20 sm:-translate-x-6 lg:-translate-x-1/4  xl:-translate-x-1/2"
          >
            <div className="flex gap-2 justify-start items-center">
              <Image
                placeholder="blur"
                width={35}
                height={35}
                className="rounded-full"
                src={guy}
                alt="profile picture"
              />
              <h2 className=" w-full sm:w-48 truncate">Alireza Rahmani</h2>
            </div>
            <p className="text-justify text-xs leading-5 w-full sm:w-[14.6875rem] mt-4">
              “ This team is really the best in its field,I don`&apos;t regret
              working with them, and will come back again thanks “
            </p>
          </div> */}

          <svg
            className="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 -translate-y-3/4 z-0"
            width="99"
            height="71"
            viewBox="0 0 99 71"
            fill="none"
          >
            <ellipse
              cx="2.5"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
          </svg>
          <svg
            className="hidden lg:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 z-0"
            width="99"
            height="71"
            viewBox="0 0 99 71"
            fill="none"
          >
            <ellipse
              cx="2.5"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="2.5"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="39.8896"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="77.2803"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="2.62469"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="46.4091"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="21.1953"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="58.585"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="24.5168"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
            <ellipse
              cx="95.9746"
              cy="68.301"
              rx="2.5"
              ry="2.62469"
              fill="#E2E2E2"
            />
          </svg>
        </div>

        <svg
          className="absolute size-40 sm:size-64 top-36 lg:top-64 -translate-y-1/3 left-1/2 -translate-x-1/2"
          width="264"
          height="264"
          viewBox="0 0 264 264"
          fill="none"
        >
          <g opacity="0.2">
            <g opacity="0.4">
              <path
                d="M10.3883 162.462C9.69957 159.666 13.0199 157.907 15.0558 159.943L104.508 249.395C106.544 251.431 104.785 254.751 101.989 254.063C56.9483 242.957 21.494 207.503 10.3883 162.462Z"
                stroke="url(#paint0_linear_268_777)"
                strokeWidth="12.7709"
              />
              <path
                d="M7.00547 124.239C6.98008 124.653 7.04322 125.067 7.19065 125.455C7.33809 125.842 7.56645 126.194 7.8605 126.486L137.964 256.589C138.256 256.883 138.608 257.112 138.995 257.259C139.383 257.407 139.797 257.47 140.211 257.444C145.736 257.092 151.232 256.375 156.663 255.297C158.925 254.848 159.71 252.073 158.079 250.442L14.0075 106.37C12.3765 104.739 9.60233 105.525 9.15302 107.787C8.07525 113.218 7.35784 118.714 7.00547 124.239Z"
                stroke="url(#paint1_linear_268_777)"
                strokeWidth="12.7709"
              />
              <path
                d="M17.6595 81.1217C17.42 81.6615 17.3502 82.2614 17.4595 82.8417C17.5688 83.4221 17.8519 83.9555 18.2714 84.3711L180.079 246.179C180.494 246.598 181.028 246.881 181.608 246.99C182.188 247.099 182.788 247.03 183.328 246.79C187.515 244.913 191.595 242.806 195.55 240.48C197.186 239.518 197.438 237.276 196.096 235.934L28.5162 68.354C27.1742 67.012 24.932 67.2633 23.9698 68.8994C21.6436 72.8546 19.5369 76.9349 17.6595 81.1217Z"
                stroke="url(#paint2_linear_268_777)"
                strokeWidth="12.7709"
              />
              <path
                d="M38.9885 52.5646C37.8947 51.4708 37.8267 49.7157 38.8606 48.5651C61.8074 23.0474 95.0789 7 132.098 7C201.328 7 257.45 63.1219 257.45 132.352C257.45 169.37 241.402 202.642 215.885 225.588C214.734 226.622 212.98 226.554 211.885 225.46L38.9885 52.5646Z"
                stroke="url(#paint3_linear_268_777)"
                strokeWidth="12.7709"
              />
            </g>
            <g opacity="0.4">
              <path
                d="M10.3883 162.462C9.69957 159.666 13.0199 157.907 15.0558 159.943L104.508 249.395C106.544 251.431 104.785 254.751 101.989 254.063C56.9483 242.957 21.494 207.503 10.3883 162.462Z"
                stroke="url(#paint4_linear_268_777)"
                strokeOpacity="0.2"
                strokeWidth="1.41899"
              />
              <path
                d="M7.00547 124.239C6.98008 124.653 7.04322 125.067 7.19065 125.455C7.33809 125.842 7.56645 126.194 7.8605 126.486L137.964 256.589C138.256 256.883 138.608 257.112 138.995 257.259C139.383 257.407 139.797 257.47 140.211 257.444C145.736 257.092 151.232 256.375 156.663 255.297C158.925 254.848 159.71 252.073 158.079 250.442L14.0075 106.37C12.3765 104.739 9.60233 105.525 9.15302 107.787C8.07525 113.218 7.35784 118.714 7.00547 124.239Z"
                stroke="url(#paint5_linear_268_777)"
                strokeOpacity="0.2"
                strokeWidth="1.41899"
              />
              <path
                d="M17.6595 81.1217C17.42 81.6615 17.3502 82.2614 17.4595 82.8417C17.5688 83.4221 17.8519 83.9555 18.2714 84.3711L180.079 246.179C180.494 246.598 181.028 246.881 181.608 246.99C182.188 247.099 182.788 247.03 183.328 246.79C187.515 244.913 191.595 242.806 195.55 240.48C197.186 239.518 197.438 237.276 196.096 235.934L28.5162 68.354C27.1742 67.012 24.932 67.2633 23.9698 68.8994C21.6436 72.8546 19.5369 76.9349 17.6595 81.1217Z"
                stroke="url(#paint6_linear_268_777)"
                strokeOpacity="0.2"
                strokeWidth="1.41899"
              />
              <path
                d="M38.9885 52.5646C37.8947 51.4708 37.8267 49.7157 38.8606 48.5651C61.8074 23.0474 95.0789 7 132.098 7C201.328 7 257.45 63.1219 257.45 132.352C257.45 169.37 241.402 202.642 215.885 225.588C214.734 226.622 212.98 226.554 211.885 225.46L38.9885 52.5646Z"
                stroke="url(#paint7_linear_268_777)"
                strokeOpacity="0.2"
                strokeWidth="1.41899"
              />
            </g>
            <path
              d="M10.3864 162.462C9.69762 159.666 13.0179 157.907 15.0539 159.943L104.506 249.395C106.542 251.431 104.783 254.751 101.987 254.063C56.9464 242.957 21.4921 207.503 10.3864 162.462Z"
              stroke="url(#paint8_linear_268_777)"
              strokeOpacity="0.2"
              strokeWidth="5.67595"
            />
            <path
              d="M7.00547 124.239C6.98008 124.653 7.04322 125.067 7.19065 125.455C7.33809 125.842 7.56645 126.194 7.8605 126.486L137.964 256.59C138.256 256.884 138.608 257.112 138.995 257.259C139.383 257.407 139.797 257.47 140.211 257.445C145.736 257.092 151.232 256.375 156.663 255.297C158.925 254.848 159.71 252.074 158.079 250.443L14.0075 106.371C12.3765 104.74 9.60233 105.525 9.15302 107.787C8.07525 113.218 7.35784 118.714 7.00547 124.239Z"
              stroke="url(#paint9_linear_268_777)"
              strokeOpacity="0.2"
              strokeWidth="5.67595"
            />
            <path
              d="M17.6576 81.1217C17.418 81.6615 17.3482 82.2614 17.4575 82.8417C17.5668 83.4221 17.85 83.9555 18.2695 84.3711L180.077 246.179C180.492 246.598 181.026 246.881 181.606 246.99C182.186 247.099 182.786 247.03 183.326 246.79C187.513 244.913 191.593 242.806 195.548 240.48C197.184 239.518 197.436 237.276 196.094 235.934L28.5142 68.354C27.1722 67.012 24.9301 67.2633 23.9679 68.8994C21.6416 72.8546 19.535 76.9349 17.6576 81.1217Z"
              stroke="url(#paint10_linear_268_777)"
              strokeOpacity="0.2"
              strokeWidth="5.67595"
            />
            <path
              d="M38.9885 52.5646C37.8947 51.4708 37.8267 49.7157 38.8606 48.5651C61.8074 23.0474 95.0789 7 132.098 7C201.328 7 257.45 63.1219 257.45 132.352C257.45 169.37 241.402 202.642 215.885 225.588C214.734 226.622 212.98 226.554 211.885 225.46L38.9885 52.5646Z"
              stroke="url(#paint11_linear_268_777)"
              strokeOpacity="0.2"
              strokeWidth="5.67595"
            />
            <path
              d="M10.3864 162.462C9.69762 159.666 13.0179 157.907 15.0539 159.943L104.506 249.395C106.542 251.431 104.783 254.751 101.987 254.063C56.9464 242.957 21.4921 207.503 10.3864 162.462Z"
              stroke="url(#paint12_radial_268_777)"
              strokeWidth="0.709494"
            />
            <path
              d="M7.00547 124.239C6.98008 124.653 7.04322 125.067 7.19065 125.455C7.33809 125.842 7.56645 126.194 7.8605 126.486L137.964 256.59C138.256 256.884 138.608 257.112 138.995 257.259C139.383 257.407 139.797 257.47 140.211 257.445C145.736 257.092 151.232 256.375 156.663 255.297C158.925 254.848 159.71 252.074 158.079 250.443L14.0075 106.371C12.3765 104.74 9.60233 105.525 9.15302 107.787C8.07525 113.218 7.35784 118.714 7.00547 124.239Z"
              stroke="url(#paint13_radial_268_777)"
              strokeWidth="0.709494"
            />
            <path
              d="M17.6576 81.1217C17.418 81.6615 17.3482 82.2614 17.4575 82.8417C17.5668 83.4221 17.85 83.9555 18.2695 84.3711L180.077 246.179C180.492 246.598 181.026 246.881 181.606 246.99C182.186 247.099 182.786 247.03 183.326 246.79C187.513 244.913 191.593 242.806 195.548 240.48C197.184 239.518 197.436 237.276 196.094 235.934L28.5142 68.354C27.1722 67.012 24.9301 67.2633 23.9679 68.8994C21.6416 72.8546 19.535 76.9349 17.6576 81.1217Z"
              stroke="url(#paint14_radial_268_777)"
              strokeWidth="0.709494"
            />
            <path
              d="M38.9885 52.5646C37.8947 51.4708 37.8267 49.7157 38.8606 48.5651C61.8074 23.0474 95.0789 7 132.098 7C201.328 7 257.45 63.1219 257.45 132.352C257.45 169.37 241.402 202.642 215.885 225.588C214.734 226.622 212.98 226.554 211.885 225.46L38.9885 52.5646Z"
              stroke="url(#paint15_radial_268_777)"
              strokeWidth="0.709494"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_268_777"
              x1="132.19"
              y1="7.00006"
              x2="132.19"
              y2="177.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_268_777"
              x1="132.189"
              y1="7.00001"
              x2="132.189"
              y2="177.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_268_777"
              x1="132.189"
              y1="6.99999"
              x2="132.189"
              y2="177.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_268_777"
              x1="132.189"
              y1="7"
              x2="132.189"
              y2="177.709"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_268_777"
              x1="132.19"
              y1="7.00006"
              x2="132.19"
              y2="147.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_268_777"
              x1="132.189"
              y1="7"
              x2="132.189"
              y2="147.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_268_777"
              x1="132.189"
              y1="6.99998"
              x2="132.189"
              y2="147.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_268_777"
              x1="132.189"
              y1="7"
              x2="132.189"
              y2="147.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6663F6" />
              <stop offset="1" stopColor="#6663F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_268_777"
              x1="132.188"
              y1="7.00007"
              x2="132.188"
              y2="185.469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7877C6" />
              <stop offset="1" stopColor="#7877C6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_268_777"
              x1="132.189"
              y1="7.00024"
              x2="132.189"
              y2="185.469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7877C6" />
              <stop offset="1" stopColor="#7877C6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_268_777"
              x1="132.187"
              y1="6.99998"
              x2="132.187"
              y2="185.469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7877C6" />
              <stop offset="1" stopColor="#7877C6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_268_777"
              x1="132.189"
              y1="7"
              x2="132.189"
              y2="185.469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7877C6" />
              <stop offset="1" stopColor="#7877C6" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint12_radial_268_777"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.188 33.1902) rotate(90) scale(172.233)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint13_radial_268_777"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.189 33.1904) rotate(90) scale(172.233 172.233)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint14_radial_268_777"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.187 33.1902) rotate(90) scale(172.233)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint15_radial_268_777"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(132.189 33.1902) rotate(90) scale(172.233 172.234)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
