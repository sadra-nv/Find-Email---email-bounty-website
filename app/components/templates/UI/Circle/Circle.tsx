export default function Circle() {
  return (
    <div className=" absolute top-0 left-1/2 -translate-x-1/2 flex justify-center z-0">
      <div className="w-[330px] h-[330px] md:w-[750px] md:h-[750px] relative top-0 opacity-25">
        <div
          className="w-full h-full border-2 border-highlight-dark absolute 
        rounded-full flex justify-center items-center bg-how-circle-2 "
        >
          <div
            className="w-[80%] h-[80%] border-2 border-highlight-dark absolute rounded-full
           flex justify-center items-center bg-how-circle-2"
          >
            <div
              className="w-[75%] h-[75%] border-2 border-highlight-dark absolute rounded-full 
            flex justify-center items-center bg-how-circle-2"
            >
              <div
                className="w-[68%] h-[68%] border-2 border-highlight-dark absolute rounded-full 
              flex justify-center items-center bg-how-circle-2"
              ></div>
            </div>
          </div>

          <svg
            className="w-full absolute left-0 top-0 h-1/2"
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 673 338"
            fill="none"
          >
            <path
              d="M628 169L338.5 337.5M338.5 337.5L504.5 46.5M338.5 337.5V0.5M338.5 337.5L170 46.5M338.5 337.5L46 169M338.5 337.5H672.5M338.5 337.5H0.5"
              stroke="#2E0E71"
            />
          </svg>
        </div>

        <span className="rounded-full animate-how-circle opacity-0 w-full h-full absolute bg-highlight-med bg-how-circle"></span>
        <span className="rounded-full animate-how-circle2 opacity-0 w-full h-full absolute bg-highlight-med bg-how-circle "></span>
        <span className="rounded-full animate-how-circle3 opacity-0 w-full h-full absolute bg-highlight-med bg-how-circle"></span>
      </div>
    </div>
  );
}
