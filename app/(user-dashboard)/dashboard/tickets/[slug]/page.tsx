import ChatForm from "@/app/components/templates/dashboard/tickets/TicketChat/ChatForm";
import ChatHeader from "@/app/components/templates/dashboard/tickets/TicketChat/ChatHeader";
import ChatItem from "@/app/components/templates/dashboard/tickets/TicketChat/ChatItem";

export default function TicketChatPage() {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full   mt-4 sm:mt-0 min-h-[31.25rem] h-screen 
       mb-16 lg:mb-28 relative"
    >
      <ChatHeader />
      <ul className="pt-6 pb-11 space-y-9 sm:space-y-14 overflow-y-auto h-[calc(100%_-_7rem)] sm:h-[calc(100%_-_10rem)] no-bar">
        <div
          className="h-10 px-8 rounded-full  mx-auto
        top-24 shadow-sm bg-fe-c-bg-light text-fe-c-text-title text-xs sm:text-sm font-semibold w-fit py-3"
        >
          Tody , Jun20
        </div>
        <ChatItem support={false} />
        <ChatItem support />
        <ChatItem support={false} />
        <ChatItem support />
        <ChatItem support={false} />
        <ChatItem support />
      </ul>
      <ChatForm />
    </section>
  );
}
