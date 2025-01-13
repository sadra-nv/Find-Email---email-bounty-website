import CategoryList from "../../components/templates/blog/CategoryList/CategoryList";
import HeroSection from "../../components/templates/blog/HeroSection/HeroSection";
import FilterableCardGallery from "../../components/templates/blog/FilterableCardGallery/FilterableCardGallery";
import SiteOverview from "../../components/templates/UI/SiteOverview/SiteOverview";
import GlowingArc from "../../components/templates/UI/GlowingArc/GlowingArc";

export default function page({
  searchParams,
}: {
  searchParams: {
    page: number | null;
    query: string | null;
    filter_method: "search" | "tags" | "category" | null;
  };
}) {
  // filter_type=tags&filter=logs&page=1&per_page=4
  return (
    <main>
      <HeroSection></HeroSection>
      <CategoryList></CategoryList>
      <FilterableCardGallery params={searchParams}></FilterableCardGallery>
      <SiteOverview blog className="lg:mb-16">
        <GlowingArc className="scale-x-[140%] scale-y-125 sm:scale-x-100 sm:scale-y-100 translate-y-16 md:translate-y-0" />
      </SiteOverview>
    </main>
  );
}
