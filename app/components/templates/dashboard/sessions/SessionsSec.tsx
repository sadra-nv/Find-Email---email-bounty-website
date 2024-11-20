import SessionsTable from "./SessionsTable";

export default function SessionsSec() {
  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0
    pt-8 sm:pt-4 lg:pt-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2 className="w-fit  font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 ">
        Sessions
      </h2>

      <p
        className="
        text-fe-c-text-title text-center w-full
       pb-6 pt-5 sm:pt-6 lg:pb-11 px-4 sm:px-4 lg:px-11"
      >
        All of your active sessions are listed below. End any sessions you
        don&apos;t recognize or trust.
      </p>

      <SessionsTable />
    </section>
  );
}
