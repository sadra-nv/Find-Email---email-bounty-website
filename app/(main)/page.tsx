import SiteOverview from "../components/templates/UI/SiteOverview/SiteOverview";
import BlogList from "../components/templates/home/Blog/BlogList";
import FAQ from "../components/templates/home/FAQ/FAQ";
import HeroSection from "../components/templates/home/HeroSection/HeroSection";
import Features from "../components/templates/home/Features/Features";
import HowTo from "../components/templates/home/HowTo/HowTo";
import APIInteg from "../components/templates/home/APIInteg/APIInteg";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SiteOverview className="z-30 relative -translate-y-20 sm:-translate-y-44 max-h-[43.75rem]" />
      <Features />
      <APIInteg />
      <BlogList />
      <HowTo />
      <FAQ />
    </main>
  );
}
