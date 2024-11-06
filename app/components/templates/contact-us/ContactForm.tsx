import { Button, Field, Label, Textarea } from "@headlessui/react";
import MainInput from "../UI/Inputs/MainInput";

export default function ContactForm() {
  return (
    <section className="container">
      <form
        className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
         bg-[#0a081ec0] relative z-30 mt-6 lg:mt-12 mb-20 lg:mb-32
     border border-neutral-700/30 w-full sm:w-1/2 xl:w-5/12 mx-auto"
      >
        <div>
          <h2 className="text-white font-bold text-base lg:text-xl text-center">
            Send a message
          </h2>
          <p className="text-justify leading-8 text-xs lg:text-base mt-4 lg:mb-11 mb-16">
            If you would like to discuss anything related to payment, account,
            licensing, partnerships, or have pre-sales questions, you’re at the
            right place.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-6 ">
          <MainInput label="Full Name" placeholder="Alireza Rahmani" />

          <MainInput
            type="email"
            label="Email"
            placeholder="ar.sing7979@gmail.com"
          />
          <Field>
            <Label className="text-white mb-4 block text-sm font-bold lg:text-lg">
              Message
            </Label>
            <Textarea
              placeholder="Enter MD5 hashes here"
              className="bg-white/10  w-full  py-4 px-4 lg:py-5 lg:px-5
               inline-block rounded-lg lg:mb-9 mb-4 
             text-neutral-100  text-xs lg:text-sm "
              rows={7}
            />
          </Field>
        </div>
        <Button
          className="mx-auto flex gap-1 justify-center items-center py-3 lg:py-4 
    w-full rounded-lg bg-orange-grad-btn xs:w-40 btn-hover group lg:mt-9 mt-4"
        >
          <span className="text-xs font-bold lg:text-base text-white">
            Submit
          </span>
          <svg
            className="group-hover:translate-x-1 tran-fast fill-white"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </Button>
      </form>
    </section>
  );
}
