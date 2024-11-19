"use client";

import { cn } from "@/lib/utils";
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabGroup,
} from "@headlessui/react";
import { useState } from "react";
import NotifTab from "./NotifTab";
import NewsTab from "./NewsTab";

export default function NotifToggleBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button
        onClick={clickHandler}
        className="block dark:bg-white/15 bg-[#152330] rounded-full p-2 w-8 h-8 overflow-hidden relative"
      >
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
        >
          <path
            d="M5.94519 13.0823C4.36985 13.0823 2.79454 12.8321 1.30035 12.3318C0.732426 12.1357 0.29972 11.7368 0.110412 11.2162C-0.0856576 10.6956 -0.0180475 10.121 0.292959 9.60712L1.07048 8.31577C1.23274 8.04533 1.38148 7.50445 1.38148 7.18668V5.23276C1.38148 2.71766 3.43007 0.669067 5.94519 0.669067C8.46029 0.669067 10.5089 2.71766 10.5089 5.23276V7.18668C10.5089 7.49768 10.6576 8.04533 10.8199 8.32253L11.5906 9.60712C11.8814 10.0939 11.9355 10.6821 11.7394 11.2162C11.5433 11.7504 11.1174 12.156 10.5833 12.3318C9.09583 12.8321 7.52051 13.0823 5.94519 13.0823ZM5.94519 1.68322C3.99124 1.68322 2.39564 3.27206 2.39564 5.23276V7.18668C2.39564 7.68023 2.19281 8.41042 1.94265 8.83637L1.16513 10.1277C1.01639 10.3779 0.975822 10.6416 1.06372 10.8647C1.14485 11.0945 1.34768 11.2703 1.62488 11.365C4.45099 12.3115 7.44614 12.3115 10.2722 11.365C10.5156 11.2839 10.7049 11.1013 10.7928 10.8579C10.8807 10.6145 10.8605 10.3508 10.7252 10.1277L9.94771 8.83637C9.69079 8.3969 9.49473 7.67347 9.49473 7.17992V5.23276C9.49473 3.27206 7.90589 1.68322 5.94519 1.68322Z"
            className="fill-white "
          />
          <path
            d="M7.19939 1.86592C7.15206 1.86592 7.10474 1.85916 7.05741 1.84564C6.86134 1.79155 6.67203 1.75098 6.48949 1.72394C5.9148 1.64957 5.36039 1.69013 4.8398 1.84564C4.65049 1.90649 4.44768 1.84564 4.31922 1.70366C4.19076 1.56167 4.15019 1.35884 4.22456 1.1763C4.50177 0.466388 5.17785 -0.00012207 5.9486 -0.00012207C6.71936 -0.00012207 7.39546 0.459627 7.67266 1.1763C7.74027 1.35884 7.70647 1.56167 7.57801 1.70366C7.47659 1.81183 7.33461 1.86592 7.19939 1.86592Z"
            className="fill-white "
          />
          <path
            d="M5.94161 14.624C5.27227 14.624 4.62321 14.3536 4.14996 13.8803C3.67669 13.407 3.40625 12.758 3.40625 12.0886H4.4204C4.4204 12.4875 4.58265 12.8797 4.86661 13.1636C5.15057 13.4476 5.54271 13.6099 5.94161 13.6099C6.77998 13.6099 7.46284 12.927 7.46284 12.0886H8.47699C8.47699 13.4882 7.34114 14.624 5.94161 14.624Z"
            className="fill-white "
          />
        </svg>
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={clickHandler}
      >
        <DialogBackdrop
          className="fixed inset-0 lg:w-[calc(100%_-_13rem)]
        lg:left-[13rem]
        ml-auto bg-black/80 backdrop-blur-sm"
        />

        <div className="fixed inset-0 z-10 w-full thin-bar lg:w-[calc(100%_-_13rem)] ml-auto  overflow-y-auto">
          <div
            className="flex min-h-full w-full  thin-bar
           items-stretch justify-center sm:justify-end overflow-x-hidden"
          >
            <DialogPanel
              transition
              className={cn(
                "w-11/12 sm:w-full min-h-full backdrop-blur-2xl",
                "my-14 sm:my-0 sm:w-[30rem] bg-fe-c-bg-light",
                "relative rounded-xl sm:rounded-none pb-9",
                "px-2.5 sm:px-8 pt-20",
                "ease-out duration-300 transition-all data-[closed]:opacity-0 sm:data-[closed]:translate-x-full overflow-y-auto thin-bar"
              )}
            >
              <TabGroup>
                <TabList
                  className="bg-orange-grad-btn p-2 rounded-lg 
      flex justify-between  items-center  mx-auto mt-10 text-sm font-bold"
                >
                  <Tab
                    className="outline-none text-xs px-4 py-2.5 data-[selected]:bg-white
                   rounded-md data-[selected]:text-neutral-950 text-neutral-50 w-full"
                  >
                    <span>All</span>
                  </Tab>
                  <Tab
                    className="outline-none text-xs px-4 py-2.5 rounded-md w-full
                   data-[selected]:bg-white data-[selected]:text-neutral-950 text-neutral-50"
                  >
                    <span>Notifications</span>
                  </Tab>
                  <Tab
                    className="outline-none text-xs px-4 py-2.5 rounded-md w-full
                   data-[selected]:bg-white data-[selected]:text-neutral-950 text-neutral-50"
                  >
                    <span>News</span>
                  </Tab>
                </TabList>
                <TabPanels className="mt-6">
                  <TabPanel>
                    <div className="animate-pop-in divide-y divide-neutral-500/20 dark:divide-neutral-300/20">
                      <NewsTab className="pb-8" />
                      <NotifTab />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="animate-pop-in ">
                      <NotifTab />
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="animate-pop-in ">
                      <NewsTab />
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
              <Button
                onClick={clickHandler}
                className="text-xs text-fe-c-text-title flex gap-2 rounded-lg btn-hover bg-neutral-400/30
               dark:bg-white/15 px-3.5 py-1.5 items-center absolute right-6 top-9 z-20"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M6.25 12.5C2.80233 12.5 0 9.69767 0 6.25C0 2.80233 2.80233 0 6.25 0C9.69767 0 12.5 2.80233 12.5 6.25C12.5 9.69767 9.69767 12.5 6.25 12.5ZM6.25 0.872093C3.28488 0.872093 0.872093 3.28488 0.872093 6.25C0.872093 9.21512 3.28488 11.6279 6.25 11.6279C9.21512 11.6279 11.6279 9.21512 11.6279 6.25C11.6279 3.28488 9.21512 0.872093 6.25 0.872093Z"
                    className="fill-fe-c-text-title"
                  />
                  <path
                    d="M8.75591 8.01939C8.95952 8.2231 8.95952 8.55222 8.75591 8.75591C8.70759 8.80435 8.65018 8.84276 8.58698 8.86895C8.52377 8.89513 8.45601 8.90857 8.3876 8.9085C8.2543 8.9085 8.12097 8.85747 8.01938 8.75591L6.45432 7.19075L4.88926 8.75593C4.84095 8.80436 4.78355 8.84277 4.72036 8.86896C4.65717 8.89515 4.58942 8.90859 4.52102 8.90852C4.45261 8.90859 4.38486 8.89515 4.32166 8.86897C4.25845 8.84278 4.20105 8.80437 4.15273 8.75593C3.94912 8.55222 3.94912 8.2231 4.15273 8.01939L5.7179 6.45432L4.15271 4.88926C3.9491 4.68555 3.9491 4.35642 4.15271 4.15273C4.35642 3.94912 4.68555 3.94912 4.88926 4.15273L6.45432 5.7179L8.01938 4.15271C8.2231 3.9491 8.55222 3.9491 8.75591 4.15271C8.95952 4.35642 8.95952 4.68555 8.75591 4.88926L7.19075 6.45432L8.75591 8.01939Z"
                    className="fill-fe-c-text-title"
                  />
                </svg>

                <span>Close</span>
              </Button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
