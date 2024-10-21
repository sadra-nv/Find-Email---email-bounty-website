import GlowingArc from "../../UI/GlowingArc/GlowingArc";
import APICode from "./APICode";
import APIPic from "./APIPic";

export default function APIInteg() {
  return (
    <section className="relative overflow-x-hidden">
      <div className=" container w-full h-fit relative z-20 mb-20 lg:mb-48">
        <GlowingArc className="  scale-x-[140%] scale-y-125 sm:scale-x-100 sm:scale-y-100" />
        <div className="grid-cols-1 grid lg:grid-cols-2 gap-16  w-full h-full text-neutral-100 mt-6 lg:mt-16">
          <APIPic />
          <APICode />
        </div>
      </div>
    </section>
  );
}
