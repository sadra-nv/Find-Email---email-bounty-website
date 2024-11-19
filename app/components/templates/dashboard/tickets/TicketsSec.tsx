import TicketsItem from "./TicketsItem";

export default function TicketsSec() {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full  mt-4 sm:mt-0 min-h-[31.25rem] sm:min-h-[34.375rem]
    py-8 sm:py-4 lg:py-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2 className="w-fit bg-blue-grad-btn font-semibold text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Tickets
      </h2>

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
