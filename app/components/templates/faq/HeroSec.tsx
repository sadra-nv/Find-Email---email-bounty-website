import QAList from "../UI/QA/QAList";
import StarsSection from "../UI/StarsSection/StarsSection";
import woman from "@/public/images/faq/woman.png";
import post from "@/public/images/faq/postcard.png";
import Image from "next/image";

export default function HeroSec() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
              relative hero-grad overflow-hidden min-h-[1100px]"
    >
      <StarsSection
        isStatic
        className="z-0 xl:h-screen max-h-[31.25rem] sm:max-h-[43.75rem] lg:max-h-screen"
      />

      <div
        className="container h-full pt-36 lg:pt-64  z-30   mb-20 lg:mb-32
      flex gap-20 justify-between items-start flex-col sm:flex-row"
      >
        <div
          className=" lg:min-w-[22.5rem] lg:w-[22.5rem] bg-faq-card-grad lg:h-[26.25rem] rounded-xl lg:rounded-3xl
          min-w-[18.75rem] w-[18.75rem] h-[20.625rem] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto
        flex flex-col justify-center items-start text-white shadow-faq-card p-4 lg:p-6 absolute"
        >
          <h2 className="font-bold text-3xl lg:text-5xl w-fit mx-auto ">FAQ</h2>
          <p className="font-bold text-sm lg:text-lg w-fit mx-auto mt-4">
            Answers to your questions
          </p>
          <Image
            width={390}
            height={290}
            className="mt-auto lg:ml-14 w-[16.625rem] h-[12.5rem] lg:w-[24.375rem] lg:h-[18.125rem] lg:translate-y-6 "
            src={woman}
            alt="Illustration of a girl"
          />
        </div>

        <div
          className=" mt-[35.25rem] lg:min-w-[20.4375rem] lg:w-[20.4375rem]  lg:h-[13.375rem] rounded-xl lg:rounded-3xl
          min-w-[18.75rem] w-[18.75rem] h-[20.625rem] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto
        lg:flex flex-col justify-center items-start text-white shadow-faq-card p-4 lg:p-6 absolute bg-faq-card-grad-2
        ml-4  border border-highlight-med hidden "
        >
          <Image
            className="lg:size-[10rem] size-24 mx-auto -translate-y-28 absolute left-1/2 -translate-x-1/2 "
            width={160}
            height={166}
            src={post}
            alt="icon"
          />
          <h2 className="font-bold text-2xl lg:text-3xl w-fit mx-auto mt-auto ">
            Visit Our Blog
          </h2>
          <p className="text-center text-xs lg:text-sm mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          {/* <div
            className="w-full h-full -translate-x-20 translate-y-6
          rounded-xl lg:rounded-3xl z-10
          -rotate-8 absolute border border-highlight-dark"
          ></div> */}
        </div>

        <div className="flex lg:mt-0 mt-[23.125rem] lg:ml-[43.7%] w-full lg:w-7/12 flex-col gap-5 relative min-h-fit  ">
          <QAList faq={1} />
          <div
            className="relative mt-24 sm:min-w-[20.4375rem] sm:w-[20.4375rem]  sm:h-[13.375rem] rounded-xl sm:rounded-3xl
          min-w-[17.5rem] w-[17.5rem] h-[9.375rem] sm:-translate-x-0 sm:left-auto
        flex flex-col justify-center items-start text-white shadow-faq-card p-4 sm:p-6  bg-faq-card-grad-2
          border border-highlight-med lg:hidden mx-auto"
          >
            <Image
              className="sm:size-[10rem] size-24 mx-auto -translate-y-20 sm:-translate-y-28 absolute left-1/2 -translate-x-1/2 "
              width={160}
              height={166}
              src={post}
              alt="icon"
            />
            <h2 className="font-bold text-2xl lg:text-3xl w-fit mx-auto mt-auto ">
              Visit Our Blog
            </h2>
            <p className="text-center text-xs lg:text-sm mx-auto mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
