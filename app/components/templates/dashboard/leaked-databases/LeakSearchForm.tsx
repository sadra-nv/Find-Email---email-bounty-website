"use client";

import { LeakSearchFormSchema, type LeakSearchForm } from "@/lib/zod-schemas";
import Search from "../../UI/Search/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useAuthStore from "@/lib/store/authStore";
import {
  LeakFormResponse,
  submitLeaksSearch,
} from "@/lib/services/dashboard/submitLeaksSearch";
import { logout } from "@/lib/services/auth/logout";
import { Field, Select, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function LeakSearchForm({
  leakFilters,
}: {
  leakFilters: string[];
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<LeakSearchForm>({
    defaultValues: {
      filter: leakFilters[0],
      data: "",
    },
    resolver: zodResolver(LeakSearchFormSchema),
  });

  const [success, setSuccess] = useState<null | LeakFormResponse>(null);

  const token = useAuthStore((state) => state.token);

  const submitHandler: SubmitHandler<LeakSearchForm> = async (formData) => {
    console.log(formData);
    const result = await submitLeaksSearch(formData, token ? token : "");
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
        setError("data", {
          type: "manual",
          message: error.msg,
        });
      });
      setSuccess(null);
    } else if (result && !result.ok) {
      setError("data", {
        type: "manual",
        message: result.message,
      });

      setSuccess(null);
    } else {
      setError("data", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Field>
          <div
            className="relative w-full md:w-1/3 rounded-lg mb-5 mx-auto block dark:text-neutral-300 text-[#5B5B5B] 
            text-xs bg-[#F3F3F3] dark:bg-white/10"
          >
            <Select
              {...register("filter")}
              className={cn(
                " block w-full appearance-none bg-transparent px-5 py-3 border-none  ",
                "focus:outline-none  ",
                // Make the text of each option black on Windows
                "*:text-black"
              )}
            >
              <option value={leakFilters[0]}>Select Filter...</option>
              {leakFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </Select>
            <svg
              width="32"
              height="32"
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 dark:fill-neutral-300 fill-[#5B5B5B] "
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        </Field>
        <Search
          {...register("data")}
          isSubmitting={isSubmitting}
          dirty={dirtyFields.data}
          error={errors.data}
          placeHolder="Search....."
          className="w-full md:w-2/3 mx-auto block rounded-full border border-neutral-500/10"
        />
      </form>

      <Transition show={Boolean(success)}>
        {success && (
          <div className="rounded-lg w-full md:w-2/3 shadow-sm mx-auto dark:bg-[#36F8FF1F] mt-4 pb-5 lg:pb-6">
            <h3 className="rounded-t-lg text-sm font-bold bg-[#FFFAED] dark:bg-white/10 py-3  px-4 lg:px-5">
              {success.data.data}
            </h3>
            <ul className="space-y-5 divide-y divide-[#21212133] dark:divide-white/20  px-4 lg:px-5">
              {success.data.result.map((data, i) => (
                <li key={i} className="space-y-3 pt-4 font-semibold">
                  <div>Domain: {data.domain}</div>
                  <div>Email: {data.email}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </>
  );
}
