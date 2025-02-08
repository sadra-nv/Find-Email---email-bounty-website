"use client";

import { Button, Textarea, Transition } from "@headlessui/react";
import search from "@/public/icons/search.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CrackerForm, CrackerFormSchema } from "@/lib/zod-schemas";
import { cn } from "@/lib/utils";
import {
  CrackerFormResponse,
  submitCrackerForm,
} from "@/lib/services/submitCrackerForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/templates/UI/ShadTable/ShadTable";

export default function HeroSec() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<CrackerForm>({
    defaultValues: {
      hashes: [],
    },
    resolver: zodResolver(CrackerFormSchema),
  });

  const [success, setSuccess] = useState<CrackerFormResponse | null>(null);

  const submitHandler: SubmitHandler<CrackerForm> = async (formData) => {
    const result = await submitCrackerForm(formData);
    setSuccess(null);
    // setSubscribe(false);

    if (result) {
      setSuccess(result);
    } else {
      setError("hashes", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(null);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
     bg-[#0a081ec0] relative z-30 my-6 lg:my-12  
 border border-neutral-700/30 "
      >
        <p className="text-justify w-fit mx-auto lg:text-xl font-semibold text-sm leading-7 ">
          Enter your hashes here and we will attempt to decrypt them for free
          online.
        </p>
        <p
          className="text-justify w-fit mx-auto bg-gold-grad rounded-lg
    py-3 px-5 lg:mt-8 lg:mb-9 mt-6  mb-5
    text-black lg:px-9 lg:py-4 lg:text-sm text-xs"
        >
          max. <span className="text-red-600 font-bold">32</span> separated by
          newline
        </p>

        <div className="w-full lg:w-2/3 mx-auto">
          <Textarea
            {...register("hashes")}
            placeholder="Enter MD5 hashes here"
            className="bg-white/10 p-4 lg:px-6 lg:py-5 w-full   inline-block rounded-lg 
      lg:rounded-xl text-neutral-500 text-xs lg:text-sm outline-none
       focus:border-violet-800 border-2 border-transparent"
            rows={7}
          />

          {errors.hashes && dirtyFields.hashes && (
            <p
              className={cn(
                "hidden gap-2 justify-start items-center text-sm text-red-500  ",
                {
                  " mt-3 flex ": errors.hashes,
                }
              )}
            >
              <svg
                width="16"
                height="16"
                className="fill-red-500"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {errors.hashes.message}
            </p>
          )}
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="mx-auto flex gap-1 justify-center items-center py-3 lg:py-4  lg:mt-9 mt-4
    w-full rounded-lg bg-orange-grad-btn xs:w-40 btn-hover"
        >
          {!isSubmitting && (
            <>
              <Image src={search} width={21} height={23} alt="icon" />
              <span className="text-xs font-bold lg:text-base text-white">
                Start Search
              </span>
            </>
          )}

          {isSubmitting && (
            <span className="text-xs font-bold lg:text-base text-white">
              Searching...
            </span>
          )}
        </Button>
      </form>

      {success && (
        <Transition show={Boolean(success)}>
          <div
            className="p-6 lg:py-11 backdrop-blur rounded-xl lg:rounded-3xl
     bg-[#0a081ec0] relative z-30 mb-20 lg:mb-32
 border border-neutral-700/30 
 data-[closed]:opacity-0 transition ease-in-out duration-300 "
          >
            <p
              className="text-justify w-fit mx-auto lg:text-xl font-semibold text-sm leading-7 
           lg:mb-9   mb-5"
            >
              <span className="font-bold text-highlight-med">
                {success?.data.stats.all}
              </span>
              <span> Hashes were checked, </span>
              <span className="font-bold text-highlight-med">
                {success?.data.stats.found}
              </span>
              <span> Found</span>
            </p>
            <Table className="w-full text-nowrap">
              <TableHeader className="w-full">
                <TableRow className="border-none w-full bg-white/10">
                  <TableHead
                    className="text-sm font-bold w-full text-neutral-50 h-16 
             pl-4 lg:pl-11"
                  >
                    HASH
                  </TableHead>
                  <TableHead
                    className="text-sm font-bold w-full mr-auto text-neutral-50 h-16 
             px-4 lg:px-11"
                  >
                    PASSWORD
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className=" ">
                {success?.data.result.map((item, index) => (
                  <TableRow
                    key={index}
                    className=" text-neutral-50 hover:bg-neutral-400/20 border-b border-[#CDCDCD]/50 last:border-b-0"
                  >
                    <TableCell
                      className=" py-5 
               pl-4 lg:pl-11"
                    >
                      {item.hash}
                    </TableCell>

                    <TableCell className="px-4 lg:px-11 text-center py-5">
                      {item.password}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Transition>
      )}
    </>
  );
}
