"use client";

import logo from "@/public/images/shield-logo.png";
import Image from "next/image";
import { Button, Field, Input, Label, Transition } from "@headlessui/react";
import { useState } from "react";
import SecurityModal from "../../UI/Modal/SecurityModal";
import Search from "../../UI/Search/Search";
import CreditBtn from "./CreditBtn";

export default function LogsSearchSec() {
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

  // const customCreditClickHandler = ()=>{

  // }

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

  return (
    <section
      className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl
     bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28"
    >
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Logs Database
      </h2>
      <div className="w-fit mx-auto">
        <p className="text-sm font-semibold w-fit mx-auto text-center leading-8">
          You will not download duplicate results anymore, ensuring that your
          credits are used efficiently
        </p>

        <p
          className="text-xs  bg-gold-grad sm:rounded-xl mt-5 text-center sm:py-3 px-8 text-neutral-800 w-full
        absolute left-0 sm:relative py-5 leading-loose font-semibold"
        >
          If you have more than <span className="font-sans">400</span> credits,
          you can perform searches based on port and subdomain
        </p>
      </div>

      <h2 className="flex text-center sm:justify-center flex-col gap-2 sm:gap-0 sm:flex-row  text-lg font-semibold mt-36 sm:mt-12 mb-7">
        <span className=" inline-block text-fe-c-text-title ">
          Search in Logs Database.
        </span>
        <span className="text-green-700 inline-block font-sans">
          [ Record : 2,070,284,200 ]
        </span>
      </h2>

      <Search
        placeHolder="Just Type Domain Search"
        className="w-full md:w-2/3 mx-auto block rounded-full border border-neutral-500/10"
      />

      <div className="rounded-lg w-full md:w-2/3 shadow-sm mx-auto dark:bg-[#36F8FF1F] mt-4 pb-5 lg:pb-6">
        <h3 className="rounded-t-lg text-sm font-bold bg-[#FFFAED] dark:bg-white/10 py-3  px-4 lg:px-5">
          Server
        </h3>
        <ul className="space-y-5 divide-y divide-[#21212133] dark:divide-white/20  px-4 lg:px-5">
          <li className="space-y-3 pt-4 font-semibold">
            <div>Domain : Send.com</div>
            <div>url: https://send.com</div>
            <div>username:</div>
          </li>
          <li className="space-y-3 pt-4 font-semibold">
            <div>Domain : Send.com</div>
            <div>url: https://send.com</div>
            <div>username:</div>
          </li>
          <li className="space-y-3 pt-4 font-semibold">
            <div>Domain : Send.com</div>
            <div>url: https://send.com</div>
            <div>username:</div>
          </li>
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
    </section>
  );
}
