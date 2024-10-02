export default function CardHalos() {
  return (
    <>
      <div className=" justify-center items-center hidden xl:flex-col xl:flex xl:gap-y-5">
        <div className="card-halo w-32 h-32 bg-gradient-to-t from-[#f5d0fe] rounded-full relative">
          <div
            className="w-40 h-40 bg-[#030014] rounded-full 
          scale-x-125 -translate-y-16 top-0 absolute -right-8"
          ></div>
          <div className="w-48 h-20 rotate-12 bg-[#030014]  -top-1 absolute -right-8"></div>
        </div>
      </div>
    </>
    // <div className="justify-center items-center hidden xl:flex gap-y-3">
    //   <div className="w-[200px] h-[200px] halo-bg bg-red-950 rounded-full flex justify-center items-start">
    //     {/* <div className="w-[85%] h-[85%] bg-red-950 rounded-full "></div> */}
    //     <svg
    //       className="w-full h-full"
    //       preserveAspectRatio="xMidYMax meet"
    //       viewBox="0 0 140 77"
    //       fill="none"
    //     >
    //       <clipPath id="blog-halo-mask">
    //         <path
    //           d="M10.4998 48C-0.29442 32.1356 -0.000190185 0 -0.000190185 0H139.5C139.5 0 125.33 48.143 100.5 63C80.4732 74.9827 63.4701 80.3711 41.4998 72.5C26.9733 67.2957 19.1802 60.7576 10.4998 48Z"
    //           fill="#D9D9D9"
    //           stroke="#B87D7D"
    //         />
    //       </clipPath>
    //     </svg>
    //   </div>
    // </div>
  );
}
