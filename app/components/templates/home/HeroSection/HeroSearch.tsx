"use client";

import { useRef, useState } from "react";
import SearchCircleBtn from "./SearchCircleBtn";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import email from "@/public/images/Email 1.png";
import speaker from "@/public/images/speaker 1.png";
import database from "@/public/icons/leaked-database.png";
import wrentch from "@/public/icons/wrentch.png";

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
  { id: 0, name: "Company Email" },
  { id: 1, name: "Leaked Database" },
  { id: 2, name: "News" },
  { id: 3, name: "Tools" },
];

export default function HeroSearch() {
  const [title, setTitle] = useState(btnTitles[0].name);
  const wheelRef = useRef<null | HTMLDivElement>(null);
  const [id, setId] = useState(0);

  const rotateWheel = (id: number) => {
    wheelRef.current!.style.rotate = `${id * 90}deg`;
    setId(id);
    setTitle(btnTitles[id - 1].name);
  };

  // SEARCH BAR
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

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

  //   let emailRotate
  //   if()

  return (
    <div className=" w-full  h-fit relative flex items-center justify-center">
      <div
        ref={wheelRef}
        style={{ rotate: "360deg" }}
        className=" relative z-20 min-w-44 min-h-44 rounded-full border-[0.1875rem] border-neutral-50 
    flex justify-center items-center tran-fast duration-500 "
      >
        <div className="min-w-[calc(100%_+_2rem)] h-fit flex justify-between items-center ">
          <SearchCircleBtn
            focusId={id}
            pic={email}
            rotateWheel={rotateWheel}
            id={2}
            className=""
            style={{ transform: `rotate(-${id * 90}deg)` }}
          />

          <SearchCircleBtn
            focusId={id}
            pic={speaker}
            rotateWheel={rotateWheel}
            id={4}
            className=" "
            style={{ transform: `rotate(-${id * 90}deg)` }}
          />
        </div>

        <div className="w-fit min-h-[calc(100%_+_2rem)]  absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-stretch">
          <SearchCircleBtn
            pic={database}
            rotateWheel={rotateWheel}
            focusId={id}
            id={1}
            className=""
            style={{ transform: `rotate(-${id * 90}deg)` }}
          />

          <SearchCircleBtn
            pic={wrentch}
            focusId={id}
            rotateWheel={rotateWheel}
            id={3}
            className="  mt-auto"
            style={{ transform: `rotate(-${id * 90}deg)` }}
          />
        </div>
      </div>

      <form className="-translate-x-9 relative z-10 bg-neutral-50 rounded-full block w-3/5">
        <Field className="w-full relative ">
          <button
            className="p-2 rounded-full group bg-orange-grad-btn top-1/2
          flex justify-center items-center -translate-y-1/2 right-3 absolute z-20"
          >
            <svg
              className="fill-neutral-50 scale-125 inline-block tran-fast group-hover:translate-x-1"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
          <Label className="cursor-text w-full relative flex justify-start items-center px-14">
            <div className="pointer-events-none min-w-fit mr-3 text-neutral-900">
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
                  placeholder="try to search meta tag with to following filter examples below."
                  className={cn(
                    "w-full rounded-lg py-4  border-none bg-transparent block  text-neutral-800",
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
                  "origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0"
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
  );
}
