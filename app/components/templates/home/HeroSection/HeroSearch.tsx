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
  Dialog,
  DialogTitle,
  DialogPanel,
  Description,
} from "@headlessui/react";
import { cn } from "@/lib/utils";
// import email from "@/public/icons/email-icon.png";
// import speaker from "@/public/icons/speaker-icon.png";
// import database from "@/public/icons/data-icon.png";
// import wrentch from "@/public/icons/wrentch-icon.png";
// import TopKeyword from "./TopKeyword";
import Image from "next/image";
import { setTimeout } from "timers";
import { HeroQueries } from "@/lib/services/home/HeroSection/getHeroQueries";
import { submitQuerySearch } from "@/lib/services/home/HeroSection/submitQuerySearch";

// type QueryTag = {
//   id: number;
//   title: string;
//   queries: { name: string; desc: string }[];
// };

// const queryTags = [
//   {
//     id: 0,
//     title: "Company Email",
//     queries: [
//       { name: "ip", desc: "1.1.1.12.6" },
//       { name: "port", desc: "22" },
//       { name: "ip2", desc: "1.1.1.12.6" },
//       { name: "port2", desc: "22" },
//     ],
//   },
//   {
//     id: 1,
//     title: "Leaked Database",
//     queries: [
//       { name: "ip", desc: "1.1.1.12.6" },
//       { name: "port", desc: "22" },
//       { name: "ip2", desc: "1.1.1.12.6" },
//       { name: "port2", desc: "22" },
//     ],
//   },
//   {
//     id: 2,
//     title: "News",
//     queries: [
//       { name: "ip", desc: "1.1.1.12.6" },
//       { name: "port", desc: "22" },
//       { name: "ip2", desc: "1.1.1.12.6" },
//       { name: "port2", desc: "22" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Tools",
//     queries: [
//       { name: "ip", desc: "1.1.1.12.6" },
//       { name: "port", desc: "22" },
//       { name: "ip2", desc: "1.1.1.12.6" },
//       { name: "port2", desc: "22" },
//     ],
//   },
// ];

// const btnTitles = [
//   { id: 0, name: "Company Email", img: email },
//   { id: 1, name: "Leaked Database", img: database },
//   { id: 2, name: "News", img: speaker },
//   { id: 3, name: "Tools", img: wrentch },
// ];

export default function HeroSearch({
  queriesData,
}: {
  queriesData: HeroQueries;
}) {
  const queryTags = queriesData.data.searches_queries;
  const btnTitles = queriesData.data.searches_queries;

  const [title, setTitle] = useState(btnTitles[0].title);
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
    setTitle(btnTitles[id].title);

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
  const [selectedCategory, setSelectedCategory] = useState(
    queryTags[0].queries[0].key
  );
  const formRef = useRef<null | HTMLInputElement>(null);

  const filtredTags =
    query === ""
      ? queryTags
      : queryTags
          .map((tag) => ({
            ...tag,
            queries: tag.queries.filter((q) =>
              q.key.toLowerCase().includes(query.toLowerCase())
            ),
          }))
          .filter((tag) => tag.queries.length > 0);

  const selectedTag = filtredTags.find((tag) => tag.title === title);

  const handleCategory = (event: React.MouseEvent) => {
    const cat = event.currentTarget.getAttribute("data-title") as string;
    setSelectedCategory(cat);
    setQuery(event.currentTarget.getAttribute("data-value") as string);
  };

  const [submiting, setSubmiting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const patterns: Record<string, RegExp> = {
      email:
        /^(?=.{1,256}$)([A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,})$/i,
      ip: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/,
      phone_number:
        /^\+?(\d{1,3})[\s.-]?(\(?\d{1,4}\)?)?[\s.-]?(\d{1,4})[\s.-]?(\d{1,4})?[\s.-]?(\d{1,9})?$/,
      domain:
        /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,63}(?:\.[a-zA-Z]{2,63})?$/,
      sub_domain:
        /^(((?!-))(xn--|_)?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$/,
      else: /^.{2,}$/,
    };

    // {"method": "leak", "type": "domain", "data": "test.com"}
    setSubmiting(true);

    const reqBody = {
      method: btnTitles[id].type,
      type: selectedCategory,
      data: query,
    };

    console.log(reqBody);

    const regex = patterns[selectedCategory]
      ? patterns[selectedCategory]
      : patterns.else;

    if (regex && !regex.test(query)) {
      setError("Invalid input data. Please check your query.");
      setSubmiting(false);

      setTimeout(() => {
        setError(null);
      }, 5000);

      return;
    }

    const result = await submitQuerySearch(
      btnTitles[id].type,
      selectedCategory,
      query
    );

    if (!result) {
      setError("Failed to get a response from server, please check your query");
      setSubmiting(false);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }
    if (result.code === 429) {
      setError(result.message);
      setSubmiting(false);
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    console.log(result);
    setSubmiting(false);
  };

  return (
    <div className=" w-full  h-fit relative flex flex-col items-center justify-center">
      {/* <TopKeyword /> */}
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
            pic={btnTitles[0].icon}
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
              {btnTitles[0].title}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[1].id}
            id={btnTitles[1].id}
            pic={btnTitles[1].icon}
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
              {btnTitles[1].title}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[2].id}
            id={btnTitles[2].id}
            pic={btnTitles[2].icon}
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
              {btnTitles[2].title}
            </span>
          </SearchCircleBtn>
          <SearchCircleBtn
            className="tran-fast duration-500 rounded-full "
            key={btnTitles[3].id}
            id={btnTitles[3].id}
            pic={btnTitles[3].icon}
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
              {btnTitles[3].title}
            </span>
          </SearchCircleBtn>
        </div>

        <Field className="bg-orange-grad-btn rounded-full w-full lg:hidden min-h-10  mb-4">
          <Label className="relative w-full h-full  flex justify-center items-center px-3">
            <Image
              src={btnTitles[id].icon}
              alt={btnTitles[id].title}
              width={14}
              height={14}
              className="size-4 absolute left-3 top-3"
            />
            <Select
              defaultValue={btnTitles[id].title}
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
                    key={title.id + title.title}
                    value={title.title}
                  >
                    {title.title}
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
          onSubmit={submitHandler}
          className="lg:-translate-x-9 relative z-10 bg-white/10 rounded-full block lg:w-3/5
        w-full"
        >
          <Field className="w-full relative ">
            <button
              disabled={submiting}
              type="submit"
              className={cn(
                "p-2 scale-75 rounded-full group bg-orange-grad-btn top-1/2 disabled:cursor-not-allowed",
                "flex justify-center items-center -translate-y-1/2 right-0 lg:right-3 absolute z-20"
              )}
            >
              <svg
                className={cn(
                  " fill-neutral-50 scale-125 inline-block tran-fast group-hover:translate-x-1",
                  { hidden: submiting }
                )}
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

              <svg
                width="24"
                height="24"
                viewBox="0 0 256 256"
                className={cn(" fill-neutral-50    hidden animate-spin", {
                  "inline-block": submiting,
                })}
              >
                <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
              </svg>
            </button>
            <Label className="cursor-text w-full relative flex justify-start items-center pr-14 pl-3 lg:pl-16">
              <div className="hidden lg:block pointer-events-none min-w-fit mr-36 text-neutral-900"></div>
              <Combobox
                // onChange={handleCategory}
                immediate
                name="query"
                value={selected}
                onChange={(value: string) => {
                  // console.log(value);
                  // handleCategory();
                  // console.log(value);
                  // 'todoadding the category to value then slicing it
                  setSelected(value);
                }}
                // onClose={() => setQuery("")}
              >
                <div className="relative w-full flex gap-3 items-center ">
                  <div className="text-sm font-semibold lg:-translate-y-1">
                    {selectedCategory}
                  </div>
                  <ComboboxInput
                    ref={formRef}
                    placeholder="try to search meta tag with to following filter examples below."
                    className={cn(
                      "lg:-translate-y-1 w-full rounded-lg text-xs min-h-10 py-2 lg:py-4  border-none bg-transparent block  text-neutral-400",
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
                          onClick={handleCategory}
                          data-title={query.key}
                          data-value={query.example}
                          key={query.key + index}
                          value={query.example}
                          className="group flex cursor-pointer mx-1 my-2 py-5 items-center gap-2 
                          hover:bg-white/25 
                          rounded-lg px-5 select-none data-[focus]:bg-white/20"
                        >
                          <div>{query.key}:</div>
                          <div className="text-sm/3 text-neutral-300/80">
                            {query.example}
                          </div>
                        </ComboboxOption>
                      ))}
                    </div>
                  )}
                  {/* {query.length > 0 && (
                    <ComboboxOption
                      value={{ id: null, name: query }}
                      className="data-[focus]:bg-blue-100"
                    >
                      Create <span className="font-bold">{query}</span>
                    </ComboboxOption>
                  )} */}
                </ComboboxOptions>
              </Combobox>
            </Label>
          </Field>
        </form>
      </div>
      <Dialog
        open={Boolean(error)}
        onClose={() => setError(null)}
        transition
        className="relative z-50 transition duration-300 ease-out 
         data-[open]:opacity-100 opacity-0"
      >
        <div className="fixed left-4 lg:left-8 top-8 flex justify-center sm:justify-start">
          <DialogPanel
            className="w-10/12 mx-auto xs:w-80 sm:w-96 bg-gradient-to-tr from-blue-950
           to-[#f80ed9] text-neutral-50 p-3 xs:p-4 rounded-lg"
          >
            <div className="flex justify-start items-start w-full gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="fill-red-600"
              >
                <path d="M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z"></path>
              </svg>
              <div>
                <DialogTitle className="font-bold">
                  An Error occured!!
                </DialogTitle>
                <Description>{error}</Description>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
