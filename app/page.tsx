import SiteOverview from "./components/templates/UI/SiteOverview/SiteOverview";
import BlogList from "./components/templates/home/Blog/BlogList";
import FAQ from "./components/templates/home/FAQ/FAQ";
import HeroSection from "./components/templates/home/HeroSection/HeroSection";
import Features from "./components/templates/home/Features/Features";
import HowTo from "./components/templates/home/HowTo/HowTo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SiteOverview className="z-30 relative -translate-y-20 sm:-translate-y-44" />
      <Features />
      <BlogList />
      <HowTo />
      <FAQ />
    </>
  );
}
