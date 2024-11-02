import { cn } from "@/lib/utils";
import { Field, Label, Select } from "@headlessui/react";
import OrdersTable from "./OrdersTable";

export default function OrdersSec() {
  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        User Order List
      </h2>

      <Field>
        <div className="relative mb-12 w-fit px-4 flex gap-4 justify-center items-center">
          <Label className="text-sm/6 font-bold text-fe-c-text-title">
            Show
          </Label>
          <Select
            className={cn(
              "  block w-full  appearance-none rounded-lg border-none  py-2.5 px-5 pr-10 text-sm/6 text-white",
              "dark:bg-dark-card bg-[#152330] space-y-1 font-sans",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white",
              "*:text-neutral-100 *:rounded-none"
            )}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>
          <svg
            className="group pointer-events-none absolute top-1/2 -translate-y-1/2 right-9"
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.50002 4C3.34455 4 3.18909 3.94431 3.06635 3.82496L0.177965 1.0164C-0.0593217 0.785669 -0.0593217 0.403769 0.177965 0.173037C0.415252 -0.0576789 0.808004 -0.0576789 1.04529 0.173037L3.50002 2.55992L5.95471 0.173037C6.192 -0.0576789 6.58475 -0.0576789 6.82203 0.173037C7.05932 0.403769 7.05932 0.785669 6.82203 1.0164L3.93368 3.82496C3.81094 3.94431 3.65548 4 3.50002 4Z"
              fill="white"
            />
          </svg>
        </div>
      </Field>

      <OrdersTable />
    </section>
  );
}
