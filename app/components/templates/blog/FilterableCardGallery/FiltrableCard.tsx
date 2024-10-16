import Link from "next/link";

export default function FilterableCard() {
  return (
    <div className="filter-card group w-fit">
      <div className="relative flex justify-center items-center ">
        <div className="justify-center items-start flex flex-col relative">
          <div
            className="bg-red-100 w-40 h-40 relative
           before:bg-[#030014] before:w-11/12 before:h-5/6 before:absolute
            before:left-1/2 before:-translate-x-1/2 before:top-0
            before:blur-sm before:bg-opacity-90"
          ></div>
          <div
            className=" w-40 h-32  after:w-full after:absolute
           relative after:left-0 after:bottom-0 after:h-2/3 after:bg-gradient-to-t after:from-[#030014]"
          ></div>
          <ul
            className="grid-cols-6 grid w-72 h-full opacity-10
          absolute left-1/2  top-0"
          >
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
            <li className="border border-purple-900 "></li>
          </ul>
        </div>
        <img
          className="absolute top-2  w-auto group-hover:translate-y-4
           group-hover:scale-[115%] duration-300 ease-in transition-all"
          src="/images/bitcoincore.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="/icons/Group 238267.svg" alt="" />
            <span className="text-xs">New</span>
          </div>
          <img src="/images/home/dot.png" alt="" />
          <div className="flex items-center gap-1">
            <img src="/icons/Group 238266.svg" alt="" />
            <span className="text-xs">September 13, 2024</span>
          </div>
        </div>
        <h2 className="text-sm/8">
          What is Data Leakage and How to Prevent It? What is Data Leakage
        </h2>
        <button className="w-fit mb-8">
          <Link
            href={"/"}
            className="flex items-center gap-1 py-3 px-4 rounded-lg text-xs text-white hover-btn"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
