import CategoryList from "../components/templates/home/CategoryList/CategoryList"
import HeroSection from "../components/templates/home/HeroSection/HeroSection"
import FilterableCardGallery from "../components/templates/home/FilterableCardGallery/FilterableCardGallery"
import SiteOverview from "../components/templates/home/SiteOverview/SiteOverview"

export default function page() {
    return (
        <div>
            <HeroSection></HeroSection>
            <div className="hidden">
            <CategoryList></CategoryList>
            <FilterableCardGallery></FilterableCardGallery>
            </div>
            <SiteOverview></SiteOverview>
        </div>
    )
}
