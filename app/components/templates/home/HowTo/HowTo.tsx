import Image from "next/image";
import Circle from "../../UI/Circle/Circle";
import pic from "@/public/images/particle-3d-ball.png";
import HowToItem from "./HowToItem";

export default function HowTo() {
  return (
    <section className="container relative">
      <div className="h-[11.875rem] md:h-[20.625rem] lg:h-[25rem] w-full flex justify-center items-end relative z-20"></div>
      <Circle />
      <div className="h-[50rem] lg:h-[500px] w-full bg-background lg:bg-how-box relative z-20 pb-5 flex justify-center rounded-2xl -translate-y-8">
        <div className=" w-[98%] h-full bg-how-box-2 rounded-e-lg blur-lg  rounded-xl pb-10 hidden lg:flex justify-center">
          <div className="w-[95%] h-full bg-how-box-3  blur-lg shadow-md rounded-xl"></div>
        </div>

        <div
          className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 
        flex justify-start  lg:justify-between items-center flex-col pb-16
 "
        >
          <div className="mb-16 lg:mb-8 flex flex-col justify-start items-center w-full mt-16">
            <Image
              className="absolute top-0 left-1/2 -translate-x-1/2 z-30 -translate-y-8"
              src={pic}
              alt="particle-3d-ball"
              width={62}
              height={62}
              placeholder="blur"
            />
            <h2 className=" font-bold text-lg lg:text-xl">HOW API WORKS</h2>
            <p className="text-center text-sm lg:text-lg mb-6 mt-4">
              Criminal IP’s API integration will detect and block potential
              malicious users accessing login services in real time
            </p>
            <button className="text-sm lg:text-lg p-4 bg-gradient-to-t from-highlight-dark to-highlight-med hover-btn rounded-lg border-none">
              Criminal IP scoring MEtrics
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end items-start gap-12 justify-between w-11/12 xl:w-5/6">
            <HowToItem
              btn1="Critical"
              btn2="Dangerous"
              text="IP addresses of suspected threat actors"
              title="Block access"
            />
            <HowToItem
              btn1="Moderate"
              text="IP address reassessment"
              title="Thorough review"
            />
            <HowToItem
              btn1="Safe"
              btn2="Low"
              text="IP addresses of the service user"
              title="Allow access"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
