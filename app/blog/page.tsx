import CategoryList from "../components/templates/home/CategoryList/CategoryList"
import HeroSection from "../components/templates/home/HeroSection/HeroSection"
import FilterableCardGallery from "../components/templates/home/FilterableCardGallery/FilterableCardGallery"
import SiteOverview from "../components/templates/home/SiteOverview/SiteOverview"

export default function page() {
    return (
        <>
            <HeroSection></HeroSection>
            <div className="">
                {/* <CategoryList></CategoryList> */}
                {/* <FilterableCardGallery></FilterableCardGallery> */}
            </div>
            <SiteOverview></SiteOverview>
        </>
    )
}
