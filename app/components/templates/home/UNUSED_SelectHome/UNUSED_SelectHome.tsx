"use client";
import React, { useState } from "react";

const SelectHome = () => {
  // const allNameSelect = [
  //   { id: 1, name: "Company Email" },
  //   { id: 2, name: "Leaked Database" },
  //   { id: 3, name: "News" },
  //   { id: 4, name: "Tools" },
  // ];

  const [changNumber, setChangeNumber] = useState(1);
  const [fade, setFade] = useState(true);
  const [rotation, setRotation] = useState(0); // state برای چرخش
  const [rotationImg, setRotationImg] = useState(0); // state برای چرخش

  const handleChangeNumber = (newNumber: number, isUp: boolean) => {
    console.log("dwadwdawd");
    setFade(false);
    setTimeout(() => {
      setChangeNumber(newNumber);
      setFade(true);
      setRotation(rotation + (isUp ? 90 : -90)); // تغییر زاویه چرخش
      setRotationImg(rotationImg + (isUp ? -90 : 90)); // تغییر زاویه چرخش
    }, 300);
  };

  return (
    <div className="h-fit relative z-40">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center ">
          <div className="flex gap-2 md:gap-5 items-center text-xs md:text-base ">
            <span>4</span>
            <span className="bg-[#D9D9D9] bg-opacity-10 p-2 rounded">
              keyword
            </span>
            <span className="p-2 rounded bg-gradient-to-r from-[#C24B76]/20 to-[#FD8330]/20">
              astra relay
            </span>
            <span>1</span>
            <span className="bg-[#D9D9D9] bg-opacity-10 p-2 rounded">ip</span>
            <span className="p-2 rounded bg-gradient-to-r from-[#C24B76]/20 to-[#FD8330]/20">
              152.32.206.74
            </span>
            <div className="hidden lg:flex lg:flex-col lg:gap-2">
              <img
                className="cursor-pointer"
                onClick={() =>
                  handleChangeNumber(
                    changNumber <= 3 ? changNumber + 1 : 1,
                    true
                  )
                }
                src="/icons/ArrowUpCircle2 1.svg"
                alt=""
              />
              <img
                className="cursor-pointer"
                onClick={() =>
                  handleChangeNumber(
                    changNumber >= 2 ? changNumber - 1 : 4,
                    false
                  )
                }
                src="/icons/ArrowUpCircle2 2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-3 text-neutral-50 flex justify-center rounded-full bg-gradient-to-r from-[#C24B76] to-[#FD8330] lg:hidden w-full">
          <img className="w-5" src="/icons/Email.svg" alt="" />
          <select className="p-3 w-full bg-transparent active:text-neutral-900 focus:text-neutral-900 outline-none ">
            <option value="">Company Email</option>
            <option value="">Leaked Database</option>
            <option value="">News</option>
            <option value="">Tools</option>
          </select>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:items-center">
          <div className="w-fit h-fit hidden lg:flex lg:col-span-2 translate-x-7  2xl:translate-x-16 transition-transform ">
            <div
              className={`relative duration-500`}
              style={{ transform: `rotate(${rotation}deg)` }} // اعمال چرخش
            >
              <img className="" src="/icons/Ellipse 14.svg" alt="" />
              <div
                className={`absolute -right-5 bottom-1/2 translate-y-1/2 w-10 p-2 bg- rounded-full ${
                  changNumber === 1
                    ? "bg-gradient-to-r from-[#C24B76] to-[#FD8330]"
                    : "bg-[#071D47]"
                } border-2`}
              >
                <img
                  style={{ transform: `rotate(${rotationImg}deg)` }}
                  className="duration-500"
                  src="/icons/Email.svg"
                  alt=""
                />
              </div>
              <div
                className={`absolute -top-4 w-10 left-1/2 -translate-x-1/2 p-2 bg- rounded-full ${`${
                  changNumber === 2
                    ? "bg-gradient-to-r from-[#C24B76] to-[#FD8330]"
                    : "bg-[#071D47]"
                }`} border-2`}
              >
                <img
                  style={{ transform: `rotate(${rotationImg}deg)` }}
                  className="duration-500"
                  src="/icons/data_management_10 2.svg"
                  alt=""
                />
              </div>
              <div
                className={`absolute top-1/2 -translate-y-1/2 -left-4 w-10 p-2 bg- rounded-full border-2 ${
                  changNumber === 3
                    ? "bg-gradient-to-r from-[#C24B76] to-[#FD8330]"
                    : "bg-[#071D47]"
                }`}
              >
                <img
                  style={{ transform: `rotate(${rotationImg}deg)` }}
                  className="duration-500"
                  src="/icons/speaker 1.svg"
                  alt=""
                />
              </div>
              <div
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 p-2 bg- rounded-full border-2 ${
                  changNumber === 4
                    ? "bg-gradient-to-r from-[#C24B76] to-[#FD8330]"
                    : "bg-[#071D47]"
                }`}
              >
                <img
                  style={{ transform: `rotate(${rotationImg}deg)` }}
                  className="duration-500"
                  src="/icons/Group1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="items-center lg:col-span-10 lg:pl-14 px-3 w-full rounded-full flex bg-white overflow-hidden">
            <label
              htmlFor=""
              className={`text-[#0E0B29] hidden lg:inline font-bold text-nowrap transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {changNumber === 1
                ? "Company Email"
                : changNumber === 2
                ? "Leaked Database"
                : changNumber === 3
                ? "News"
                : "Tools"}
            </label>
            <input
              placeholder="try to search meta tag with the following filter examples below"
              className="w-full p-3 outline-none text-black"
              type="text"
              name=""
              id=""
            />
            <img src="/icons/Group 238691.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectHome;
