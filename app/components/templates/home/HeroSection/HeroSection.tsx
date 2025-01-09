import StarsSection from "../../UI/StarsSection/StarsSection";
import HeroSearch from "./HeroSearch";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] 
      relative h-[25rem] sm:h-[25rem] lg:h-[34.375rem]"
    >
      <StarsSection className="z-0 xl:h-screen " />
      <div
        className="w-full absolute h-full xl:h-0 after:z-10 after:bottom-0 
        after:right-0 after:w-full after:h-28 after:bg-gradient-to-b sm:after:hidden lg:after:block
      after:to-[#030014] after:via-[#030014] after:from-transparent after:absolute"
      ></div>
      {/* <div
        className="absolute z-10 bottom-0 right-0 w-full h-28 bg-gradient-to-b 
      to-[#030014] via-[#030014] from-transparent"
      ></div> */}

      <div className="container h-full pt-36 lg:pt-64">
        <HeroSearch />
      </div>
    </section>
  );
}
