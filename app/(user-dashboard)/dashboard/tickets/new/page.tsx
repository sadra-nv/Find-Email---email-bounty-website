import NewTicketForm from "@/app/components/templates/dashboard/tickets/NewTicketForm";

export default function NewTicketPage() {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full  mt-4 sm:mt-0 min-h-[31.25rem] sm:min-h-[34.375rem]
    p-8 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2
        className="w-fit bg-blue-grad-btn font-semibold text-white mx-auto
       rounded-lg text-sm  px-6 py-3 mb-10 sm:mb-12"
      >
        Add New Ticket
      </h2>

      <h3 className="text-fe-c-text-title font-semibold text-sm sm:text-base">
        Send a message
      </h3>

      <p className="leading-8 text-xs sm:text-sm mt-4 text-justify text-fe-c-text-title mb-10 sm:mb-12">
        If you would like to discuss anything related to payment, account,
        licensing, partnerships, or have pre-sales questions, you’re at the
        right place.
      </p>

      <NewTicketForm />
    </section>
  );
}
