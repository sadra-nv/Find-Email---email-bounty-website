import DashInput from "@/app/components/templates/UI/Inputs/DashInput";
import { Button, Textarea } from "@headlessui/react";

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

      <form>
        <DashInput
          label="Subject"
          placeholder="Subject"
          className="w-full sm:max-w-[21.875rem]"
        />
        <Textarea
          placeholder="Write a message"
          cols={8}
          className="w-full rounded-lg  mt-5 sm:mt-6 bg-neutral-400/25 dark:bg-white/15
           py-3  px-4 h-44 lg:py-3 lg:px-5 text-fe-c-text-title text-xs/3 "
        />

        <Button
          className="flex gap-2 text-white items-center w-fit justify-center text-sm sm:text-sm 
        font-semibold py-4 px-6 rounded-lg mt-6 sm:mt-8 group
         bg-orange-grad-btn ml-auto shadow-md btn-hover"
        >
          <span className="">Send Ticket</span>
          <svg
            className="group-hover:translate-x-1 tran-fast"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M2.07724 13C1.33084 13 0.857679 12.7468 0.557787 12.4469C-0.0286699 11.8604 -0.441855 10.6142 0.877672 7.96847L1.45746 6.81555C1.53077 6.66227 1.53077 6.34238 1.45746 6.1891L0.877672 5.03618C-0.44852 2.39046 -0.0286699 1.13758 0.557787 0.557787C1.13758 -0.0286699 2.39046 -0.44852 5.02952 0.877672L10.7341 3.72998C12.1536 4.4364 12.9333 5.42271 12.9333 6.50233C12.9333 7.58194 12.1536 8.56825 10.7408 9.27467L5.03618 12.127C3.74331 12.7734 2.78366 13 2.07724 13ZM2.07724 1.00429C1.71737 1.00429 1.43747 1.09093 1.2642 1.2642C0.777708 1.74403 0.970972 2.99025 1.77069 4.58301L2.35048 5.7426C2.56374 6.17578 2.56374 6.82888 2.35048 7.26205L1.77069 8.41497C0.970972 10.0144 0.777708 11.254 1.2642 11.7338C1.74403 12.2203 2.99025 12.027 4.58968 11.2273L10.2943 8.37499C11.3406 7.85518 11.9337 7.16875 11.9337 6.49566C11.9337 5.82257 11.3339 5.13615 10.2876 4.61633L4.58301 1.77069C3.57004 1.2642 2.69702 1.00429 2.07724 1.00429Z"
              fill="white"
            />
            <path
              d="M5.69427 7.00257H2.09552C1.82229 7.00257 1.5957 6.77599 1.5957 6.50275C1.5957 6.22952 1.82229 6.00293 2.09552 6.00293H5.69427C5.9675 6.00293 6.19409 6.22952 6.19409 6.50275C6.19409 6.77599 5.9675 7.00257 5.69427 7.00257Z"
              fill="white"
            />
          </svg>
        </Button>
      </form>
    </section>
  );
}
