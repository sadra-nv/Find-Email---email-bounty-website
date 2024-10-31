"use client";

import { Checkbox, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import { TabGroup } from "@headlessui/react";

export default function AccountInfo() {
  const [enabled, setEnabled] = useState(false);

  // keep sans font for numbers and api key should be font 12px

  return (
    <TabGroup>
      <TabList
        className="bg-orange-grad-btn p-2 rounded-lg 
      flex justify-between  items-center  mx-auto mt-10 text-sm font-bold"
      >
        <Tab className="px-4 py-2.5 data-[selected]:bg-white rounded-md data-[selected]:text-neutral-950 text-neutral-50">
          <span>Profile Info</span>
        </Tab>
        <Tab className="px-4 py-2.5 rounded-md data-[selected]:bg-white data-[selected]:text-neutral-950 text-neutral-50">
          <span>System Info</span>
        </Tab>
      </TabList>
      <TabPanels className="mt-9">
        <TabPanel>
          <div className="animate-pop-in space-y-9">
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3  ">
                Email:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">
                Ar.sing7979@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Username:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">
                Alireza Rahmani
              </p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Location:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">Iran</p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Currency:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">
                US Dollar
              </p>
            </div>

            <div>
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group inline-block min-w-4 size-4 rounded-md 
          mr-2 translate-y-1
          data-[checked]:border border-black p-1 bg-neutral-600/30 data-[checked]:bg-white"
              >
                <svg
                  width="16"
                  height="16"
                  className="fill-black -translate-x-1 -translate-y-1 scale-75 hidden group-data-[checked]:block"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
              </Checkbox>
              <span className="text-xs font-bold  text-fe-c-text-title">
                I want to receive important updates and updates and news from
                Findemail.io
              </span>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="animate-pop-in space-y-9">
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3  ">
                Status:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">Active</p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Role:
              </h4>
              <p className="text-fe-c-text-title font-bold text-sm">Buyer</p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Register date:
              </h4>
              <p className="font-sans text-fe-c-text-title font-bold text-sm">
                2024/09/21
              </p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Last Login:
              </h4>
              <p className=" font-sans text-fe-c-text-title font-bold text-sm">
                2024-10-28
              </p>
            </div>
            <div>
              <h4 className="text-neutral-600 dark:text-neutral-100 text-xs mb-3">
                Api_key:
              </h4>
              <p className="font-sans text-xs text-fe-c-text-title font-bold ">
                be6bec4b-0636-46e7-bacc-af0b712714b6
              </p>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
