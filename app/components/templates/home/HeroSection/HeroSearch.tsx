"use client";

import { useRef, useState } from "react";
import SearchCircleBtn from "./SearchCircleBtn";
import {
  Select,
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import email from "@/public/icons/Email 2(2) 1.png";
import speaker from "@/public/images/speaker 1.png";
import database from "@/public/icons/leaked-database.png";
import wrentch from "@/public/icons/wrentch.png";
import TopKeyword from "./TopKeyword";
import Image from "next/image";

// type QueryTag = {
//   id: number;
//   title: string;
//   queries: { name: string; desc: string }[];
// };

const queryTags = [
  {
    id: 0,
    title: "Company Email",
    queries: [
      { name: "ip", desc: "1.1.1.12.6" },
      { name: "port", desc: "22" },
      { name: "ip2", desc: "1.1.1.12.6" },
      { name: "port2", desc: "22" },
    ],
  },
  {
    id: 1,
    title: "Leaked Database",
    queries: [
      { name: "ip", desc: "1.1.1.12.6" },
      { name: "port", desc: "22" },
      { name: "ip2", desc: "1.1.1.12.6" },
      { name: "port2", desc: "22" },
    ],
  },
  {
    id: 2,
    title: "News",
    queries: [
      { name: "ip", desc: "1.1.1.12.6" },
      { name: "port", desc: "22" },
      { name: "ip2", desc: "1.1.1.12.6" },
      { name: "port2", desc: "22" },
    ],
  },
  {
    id: 3,
    title: "Tools",
    queries: [
      { name: "ip", desc: "1.1.1.12.6" },
      { name: "port", desc: "22" },
      { name: "ip2", desc: "1.1.1.12.6" },
      { name: "port2", desc: "22" },
    ],
  },
];

const btnTitles = [
  { id: 0, name: "Company Email", img: email },
  { id: 1, name: "Leaked Database", img: database },
  { id: 2, name: "News", img: speaker },
  { id: 3, name: "Tools", img: wrentch },
];

export default function HeroSearch() {
  const [title, setTitle] = useState(btnTitles[0].name);
  const wheelRef = useRef<null | HTMLDivElement>(null);
  const [id, setId] = useState(0);
  const [deg, setDeg] = useState(0);

  const rotateWheel = (id: number) => {
    wheelRef.current!.style.rotate = `${(id + 1) * 90}deg`;
    setDeg((id + 1) * 90);
    setId(id);
    setTitle(btnTitles[id].name);
    formRef.current!.focus();
    console.log(id);
  };

  // SELECT MOBILE
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.selectedOptions[0].dataset.id);
    wheelRef.current!.style.rotate = `${(id + 1) * 90}deg`;
    setDeg((id + 1) * 90);
    setId(id);
    setTitle(btnTitles[id].name);

    // formRef.current!.focus();
  };
  // SEARCH BAR
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const formRef = useRef<null | HTMLInputElement>(null);

  const filtredTags =
    query === ""
      ? queryTags
      : queryTags
          .map((tag) => ({
            ...tag,
            queries: tag.queries.filter((q) =>
              q.name.toLowerCase().includes(query.toLowerCase())
            ),
          }))
          .filter((tag) => tag.queries.length > 0);

  const selectedTag = filtredTags.find((tag) => tag.title === title);

  return (
    <div className=" w-full  h-fit relative flex flex-col items-center justify-center">
      <TopKeyword />
      <div className="w-full flex-col lg:flex-row  h-fit relative flex items-center justify-center">
        <div
          ref={wheelRef}
          style={{ transform: `rotate(360deg)` }}
          className=" relative z-30 min-w-44 min-h-44 rounded-full border-[0.1875rem] border-neutral-50 
    justify-center items-center tran-fast duration-500 
    hidden lg:flex "
        >
          <div className="min-w-[calc(100%_+_2rem)] h-fit flex justify-between items-center ">
            <SearchCircleBtn
              focusId={id}
              pic={database}
              rotateWheel={rotateWheel}
              id={1}
              style={{ transform: `rotate(-${deg}deg)` }}
            />

            <SearchCircleBtn
              focusId={id}
              pic={wrentch}
              rotateWheel={rotateWheel}
              id={3}
              className=" "
              style={{ transform: `rotate(-${deg}deg)` }}
            />
          </div>

          <div className="w-fit min-h-[calc(100%_+_2rem)]  absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-stretch">
            <SearchCircleBtn
              pic={email}
              rotateWheel={rotateWheel}
              focusId={id}
              id={0}
              className=""
              style={{ transform: `rotate(-${deg}deg)` }}
            />

            <SearchCircleBtn
              pic={speaker}
              focusId={id}
              rotateWheel={rotateWheel}
              id={2}
              className="  mt-auto"
              style={{ transform: `rotate(-${deg}deg)` }}
            />
          </div>
        </div>

        <Field className="bg-orange-grad-btn rounded-full w-full lg:hidden min-h-10  mb-4">
          <Label className="relative w-full h-full  flex justify-center items-center px-3">
            <Image
              src={btnTitles[id].img}
              alt={btnTitles[id].name}
              width={14}
              height={14}
              className="size-4 absolute left-3 top-3"
            />
            <Select
              onChange={selectHandler}
              className={cn(
                " block w-full h-fit appearance-none  border-none bg-transparent  text-sm/5 text-white",
                "focus:outline-none  ",
                "absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2 px-12",
                "*:text-black"
              )}
            >
              {btnTitles.map((title) => {
                return (
                  <option
                    data-id={title.id}
                    key={title.id + title.name}
                    value={title.name}
                  >
                    {title.name}
                  </option>
                );
              })}
            </Select>

            <svg
              aria-hidden="true"
              className="group pointer-events-none size-3 fill-white
              absolute right-3  top-3"
              width="7"
              height="4"
              viewBox="0 0 7 4"
              fill="none"
            >
              <path
                d="M3.50002 4C3.34455 4 3.18909 3.94431 3.06635 3.82496L0.177965 1.0164C-0.0593217 0.785669 -0.0593217 0.403769 0.177965 0.173037C0.415252 -0.0576789 0.808004 -0.0576789 1.04529 0.173037L3.50002 2.55992L5.95471 0.173037C6.192 -0.0576789 6.58475 -0.0576789 6.82203 0.173037C7.05932 0.403769 7.05932 0.785669 6.82203 1.0164L3.93368 3.82496C3.81094 3.94431 3.65548 4 3.50002 4Z"
                className=" fill-white"
              />
            </svg>
          </Label>
        </Field>

        <form
          className="lg:-translate-x-9 relative z-10 bg-neutral-50 rounded-full block lg:w-3/5
        w-full"
        >
          <Field className="w-full relative ">
            <button
              className="p-2 scale-75 rounded-full group bg-orange-grad-btn top-1/2
          flex justify-center items-center -translate-y-1/2 right-0 lg:right-3 absolute z-20"
            >
              <svg
                className=" fill-neutral-50 scale-125 inline-block tran-fast group-hover:translate-x-1"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </button>
            <Label className="cursor-text w-full relative flex justify-start items-center pr-14 pl-3 lg:px-14">
              <div className="hidden lg:block pointer-events-none min-w-fit mr-3 text-neutral-900">
                {title}
              </div>
              <Combobox
                immediate
                value={selected}
                onChange={(value: string) => {
                  console.log(value);
                  return setSelected(value);
                }}
                onClose={() => setQuery("")}
              >
                <div className="relative w-full">
                  <ComboboxInput
                    ref={formRef}
                    placeholder="try to search meta tag with to following filter examples below."
                    className={cn(
                      "w-full rounded-lg py-2 lg:py-4  border-none bg-transparent block  text-neutral-800",
                      "focus:outline-none "
                    )}
                    displayValue={() => selected}
                    onChange={(event) => {
                      console.log(filtredTags);
                      return setQuery(event.target.value);
                    }}
                  />
                </div>

                <ComboboxOptions
                  modal={false}
                  portal={false}
                  transition
                  className={cn(
                    "text-neutral-800 rounded-lg border border-white/5 bg-white  [--anchor-gap:var(--spacing-1)] empty:invisible",
                    "  translate-y-5 w-11/12 absolute left-1/2 -translate-x-1/2 top-full",
                    "max-h-72 overflow-y-auto thin-bar",
                    "origin-top border transition duration-300 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0"
                  )}
                >
                  {selectedTag && (
                    <div key={selectedTag.id}>
                      <div className="py-1.5 px-3 cursor-text bg-black/20 font-bold">
                        {selectedTag.title}
                      </div>
                      {selectedTag.queries.map((query, index) => (
                        <ComboboxOption
                          key={query.name + index}
                          value={query.name}
                          className="group flex cursor-pointer mx-1 my-1 items-center gap-2 rounded-lg py-1.5 px-5 select-none data-[focus]:bg-black/10"
                        >
                          <div>{query.name}:</div>
                          <div className="text-sm/3 text-neutral-600/80">
                            {query.desc}
                          </div>
                        </ComboboxOption>
                      ))}
                    </div>
                  )}
                </ComboboxOptions>
              </Combobox>
            </Label>
          </Field>
        </form>
      </div>
    </div>
  );
}
