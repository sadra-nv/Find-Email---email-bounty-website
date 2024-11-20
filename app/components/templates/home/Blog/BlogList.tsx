import Image from "next/image";
import FilterableCard from "../../blog/FilterableCardGallery/FiltrableCard";
import Halo from "../../UI/Halo/Halo";
import pic from "@/public/icons/email-icon.png";
import Link from "next/link";

export default function BlogList() {
  return (
    <section className="container mb-24">
      <div className="w-full flex gap-2  justify-center relative items-center mb-6 sm:mb-9">
        <Link
          className="hidden sm:block text-base group lg:text-sm w-fit mx-auto px-5 py-3
           bg-back-dark btn-hover overflow-hidden rounded-md absolute left-0"
          href="/blog"
        >
          <span className="ml-2">View All</span>

          <svg
            width="16"
            height="16"
            className="fill-neutral-50 ml-2 inline-block tran-fast group-hover:translate-x-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Link>

        <Image
          src={pic}
          alt="email icon"
          width={30}
          height={30}
          className="size-4 sm:size-7 "
        />
        <h2 className="text-center font-semibold text-lg sm:text-3xl ">Blog</h2>
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
          className="block  sm:hidden text-base group lg:text-sm w-fit mx-auto px-6 py-3
           bg-back-dark btn-hover overflow-hidden rounded-md "
          href="/blog"
        >
          <span className="ml-2">View All</span>

          <svg
            width="16"
            height="16"
            className="fill-neutral-50 ml-2 inline-block tran-fast group-hover:translate-x-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
