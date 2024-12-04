"use client";

import { useEffect, useRef, useState } from "react";
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
import email from "@/public/icons/email-icon.png";
import speaker from "@/public/icons/speaker-icon.png";
import database from "@/public/icons/data-icon.png";
import wrentch from "@/public/icons/wrentch-icon.png";
import TopKeyword from "./TopKeyword";
import Image from "next/image";
import { setTimeout } from "timers";

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
  // const [deg, setDeg] = useState(0);
  const [angleOffset, setAngleOffset] = useState(0);
  const pos = [0, 90, 180, 270];

  const [order, setOrder] = useState(
    btnTitles.map((btn) => (btn.id * 90 + angleOffset) / 90)
  );
  const [rotateStyle, setRotateStyle] = useState<
    { left: string; top: string }[] | null
  >(null);

  const [spanStyle, setSpanStyle] = useState<
    { left: string; transform: string }[] | null
  >(null);

  const handleID = (id: number) => {
    const newAngleOffset = 360 - pos[id];
    setAngleOffset(newAngleOffset);
    setId(id);
    setTitle(btnTitles[id].name);

    const newOrder = btnTitles.map(
      (btn) => ((btn.id * 90 + newAngleOffset) % 360) / 90
    );

    setOrder(newOrder);
  };

  const rotateWheel = (id: number) => {
    handleID(id);
    // const newAngleOffset = 360 - pos[id];
    // setAngleOffset(newAngleOffset);
    // setId(id);
    // setTitle(btnTitles[id].name);

    // const newOrder = btnTitles.map(
    //   (btn) => ((btn.id * 90 + newAngleOffset) % 360) / 90
    // );

    // setOrder(newOrder);
  };

  // SELECT MOBILE
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.selectedOptions[0].dataset.id);
    handleID(id);
    // const newAngleOffset = 360 - pos[id];
    // setAngleOffset(newAngleOffset);
    // setId(id);
    // setTitle(btnTitles[id].name);

    // const newOrder = btnTitles.map(
    //   (btn) => ((btn.id * 90 + newAngleOffset) % 360) / 90
    // );

    // setOrder(newOrder);
  };

  useEffect(() => {
    // console.log("location", order);
    const updatedRotateStyles = order.map((ord) => {
      switch (ord) {
        case 0:
          return { left: "calc(50% - 2.5rem)", top: "calc(50% - 1.3rem)" };
        case 1:
          return { left: "calc(50% - 1.2rem)", top: "calc(50% - 2.2rem)" };
        case 2:
          return { left: "48%", top: "calc(50% - 1.3rem)" };
        case 3:
          return { left: "calc(50% - 1.2rem)", top: "calc(50% - 0.4rem)" };
        case 4:
          return { left: "calc(50% - 2.5rem)", top: "calc(50% - 1.3rem)" };
        default:
          return { left: "0", top: "0" };
      }
    });

    const updatedSpanStyles = order.map((ord) => {
      switch (ord) {
        case 0:
          return {
            left: "50px",
            transform: "translateY(2rem)",
          };
        case 1:
          return {
            left: "50%",
            transform: "translateY(4rem) translateX(-50%)",
            textAlign: "center",
          };
        case 2:
          return {
            top: "50%",
            transform: "translateY(-50%)",
            right: "3rem",
            left: "auto",
            textAlign: "right",
          };
        case 3:
          return {
            left: "50%",
            transform: "translateY(-0.2rem) translateX(-50%)",
            textAlign: "center",
          };
        case 4:
          return {
            left: "50px",
            transform: "translateY(2rem)",
          };
        default:
          return {
            left: "0px",
            transform: "translateY(0rem)",
          };
      }
    });

    setSpanStyle(updatedSpanStyles);
    setRotateStyle(updatedRotateStyles);

    setTimeout(() => {
      wheelRef.current!.style.opacity = "1";
      wheelRef.current!.style.transform = "rotate(0deg)";
    }, 200);
  }, [order]);

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
          className="opacity-0 rotate-[360deg] relative z-30 min-w-44 min-h-44 rounded-full border-[0.1875rem] border-neutral-50 
    justify-center items-center tran-fast text-sm hidden lg:flex"
        >
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full  "
            key={btnTitles[0].id}
            id={btnTitles[0].id}
            pic={btnTitles[0].img}
            focusId={id}
            style={{
              ...(rotateStyle && rotateStyle[0]),
              transform: `rotate(${
                btnTitles[0].id * 90 + angleOffset
              }deg) translate(100px) rotate(-${
                btnTitles[0].id * 90 + angleOffset
              }deg)`,
            }}
            rotateWheel={rotateWheel}
          >
            <span
              style={{
                ...(spanStyle && spanStyle[0]),
                ...(id === btnTitles[0].id &&
                  {
                    // color: "black",
                  }),
              }}
              className="absolute -top-6 -left-8 tran-fast duration-500 w-32 text-left transition-transform "
            >
              {btnTitles[0].name}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[1].id}
            id={btnTitles[1].id}
            pic={btnTitles[1].img}
            focusId={id}
            style={{
              ...(rotateStyle && rotateStyle[1]),
              transform: `rotate(${
                btnTitles[1].id * 90 + angleOffset
              }deg) translate(100px) rotate(-${
                btnTitles[1].id * 90 + angleOffset
              }deg)`,
            }}
            rotateWheel={rotateWheel}
          >
            <span
              style={{
                ...(spanStyle && spanStyle[1]),
                ...(id === btnTitles[1].id &&
                  {
                    // color: "black",
                  }),
              }}
              className="absolute -top-6 -left-8 tran-fast duration-500  w-32 text-left transition-transform "
            >
              {btnTitles[1].name}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[2].id}
            id={btnTitles[2].id}
            pic={btnTitles[2].img}
            focusId={id}
            style={{
              ...(rotateStyle && rotateStyle[2]),
              transform: `rotate(${
                btnTitles[2].id * 90 + angleOffset
              }deg) translate(100px) rotate(-${
                btnTitles[2].id * 90 + angleOffset
              }deg)`,
            }}
            rotateWheel={rotateWheel}
          >
            <span
              style={{
                ...(spanStyle && spanStyle[2]),
                ...(id === btnTitles[2].id &&
                  {
                    // color: "black",
                  }),
              }}
              className="absolute -top-6 -left-8 tran-fast duration-500 transition-transform  w-32 text-left"
            >
              {btnTitles[2].name}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[3].id}
            id={btnTitles[3].id}
            pic={btnTitles[3].img}
            focusId={id}
            style={{
              ...(rotateStyle && rotateStyle[3]),
              transform: `rotate(${
                btnTitles[3].id * 90 + angleOffset
              }deg) translate(100px) rotate(-${
                btnTitles[3].id * 90 + angleOffset
              }deg)`,
            }}
            rotateWheel={rotateWheel}
          >
            <span
              style={{
                ...(spanStyle && spanStyle[3]),
                ...(id === btnTitles[3].id &&
                  {
                    // color: "black",
                  }),
              }}
              className="absolute -top-6 -left-8 tran-fast duration-500 w-32 text-left transition-transform "
            >
              {btnTitles[3].name}
            </span>
          </SearchCircleBtn>
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
              defaultValue={btnTitles[id].name}
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
              absolute right-3  top-[0.875rem]"
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
          className="lg:-translate-x-9 relative z-10 bg-white/10 rounded-full block lg:w-3/5
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
              <div className="hidden lg:block pointer-events-none min-w-fit mr-36 text-neutral-900"></div>
              <Combobox
                immediate
                value={selected}
                onChange={(value: string) => {
                  // console.log(value);
                  return setSelected(value);
                }}
                onClose={() => setQuery("")}
              >
                <div className="relative w-full">
                  <ComboboxInput
                    ref={formRef}
                    placeholder="try to search meta tag with to following filter examples below."
                    className={cn(
                      "w-full rounded-lg text-xs min-h-10 py-2 lg:py-4  border-none bg-transparent block  text-neutral-400",
                      "focus:outline-none "
                    )}
                    displayValue={() => selected}
                    onChange={(event) => {
                      // console.log(filtredTags);
                      return setQuery(event.target.value);
                    }}
                  />
                </div>

                <ComboboxOptions
                  modal={false}
                  portal={false}
                  transition
                  className={cn(
                    "text-neutral-800 rounded-lg border border-white/5 bg-[#152945]  [--anchor-gap:var(--spacing-1)] empty:invisible",
                    "  translate-y-5 w-11/12 absolute left-1/2 -translate-x-1/2 top-full",
                    "  thin-bar",
                    "origin-top border transition duration-300 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0"
                  )}
                >
                  {selectedTag && (
                    <div
                      key={selectedTag.id}
                      className="bg-transparent text-white"
                    >
                      <div className="py-4 px-3 cursor-text bg-white/10 font-bold">
                        {selectedTag.title}
                      </div>
                      {selectedTag.queries.map((query, index) => (
                        <ComboboxOption
                          key={query.name + index}
                          value={query.name}
                          className="group flex cursor-pointer mx-1 my-2 py-5 items-center gap-2 
                          hover:bg-white/25 
                          rounded-lg px-5 select-none data-[focus]:bg-white/20"
                        >
                          <div>{query.name}:</div>
                          <div className="text-sm/3 text-neutral-300/80">
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
