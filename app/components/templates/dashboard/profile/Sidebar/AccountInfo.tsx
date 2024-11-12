"use client";

import {
  Button,
  Checkbox,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useState } from "react";
import { TabGroup } from "@headlessui/react";
import InfoItem from "./InfoItem";

export default function AccountInfo() {
  const [enabled, setEnabled] = useState(false);

  // keep sans font for numbers and api key should be font 12px

  return (
    <TabGroup>
      <TabList
        className="bg-orange-grad-btn p-2 rounded-lg 
      flex justify-between  items-center  mx-auto mt-10 text-sm font-bold"
      >
        <Tab className="outline-none text-xs px-4 py-2.5 data-[selected]:bg-white rounded-md data-[selected]:text-neutral-950 text-neutral-50">
          <span>Profile Info</span>
        </Tab>
        <Tab className="outline-none text-xs px-4 py-2.5 rounded-md data-[selected]:bg-white data-[selected]:text-neutral-950 text-neutral-50">
          <span>System Info</span>
        </Tab>
      </TabList>
      <TabPanels className="mt-12">
        <TabPanel>
          <div className="animate-pop-in space-y-9">
            <InfoItem title="Username" desc="Alireza Rahmani" />
            <InfoItem title="Email" desc="Ar.sing7979@gmail.com" />

            <div>
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group inline-block min-w-4 size-4 rounded-md 
          mr-2 translate-y-1
           p-1 bg-neutral-600/30 data-[checked]:bg-orange-grad-btn"
              >
                <svg
                  width="16"
                  height="16"
                  className="fill-white -translate-x-1 -translate-y-1 scale-75 hidden group-data-[checked]:block"
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
            <InfoItem title="Status" desc="Active" />
            <InfoItem title="Register date" desc="2024/09/21" />
            <InfoItem title="Last Login" desc="2024-10-28" />

            <div
              className="relative border border-neutral-500 dark:border-neutral-300 rounded-xl
                w-full pb-4 pt-6 text-start px-4"
            >
              <h4
                className="text-fe-c-text-title text-xs bg-fe-c-bg-light dark:bg-[#160123] font-bold absolute -top-2 px-2
        left-1/2 -translate-x-1/2 "
              >
                API_Key
              </h4>
              <p className="text-fe-c-text-title font-mono text-sm ">
                be6bec4b-0636-46e7-bacc-af0b712714b6
              </p>
            </div>

            <div className="flex justify-between gap-4 items-center -translate-y-5">
              <Button className="flex justify-center items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_322_2488)">
                    <path
                      d="M9.69967 14.9467C9.47967 14.9467 9.27301 14.8 9.21301 14.5734C9.13967 14.3067 9.29967 14.0334 9.57301 13.96C12.2797 13.2467 14.1663 10.7934 14.1663 7.99337C14.1663 4.59337 11.3997 1.82671 7.99967 1.82671C5.11301 1.82671 3.21967 3.51337 2.33301 4.53337H4.29301C4.56634 4.53337 4.79301 4.76004 4.79301 5.03337C4.79301 5.30671 4.57301 5.54004 4.29301 5.54004H1.33967C1.30634 5.54004 1.24634 5.53337 1.19967 5.52004C1.13967 5.50004 1.08634 5.47337 1.03967 5.44004C0.979674 5.40004 0.933008 5.34671 0.899674 5.28671C0.866341 5.22671 0.839674 5.15337 0.833008 5.08004C0.833008 5.06004 0.833008 5.04671 0.833008 5.02671V2.00004C0.833008 1.72671 1.05967 1.50004 1.33301 1.50004C1.60634 1.50004 1.83301 1.72671 1.83301 2.00004V3.59337C2.91967 2.42671 4.96634 0.833374 7.99967 0.833374C11.953 0.833374 15.1663 4.04671 15.1663 8.00004C15.1663 11.2534 12.973 14.1067 9.82634 14.9334C9.78634 14.94 9.73967 14.9467 9.69967 14.9467Z"
                      className="fill-fe-c-text-title"
                    />
                    <path
                      d="M7.52634 15.1533C7.51301 15.1533 7.49968 15.1467 7.49301 15.1467C6.77301 15.1 6.06634 14.94 5.39968 14.68C5.20634 14.6067 5.07301 14.4133 5.07967 14.2067C5.07967 14.1467 5.09301 14.0867 5.11301 14.0333C5.21301 13.78 5.51301 13.6533 5.75968 13.7467C6.33968 13.9733 6.94634 14.1067 7.55968 14.1533C7.81968 14.1667 8.02634 14.3933 8.02634 14.66L8.01968 14.6867C8.00634 14.9467 7.78634 15.1533 7.52634 15.1533ZM3.85301 13.72C3.73967 13.72 3.63301 13.68 3.53967 13.6133C2.97967 13.16 2.48634 12.6333 2.08634 12.0467C2.02634 11.96 1.99301 11.8667 1.99301 11.7667C1.99301 11.6 2.07301 11.4467 2.21301 11.3533C2.43301 11.2 2.75301 11.26 2.90634 11.4733C2.90634 11.48 2.90634 11.48 2.90634 11.48C2.91301 11.4867 2.91967 11.5 2.92634 11.5067C3.27301 12.0067 3.69301 12.4533 4.16634 12.8267C4.27967 12.92 4.35301 13.06 4.35301 13.2133C4.35301 13.3267 4.31967 13.44 4.24634 13.5333C4.14634 13.6533 4.00634 13.72 3.85301 13.72ZM1.62634 10.4667C1.40634 10.4667 1.21301 10.3267 1.15301 10.12C0.939675 9.43333 0.833008 8.72 0.833008 8V7.99333C0.839674 7.72 1.05967 7.5 1.33301 7.5C1.60634 7.5 1.83301 7.72667 1.83301 8C1.83301 8.62667 1.92634 9.24 2.10634 9.82C2.11967 9.87333 2.12634 9.92 2.12634 9.97333C2.12634 10.1867 1.98634 10.38 1.77301 10.4467C1.72634 10.46 1.67967 10.4667 1.62634 10.4667Z"
                      className="fill-fe-c-text-title"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_322_2488">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-fe-c-text-title font-semibold text-xs">
                  Reset Api_Key
                </span>
              </Button>
              <Button className="flex justify-center items-center gap-2">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <g clip-path="url(#clip0_322_2492)">
                    <path
                      d="M7.86283 16.1145H4.88783C2.11824 16.1145 0.885742 14.882 0.885742 12.1125V9.13746C0.885742 6.36788 2.11824 5.13538 4.88783 5.13538H7.86283C10.6324 5.13538 11.8649 6.36788 11.8649 9.13746V12.1125C11.8649 14.882 10.6324 16.1145 7.86283 16.1145ZM4.88783 6.19788C2.69199 6.19788 1.94824 6.94163 1.94824 9.13746V12.1125C1.94824 14.3083 2.69199 15.052 4.88783 15.052H7.86283C10.0587 15.052 10.8024 14.3083 10.8024 12.1125V9.13746C10.8024 6.94163 10.0587 6.19788 7.86283 6.19788H4.88783Z"
                      className="fill-fe-c-text-title"
                    />
                    <path
                      d="M12.1128 11.8645H11.3337C11.0432 11.8645 10.8024 11.6237 10.8024 11.3333V9.13746C10.8024 6.94163 10.0587 6.19788 7.86283 6.19788H5.66699C5.37658 6.19788 5.13574 5.95704 5.13574 5.66663V4.88746C5.13574 2.11788 6.36824 0.885376 9.13783 0.885376H12.1128C14.8824 0.885376 16.1149 2.11788 16.1149 4.88746V7.86246C16.1149 10.632 14.8824 11.8645 12.1128 11.8645ZM11.8649 10.802H12.1128C14.3087 10.802 15.0524 10.0583 15.0524 7.86246V4.88746C15.0524 2.69163 14.3087 1.94788 12.1128 1.94788H9.13783C6.94199 1.94788 6.19824 2.69163 6.19824 4.88746V5.13538H7.86283C10.6324 5.13538 11.8649 6.36788 11.8649 9.13746V10.802Z"
                      className="fill-fe-c-text-title"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_322_2492">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-fe-c-text-title font-semibold text-xs">
                  Copy
                </span>
              </Button>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
