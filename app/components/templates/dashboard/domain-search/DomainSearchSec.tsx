"use client";

import Search from "../../UI/Search/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useAuthStore from "@/lib/store/authStore";
import { logout } from "@/lib/services/auth/logout";
import { Transition } from "@headlessui/react";
import { DomainForm, DomainFormSchema } from "@/lib/zod-schemas";
import {
  DomainFormResponse,
  submitDomainSearch,
} from "@/lib/services/dashboard/submitDomainSearch";

export default function DomainSearchSec() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<DomainForm>({
    defaultValues: {
      domain: "",
    },
    resolver: zodResolver(DomainFormSchema),
  });

  const [success, setSuccess] = useState<null | DomainFormResponse>(null);

  const token = useAuthStore((state) => state.token);

  const submitHandler: SubmitHandler<DomainForm> = async (formData) => {
    console.log(formData);
    const result = await submitDomainSearch(formData, token ? token : "");
    // setSubscribe(false);
    setSuccess(null);

    if (result === 401) {
      await logout();
      return;
    } else if (result && result.ok) {
      setSuccess(result);
      // setSubscribe(true);
    } else if (result && result.code == 422) {
      result.errors?.map((error) => {
        setError("domain", {
          type: "manual",
          message: error.msg,
        });
      });
      setSuccess(null);
    } else if (result && !result.ok) {
      setError("domain", {
        type: "manual",
        message: result.message,
      });

      setSuccess(null);
    } else {
      setError("domain", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(null);
    }
  };

  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-0">
        Domain Search
      </h2>

      <h2
        className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row
        text-lg font-semibold  mt-12  mb-7"
      >
        <span className=" inline-block text-fe-c-text-title ">
          Find email addresses from any company
        </span>
        <span className="text-green-700 inline-block font-sans">
          [ Record : 509,470,517 ]
        </span>
      </h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Search
          {...register("domain")}
          isSubmitting={isSubmitting}
          dirty={dirtyFields.domain}
          error={errors.domain}
          placeHolder="Search....."
          className="w-full md:w-2/3 mx-auto block rounded-full border border-neutral-500/10"
        />
      </form>

      <Transition show={Boolean(success)}>
        {success && (
          <div className="rounded-lg w-full md:w-2/3 shadow-sm mx-auto dark:bg-[#36F8FF1F] mt-4 pb-5 lg:pb-6">
            <h3 className="rounded-t-lg text-sm font-bold bg-[#FFFAED] dark:bg-white/10 py-3  px-4 lg:px-5">
              {success.data.domain}
            </h3>
            <ul className="space-y-5 divide-y divide-[#21212133] dark:divide-white/20  px-4 lg:px-5">
              {success.data.result.map((data, i) => (
                <li key={i} className="space-y-3 pt-4 font-semibold">
                  <div>Email: {data}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </section>
  );
}
