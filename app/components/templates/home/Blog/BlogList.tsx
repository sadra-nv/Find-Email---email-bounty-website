import Image from "next/image";
import FilterableCard from "../../blog/FilterableCardGallery/FiltrableCard";
import Halo from "../../UI/Halo/Halo";
import pic from "@/public/images/Email 1.png";
import Link from "next/link";

export default function BlogList() {
  return (
    <section className="container mb-24">
      <div className="w-full flex gap-2 sm:gap-4 justify-center items-center mb-6 sm:mb-9">
        <Image
          src={pic}
          alt="email icon"
          width={30}
          height={30}
          className="size-7 sm:size-14"
        />
        <h2 className="text-center text-lg sm:text-3xl ">Blog</h2>
      </div>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid gap-4">
        <FilterableCard />
        <div className="hidden xl:flex justify-center items-start pt-9">
          <Halo className="size-36" />
        </div>
        <FilterableCard />
        <div className="hidden xl:flex justify-center items-start pt-9">
          <Halo className="size-36" />
        </div>
        <FilterableCard />
      </div>
      <div className="w-full mt-6 lg:mt-8">
        <Link
          className="block text-base lg:text-lg w-fit mx-auto px-6 py-3 bg-back-dark btn-hover overflow-hidden rounded-md"
          href="/blog"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
