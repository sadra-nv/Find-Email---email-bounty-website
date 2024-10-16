import SiteOverview from "./components/templates/UI/SiteOverview/SiteOverview";
import FAQ from "./components/templates/home/FAQ/FAQ";
import HeroSection from "./components/templates/home/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SiteOverview className="z-30 relative -translate-y-20 sm:-translate-y-44" />
      <FAQ />
    </>
  );
}
