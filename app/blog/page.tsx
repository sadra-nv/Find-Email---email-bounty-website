import Link from "next/link"
import CategoryList from "../components/templates/home/CategoryList/CategoryList"
import HeroSection from "../components/templates/home/HeroSection/HeroSection"
import FilterableCardGallery from "../components/templates/home/FilterableCardGallery/FilterableCardGallery"

export default function page() {
    return (
        <div>
            <HeroSection></HeroSection>
            <CategoryList></CategoryList>
            <FilterableCardGallery></FilterableCardGallery>
            <div className="">
                
            <img src="/vectors/Container.svg" alt="" />
            </div>
        </div>
    )
}
