import TicketNavBtn from "./TicketNavBtn";
import TicketsItem from "./TicketsItem";
import Link from "next/link";

export default function TicketsSec({
  activeTag,
}: {
  activeTag: "all" | "open" | "close" | null;
}) {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full  mt-4 sm:mt-0 min-h-[31.25rem] sm:min-h-[34.375rem]
    py-8 sm:py-4 lg:py-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2
        className="w-fit bg-blue-grad-btn font-semibold text-white mx-auto
       rounded-lg text-sm  px-6 py-3 mb-10 sm:mb-12"
      >
        Tickets
      </h2>

      <div className="block md:hidden mb-12 overflow-x-hidden w-11/12 xs:max-w-[21.25rem] mx-auto">
        <div
          className="bg-orange-grad-btn p-2 rounded-lg  overflow-x-auto thin-bar
      flex justify-between  items-center  mx-auto mt-10 text-sm font-bold"
        >
          <TicketNavBtn activeTag={activeTag} tag="all" title="All Ticketes">
            <div></div>
          </TicketNavBtn>
          <TicketNavBtn activeTag={activeTag} tag="open" title="Open">
            <div></div>
          </TicketNavBtn>
          <TicketNavBtn activeTag={activeTag} tag="close" title="Closed">
            <div></div>
          </TicketNavBtn>
        </div>
      </div>

      <Link
        href="/dashboard/tickets/new"
        className="flex gap-2 text-white items-center w-fit justify-center text-sm sm:text-sm 
        font-semibold py-4 px-6 rounded-lg
         bg-orange-grad-btn ml-auto mb-16 shadow-md mr-4 sm:mr-9 btn-hover"
      >
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path
            d="M8.90957 15.7827H4.25623C1.51717 15.7827 0 14.2757 0 11.5265V4.25624C0 1.51717 1.50698 0 4.25623 0H8.90957C11.6486 0 13.1658 1.50699 13.1658 4.25624V11.5265C13.1658 14.2757 11.6588 15.7827 8.90957 15.7827ZM4.25623 1.52736C2.34194 1.52736 1.52735 2.34195 1.52735 4.25624V11.5265C1.52735 13.4407 2.34194 14.2553 4.25623 14.2553H8.90957C10.8239 14.2553 11.6384 13.4407 11.6384 11.5265V4.25624C11.6384 2.34195 10.8239 1.52736 8.90957 1.52736H4.25623Z"
            fill="white"
          />
          <path
            d="M8.46284 8.65529H5.15357C4.73609 8.65529 4.38989 8.30909 4.38989 7.89161C4.38989 7.47413 4.73609 7.12793 5.15357 7.12793H8.46284C8.88032 7.12793 9.22652 7.47413 9.22652 7.89161C9.22652 8.30909 8.88032 8.65529 8.46284 8.65529Z"
            fill="white"
          />
          <path
            d="M6.80103 10.3142C6.38355 10.3142 6.03735 9.96797 6.03735 9.55049V6.24122C6.03735 5.82374 6.38355 5.47754 6.80103 5.47754C7.21851 5.47754 7.56471 5.82374 7.56471 6.24122V9.55049C7.56471 9.96797 7.21851 10.3142 6.80103 10.3142Z"
            fill="white"
          />
        </svg>
        <span className="">Add new ticked</span>
      </Link>

      <div className="divide-y divide-fe-c-text-sub">
        <TicketsItem className="bg-[#F3F3F3] dark:bg-white/10" />
        <TicketsItem />
        <TicketsItem className="bg-[#F3F3F3] dark:bg-white/10" />
        <TicketsItem />
        <TicketsItem />
        <TicketsItem />
      </div>
    </section>
  );
}
