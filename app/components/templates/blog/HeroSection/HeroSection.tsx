import Image from "next/image";
import PlanetaryOrbits from "../PlanetaryOrbits/PlanetaryOrbits";
import StarsSection from "../../UI/StarsSection/StarsSection";
import email from "@/public/icons/email-icon.png";
import database from "@/public/images/3d-database.png";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014]
      min-h-[25rem] sm:min-h-[25rem]  lg:min-h-[43.75rem] 
      relative   overflow-x-hidden max-h-[56.25rem] lg:max-h-[68.75rem]"
    >
      <StarsSection></StarsSection>
      <div className="absolute z-40 bottom-0 right-0 w-full h-28 bg-gradient-to-b to-[#030014] via-[#030014] from-transparent"></div>
      <div className="container ">
        <div className="relative min-h-fit overflow-y-hidden pt-40 lg:pt-52 overflow-hidden flex items-center justify-center">
          <video
            className="mix-blend-lighten translate-y-2 sm:translate-y-7 relative z-20"
            autoPlay
            muted
            loop
          >
            <source src="/videos/q-c3d7becf.webm" type="video/webm" />
            Your browser does not support the video playback.
          </video>
          <div className="absolute z-20 flex items-center gap-1 top-24 sm:top-40 lg:top-52 left-1/2 -translate-x-1/2 ">
            <Image
              className="w-4 sm:w-8 "
              src={email}
              placeholder="blur"
              alt="email"
              width={48}
              height={48}
            />
            <h1 className="text-xl font-bold sm:text-2xl md:text-4xl">Blog</h1>
          </div>
          <Image
            className="animate-databse translate-y-9 w-16 sm:w-24 md:w-28 absolute lg:w-36 xl:w-40 z-30"
            src={database}
            alt="database"
            placeholder="blur"
            width={160}
            height={160}
          />
          <PlanetaryOrbits></PlanetaryOrbits>
        </div>
      </div>
    </section>
  );
}
// 06265c
