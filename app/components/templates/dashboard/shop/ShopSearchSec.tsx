import Search from "../../UI/Search/Search";
import SearchNavBtn from "./SearchNavBtn";
import ShopTable from "./ShopTable";

export default function ShopSearchSec() {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 
    pt-8 sm:pt-4 lg:pt-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2 className="w-fit bg-blue-grad-btn font-semibold text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Shop
      </h2>

      <div className="w-full sm:w-10/12 xl:w-3/4 mx-auto  px-4 lg:px-11">
        <div className="flex-col-reverse md:flex-row flex justify-between items-start w-full">
          <Search placeHolder="Search Project..." className="w-full " />
        </div>

        <div className="w-full mb-11 overflow-x-hidden">
          <div
            className="bg-orange-grad-btn p-2 rounded-lg  overflow-x-auto thin-bar
      flex justify-between  items-center  mx-auto mt-10 text-sm font-bold"
          >
            <SearchNavBtn title="All" active />
            <SearchNavBtn title="Spam Tools" active={false} />
            <SearchNavBtn title="Lead" active={false} />
            <SearchNavBtn title="Program" active={false} />
            <SearchNavBtn title="Email:Pass" active={false} />
            <SearchNavBtn title="Other" active={false} />
          </div>
        </div>
      </div>

      <ShopTable />
    </section>
  );
}
