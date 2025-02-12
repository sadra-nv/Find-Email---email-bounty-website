"use client";

import { type LogsSearchForm, LogsSearchFormSchema } from "@/lib/zod-schemas";
import Search from "../../UI/Search/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useAuthStore from "@/lib/store/authStore";
import { logout } from "@/lib/services/auth/logout";
import { cn } from "@/lib/utils";
import logo from "@/public/images/shield-logo.png";
import Image from "next/image";
import {
  Button,
  Field,
  Input,
  Label,
  Transition,
  Select,
} from "@headlessui/react";
import SecurityModal from "../../UI/Modal/SecurityModal";
import CreditBtn from "./CreditBtn";
import {
  LogsFormResponse,
  submitLogsSearch,
} from "@/lib/services/dashboard/submitLogsSearch";

export default function LogsSearchForm({
  leakFilters,
}: {
  leakFilters: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [methodActive, setMethodActive] = useState({
    "5": true,
    "15": false,
    "20": false,
    "50": false,
    "100": false,
    custom: false,
  });

  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMethodActive({
        "5": true,
        "15": false,
        "20": false,
        "50": false,
        "100": false,
        custom: false,
      });
    }, 300);
  };

  const creditClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const creditId = e.currentTarget.dataset.id;

    if (creditId === "5") {
      setMethodActive({
        "5": true,
        "15": false,
        "20": false,
        "50": false,
        "100": false,
        custom: false,
      });
    } else if (creditId === "15") {
      setMethodActive({
        "5": false,
        "15": true,
        "20": false,
        "50": false,
        "100": false,
        custom: false,
      });
    } else if (creditId === "20") {
      setMethodActive({
        "5": false,
        "15": false,
        "20": true,
        "50": false,
        "100": false,
        custom: false,
      });
    } else if (creditId === "50") {
      setMethodActive({
        "5": false,
        "15": false,
        "20": false,
        "50": true,
        "100": false,
        custom: false,
      });
    } else if (creditId === "100") {
      setMethodActive({
        "5": false,
        "15": false,
        "20": false,
        "50": false,
        "100": true,
        custom: false,
      });
    } else if (creditId === "custom") {
      setMethodActive({
        "5": false,
        "15": false,
        "20": false,
        "50": false,
        "100": false,
        custom: true,
      });
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<LogsSearchForm>({
    defaultValues: {
      filter: leakFilters[0],
      data: "",
    },
    resolver: zodResolver(LogsSearchFormSchema),
  });

  const [success, setSuccess] = useState<null | LogsFormResponse>(null);

  const token = useAuthStore((state) => state.token);

  const submitHandler: SubmitHandler<LogsSearchForm> = async (formData) => {
    console.log(formData);
    const result = await submitLogsSearch(formData, token ? token : "");
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
          <div>
            <div className="rounded-lg w-full md:w-2/3 shadow-sm mx-auto dark:bg-[#36F8FF1F] mt-4 pb-5 lg:pb-6">
              <h3 className="rounded-t-lg text-sm font-bold bg-[#FFFAED] dark:bg-white/10 py-3  px-4 lg:px-5">
                {success.data.data}
              </h3>
              <ul className="space-y-5 divide-y divide-[#21212133] dark:divide-white/20  px-4 lg:px-5">
                {success.data.result.map((data, i) => (
                  <li key={i} className="space-y-3 pt-4 font-semibold">
                    <div>Domain: {data.domain}</div>
                    <div>Username: {data.username}</div>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={openHandler}
              className="bg-orange-grad-btn text-center btn-hover shadow-sm 
         text-white rounded-lg w-full md:w-2/3 mx-auto flex gap-2 justify-center items-center
      font-bold text-xs lg:text-sm py-2.5 px-4 lg:p-5 lg:py-4 btn-hover mt-5"
            >
              <span>Download</span>
              <svg
                className="size-3 lg:size-4"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <path
                  d="M6.11328 11.6534H3.73214C2.22322 11.6534 1 10.632 1 9.13452C1 7.637 2.22322 6.42301 3.73214 6.42301C3.83475 6.42301 3.93604 6.42863 4.03571 6.43957V6.42301H4.07329C4.04849 6.22562 4.03571 6.02452 4.03571 5.82046C4.03571 3.15819 6.21033 1 8.89286 1C10.7094 1 12.293 1.98966 13.1262 3.45535C13.3298 3.42562 13.5381 3.41023 13.75 3.41023C16.0972 3.41023 18 5.29865 18 7.62813C18 9.75303 16.4167 11.3183 14.3571 11.6107H12.1562M9.19643 6.72429V16M9.19643 16L7.04297 13.9173M9.19643 16L11.293 13.9173"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        )}
      </Transition>

      <SecurityModal
        isOpen={isOpen}
        tapClose
        closeHandler={closeHandler}
        className="w-full min-w-fit lg:w-8/12"
      >
        <form>
          <div className="sm:px-20">
            <Image
              width={52}
              height={62}
              placeholder="blur"
              className="mx-auto "
              src={logo}
              alt="logo"
            />
          </div>
          <div className="w-full grid grid-cols-1 xs:grid-cols-2  gap-3 mt-9 lg:gap-6">
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive[5]}
              id="5"
              title="0-5,000 (2 Credit)"
              className="w-full lg:w-full"
            />
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive[15]}
              id="15"
              title="0-100,000 (4 Credit)"
              className="w-full lg:w-full"
            />
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive[20]}
              id="20"
              title="0-15,000 (6 Credit)"
              className="w-full lg:w-full"
            />
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive[50]}
              id="50"
              title="0-20,000 ( 8 Credit)"
              className="w-full lg:w-full"
            />
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive[100]}
              id="100"
              title="0-50,000 ( 20 Credit)"
              className="w-full lg:w-full"
            />
            <CreditBtn
              clickHandler={creditClickHandler}
              active={methodActive.custom}
              id="custom"
              title="Custom"
              className="w-full lg:w-full"
            />
          </div>
          {methodActive.custom && (
            <Transition show={methodActive.custom}>
              <Field
                className="relative transition duration-300 ease-in 
              opacity-100 scale-100
              data-[closed]:opacity-0 data-[closed]:scale-75"
              >
                <p className="text-center text-xs font-bold mt-6 lg:mt-12 mb-3 lg:mb-4 text-fe-c-text-title">
                  * The minimum amount of 10,000 must be a multiple of 1,000.
                </p>
                <Label>
                  <Input
                    type="text"
                    className=" py-3 px-3 lg:px-5  h-12 sm:h-14  text-xs lg:text-sm font-semibold
        bg-[#F3F3F3] dark:bg-white/10 w-full  text-black dark:text-white rounded-md"
                  />
                  <div
                    className="text-xs font-bold bg-black text-white px-6 py-2 rounded-md absolute
                bottom-2 sm:bottom-3 right-3"
                  >
                    0 Credit
                  </div>
                </Label>
              </Field>
            </Transition>
          )}

          <Button
            className="rounded-lg w-full text-white bg-orange-grad-btn h-10 sm:h-14
            mx-auto btn-hover
          gap-2 max-w-[26.25rem] flex justify-center text-sm font-semibold items-center mt-5 sm:mt-9"
          >
            <span>Download</span>
            <svg
              className="size-3"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M6.11328 11.6534H3.73214C2.22322 11.6534 1 10.632 1 9.13452C1 7.637 2.22322 6.42301 3.73214 6.42301C3.83475 6.42301 3.93604 6.42863 4.03571 6.43957V6.42301H4.07329C4.04849 6.22562 4.03571 6.02452 4.03571 5.82046C4.03571 3.15819 6.21033 1 8.89286 1C10.7094 1 12.293 1.98966 13.1262 3.45535C13.3298 3.42562 13.5381 3.41023 13.75 3.41023C16.0972 3.41023 18 5.29865 18 7.62813C18 9.75303 16.4167 11.3183 14.3571 11.6107H12.1562M9.19643 6.72429V16M9.19643 16L7.04297 13.9173M9.19643 16L11.293 13.9173"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </form>
      </SecurityModal>
    </>
  );
}
