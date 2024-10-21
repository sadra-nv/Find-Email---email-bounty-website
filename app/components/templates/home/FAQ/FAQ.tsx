import React from "react";
import QAList from "../../UI/QA/QAList";
import box from "@/public/images/home/m011t0438_g_interrogation_box_07sep22 1.png";
import Image from "next/image";
import Halo from "../../UI/Halo/Halo";
import BGGlow from "../../UI/BGGlow/BGGlow";

export default function FAQ() {
  return (
    <section className="lg:mt-36">
      <div className="container">
        <div className="">
          <div className="flex justify-center mb-32 w-full relative">
            <BGGlow className="top-0 left-0 w-full h-full" />
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
              <BGGlow className=" top-8 sm:-top-20" />

              <QAList faq={"a"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
