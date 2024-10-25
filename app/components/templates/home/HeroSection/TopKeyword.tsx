import { useState } from "react";

const data = [
  {
    rank: 1,
    name: "Astra Relay",
    count: 1,
    ip: "152.32.206.74",
  },
  {
    rank: 2,
    name: "Star Relay hjh jtdj rsg jtdh d grrg ",
    count: 2,
    ip: "152.32.206.74.665.978",
  },
  {
    rank: 3,
    name: "Mars Relay",
    count: 3,
    ip: "152.32.206.74",
  },
  {
    rank: 4,
    name: "Moon Relay",
    count: 4,
    ip: "152.32.206.74",
  },
];

export default function TopKeyword() {
  const [dataIndex, setDataIndex] = useState(0);

  const increaseIndex = () => {
    if (dataIndex < data.length - 1) {
      setDataIndex((prevState) => (prevState += 1));
    } else if (dataIndex >= data.length - 1) {
      setDataIndex(0);
    }
  };
  const decreaseIndex = () => {
    if (dataIndex > 0) {
      setDataIndex((prevState) => prevState - 1);
    } else {
      setDataIndex(data.length - 1);
    }
  };
  return (
    <div className="w-full  flex justify-center items-center lg:translate-y-10 lg:pr-6 relative z-20 mb-6 lg:mb-0">
      <div
        className="w-full lg:w-3/5 text-xs  text-neutral-100  
      lg:translate-x-12 flex justify-end items-center gap-2 sm:gap-4"
      >
        <div className="hidden lg:block py-3 px-4 bg-[#D9D9D9] rounded-md  bg-opacity-10">
          Top 10
        </div>
        <div
          className="py-3 font-sans font-bold 
        overflow-hidden max-h-10"
        >
          <div
            className=" tran-fast flex-col flex gap-4 max-w-20 xl:max-w-40 truncate"
            style={{ transform: `translateY(-${dataIndex * 2}rem)` }}
          >
            {data.map((name) => (
              <span
                className="font-sans font-bold"
                key={name.name + name.count}
              >
                {name.rank}
              </span>
            ))}
          </div>
        </div>
        <div className="py-3 px-2 xs:px-4 bg-transparent xs:bg-[#D9D9D9] rounded-md  xs:bg-opacity-10">
          Keyword
        </div>
        <div
          className="py-2 xs:py-3  overflow-hidden  bg-orange-grad-btn-op rounded-md  text-neutral-50
        max-h-8 xs:max-h-10"
        >
          <div
            className=" tran-fast flex-col flex gap-4"
            style={{ transform: `translateY(-${dataIndex * 2}rem)` }}
          >
            {data.map((name) => (
              <span
                className=" block font-semibold truncate max-w-[4.375rem] xs:max-w-20 xl:max-w-28  px-2 xs:px-4"
                key={name.name + name.count}
              >
                {name.name}
              </span>
            ))}
          </div>
        </div>
        <div
          className="py-2 xs:py-3 font-sans font-bold 
        overflow-hidden max-h-8 xs:max-h-10"
        >
          <div
            className=" tran-fast flex-col flex gap-4  max-w-[4.625rem] xs:max-w-20 xl:max-w-20 truncate font-sans font-bold"
            style={{ transform: `translateY(-${dataIndex * 2}rem)` }}
          >
            {data.map((name) => (
              <span
                className="font-sans font-bold"
                key={name.name + name.count}
              >
                {name.count}
              </span>
            ))}
          </div>
        </div>
        <div className="px-2 xs:px-4 py-3 rounded-md bg-transparent xs:bg-[#D9D9D9]  xs:bg-opacity-10">
          IP
        </div>
        <div
          className="py-2 xs:py-3  overflow-hidden  bg-orange-grad-btn-op rounded-md  text-neutral-50
        max-h-8 xs:max-h-10 "
        >
          <div
            className=" tran-fast flex-col flex gap-4"
            style={{ transform: `translateY(-${dataIndex * 2}rem)` }}
          >
            {data.map((name) => (
              <span
                className=" block truncate max-w-[4.625rem] xs:max-w-20 xl:max-w-28  px-2 xs:px-4 font-sans font-bold"
                key={name.name + name.count}
              >
                {name.ip}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ml-auto lg:ml-0">
          <button onClick={increaseIndex}>
            <svg
              className="fill-neutral-50 rotate-180 size-5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
            </svg>
          </button>
          <button onClick={decreaseIndex}>
            <svg
              className="fill-neutral-50 size-5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
