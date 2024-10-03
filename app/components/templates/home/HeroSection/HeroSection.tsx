import PlanetaryOrbits from "../PlanetaryOrbits/PlanetaryOrbits";
import StarsSection from "../StarsSection/StarsSection";

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-b from-[#030014] via-[#030014] to-[#030014] z-10">
            <div className="container">
                <div className="relative min-h-fit overflow-y-hidden pt-40 lg:pt-52 overflow-hidden flex items-center justify-center">
                    <video
                        className="mix-blend-lighten relative z-10"
                        autoPlay
                        muted
                        loop
                    >
                        <source src="/videos/q-c3d7becf.webm" type="video/webm" />
                        Your browser does not support the video playback.
                    </video>
                    <div className="absolute flex items-center gap-0.5 top-24 sm:top-40 lg:top-52 left-1/2 -translate-x-1/2 ">
                        <img className="w-6 sm:w-8 md:w-12" src="/icons/Email.svg" alt="" />
                        <h1 className="text-xl sm:text-2xl md:text-4xl">Blog</h1>
                    </div>
                    <img
                        className="animate-databse w-16 sm:w-24 md:w-28 absolute lg:w-36 xl:w-40 z-30"
                        src="/images/database.svg"
                        alt=""
                    />
                    <PlanetaryOrbits></PlanetaryOrbits>
                    <StarsSection></StarsSection>
                    <div className="absolute z-40 bottom-0 right-0 w-full h-28 bg-gradient-to-b to-[#030014] via-[#030014] from-transparent"></div>
                </div>
            </div>
        </div>
    );
}
// 06265c
