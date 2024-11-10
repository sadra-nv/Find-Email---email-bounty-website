"use client";

import LoginForm from "@/app/components/templates/auth/LoginForm";
import SignupForm from "@/app/components/templates/auth/SignupForm";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function AuthPage() {
  return (
    <div className="relative z-10 w-full h-full min-h-screen flex justify-center items-center pt-36 lg:pt-56">
      <div className="relative mb-24">
        <video
          className="mix-blend-lighten  absolute  -z-10
          -top-[6.6875rem] left-1/2 -translate-x-1/2 w-[28.75rem] h-[13.4375rem] overflow-hidden"
          autoPlay
          muted
          loop
        >
          <source src="/videos/q-c3d7becf.webm" type="video/webm" />
          Your browser does not support the video playback.
        </video>
        <div className="bg-[#0A081E80] p-6 sm:py-8 sm:px-10 w-full max-w-sm backdrop-blur rounded-xl  sm:rounded-2xl">
          <TabGroup defaultIndex={1}>
            <TabList
              className="bg-orange-grad-btn-op backdrop-blur-md p-2 w-full rounded-lg
      flex justify-between  items-center  mx-auto  text-sm font-bold"
            >
              <Tab
                className="outline-none text-xs px-10 py-2.5 data-[selected]:bg-orange-grad-btn 
              rounded-md data-[selected]:text-neutral-50 text-neutral-50"
              >
                <span> Sign Up</span>
              </Tab>
              <Tab
                className="outline-none text-xs px-10 py-2.5 rounded-md data-[selected]:bg-orange-grad-btn
               data-[selected]:text-neutral-50 text-neutral-50"
              >
                <span>Log In</span>
              </Tab>
            </TabList>
            <TabPanels className="mt-9">
              <TabPanel>
                <div className="animate-pop-in w-full h-full">
                  <SignupForm />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="animate-pop-in w-full h-full">
                  <LoginForm />
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
