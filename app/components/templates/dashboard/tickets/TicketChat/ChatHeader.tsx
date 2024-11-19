import { Button } from "@headlessui/react";
import pic from "@/public/images/chat-owl.png";
import Image from "next/image";

export default function ChatHeader() {
  return (
    <div
      className="w-full bg-fe-c-bg-light rounded-lg shadow-sm
     sm:rounded-2xl px-5 py-2 sm:px-6 sm:py-4 flex justify-between items-center gap-4"
    >
      <div className="flex gap-2 items-center text-fe-c-text-title justify-start">
        <figure
          className="before:size-4 relative before:absolute before:-bottom-1
        before:right-0 before:scale-50 sm:before:scale-100 before:rounded-full before:bg-green-600 before:border before:border-white"
        >
          <Image
            className="size-9 sm:size-12 object-cover"
            width={50}
            height={50}
            src={pic}
            alt="logo"
          />
        </figure>
        <figcaption className="flex flex-col  ">
          <h5 className="font-semibold text-sm">Find Email</h5>
          <h6 className="text-xs sm:mt-1">support </h6>
        </figcaption>
      </div>

      <Button>
        <svg
          className="size-3 sm:size-4"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M8.1071 16.2094C3.63831 16.2094 0 12.5722 0 8.10471C0 3.63724 3.63831 0 8.1071 0C12.5759 0 16.2142 3.63724 16.2142 8.10471C16.2142 12.5722 12.5759 16.2094 8.1071 16.2094ZM8.1071 1.18606C4.28688 1.18606 1.18641 4.29352 1.18641 8.10471C1.18641 11.9159 4.28688 15.0234 8.1071 15.0234C11.9273 15.0234 15.0278 11.9159 15.0278 8.10471C15.0278 4.29352 11.9273 1.18606 8.1071 1.18606Z"
            className="fill-fe-c-text-title"
          />
          <path
            d="M16.4094 16.9999C16.2592 16.9999 16.1089 16.9445 15.9902 16.8259L14.4084 15.2445C14.179 15.0152 14.179 14.6357 14.4084 14.4064C14.6377 14.177 15.0174 14.177 15.2467 14.4064L16.8286 15.9878C17.058 16.2171 17.058 16.5966 16.8286 16.8259C16.71 16.9445 16.5597 16.9999 16.4094 16.9999Z"
            className="fill-fe-c-text-title"
          />
        </svg>
      </Button>
    </div>
  );
}
