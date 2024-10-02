export default function CardHalos() {
  return (
    <>
      <div className="card-halo justify-center items-center hidden xl:flex-col xl:flex xl:gap-y-5 perspective-1600">
        <img
          src="/images/halo.png"
          alt="article card halo"
          width={128}
          height={80}
          className="w-32 h-20"
        />
        <img
          className="w-32 h-20 blur-sm rotate-180 scale-90"
          src="/images/halo.png"
          alt="article card halo"
          width={128}
          height={80}
        />
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
