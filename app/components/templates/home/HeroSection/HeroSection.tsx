import StarsSection from "../../UI/StarsSection/StarsSection";
import SelectHome from "../SelectHome/SelectHome";
import HeroSearch from "./HeroSearch";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
      relative hero-grad xl:min-h-screen h-[31.25rem] sm:h-[43.75rem] xl:h-[56.25rem] "
    >
      {/* <StarsSection className="z-0" /> */}
      <div
        className="absolute z-10 bottom-0 right-0 w-full h-28 bg-gradient-to-b 
      to-[#030014] via-[#030014] from-transparent"
      ></div>

      <div className="container h-full pt-28 lg:pt-72">
        <HeroSearch />
        {/* <SelectHome /> */}
      </div>
    </section>
  );
}
