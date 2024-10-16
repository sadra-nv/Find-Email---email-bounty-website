import CategoryList from "../components/templates/blog/CategoryList/CategoryList";
import HeroSection from "../components/templates/blog/HeroSection/HeroSection";
import FilterableCardGallery from "../components/templates/blog/FilterableCardGallery/FilterableCardGallery";
import SiteOverview from "../components/templates/UI/SiteOverview/SiteOverview";
import GlowingArc from "../components/templates/UI/GlowingArc/GlowingArc";

export default function page() {
  return (
    <>
      <HeroSection></HeroSection>
      <CategoryList></CategoryList>
      <FilterableCardGallery></FilterableCardGallery>
      <SiteOverview blog>
        <GlowingArc />
      </SiteOverview>
    </>
  );
}
