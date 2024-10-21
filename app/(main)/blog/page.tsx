import CategoryList from "../../components/templates/blog/CategoryList/CategoryList";
import HeroSection from "../../components/templates/blog/HeroSection/HeroSection";
import FilterableCardGallery from "../../components/templates/blog/FilterableCardGallery/FilterableCardGallery";
import SiteOverview from "../../components/templates/UI/SiteOverview/SiteOverview";
import GlowingArc from "../../components/templates/UI/GlowingArc/GlowingArc";

export default function page() {
  return (
    <main>
      <HeroSection></HeroSection>
      <CategoryList></CategoryList>
      <FilterableCardGallery></FilterableCardGallery>
      <SiteOverview blog className="lg:mb-16">
        <GlowingArc className="scale-x-[140%] scale-y-125 sm:scale-x-100 sm:scale-y-100 translate-y-16 md:translate-y-0" />
      </SiteOverview>
    </main>
  );
}
