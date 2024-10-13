import React from "react";

const SelectHome = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex justify-center items-center xl:mt-60">
        <div className="flex gap-5 items-center">
          <span>4</span>
          <span className="bg-[#D9D9D9] bg-opacity-10 p-2 rounded">
            keyword
          </span>
          <span className="p-2 rounded bg-gradient-to-r from-[#C24B76]/20 to-[#FD8330]/20 ">
            astra relay
          </span>
          <span>1</span>
          <span className="bg-[#D9D9D9] bg-opacity-10 p-2 rounded">ip</span>
          <span className="p-2 rounded bg-gradient-to-r from-[#C24B76]/20 to-[#FD8330]/20">
            152.32.206.74
          </span>
          <div className="hidden lg:flex lg:flex-col lg:gap-2">
            <img src="/icons/ArrowUpCircle2 1.svg" alt="" />
            <img src="/icons/ArrowUpCircle2 2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-full bg-gradient-to-r from-[#C24B76] to-[#FD8330] lg:hidden w-full">
        <img className="w-5" src="/icons/Email.svg" alt="" />
        <select className="p-3 w-full bg-transparent outline-none text-gray-800">
          <option value="">Company Email</option>
          <option value="">Leaked Database</option>
          <option value="">News</option>
          <option value="">Tools</option>
        </select>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:items-center">
        <div className="relative w-fit h-fit hidden lg:flex lg:col-span-2  translate-x-7 xl:translate-x-14 2xl:translate-x-24">
          <img className="" src="/icons/Ellipse 14.svg" alt="" />
          <div className="absolute -right-5 bottom-1/2 translate-y-1/2 w-10 p-2 bg- rounded-full bg-gradient-to-r from-[#C24B76] to-[#FD8330]">
            <img className="" src="/icons/Email.svg" alt="" />
          </div>
          <div className="absolute -top-4 w-10 left-1/2 -translate-x-1/2 p-2 bg- rounded-full bg-[#071D47] border-2">
            <img className="" src="/icons/data_management_10 2.svg" alt="" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 p-2 bg- rounded-full bg-[#071D47] border-2">
            <img className="" src="/icons/data_management_10 2.svg" alt="" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 p-2 bg- rounded-full bg-[#071D47] border-2">
            <img className="" src="/icons/data_management_10 2.svg" alt="" />
          </div>
        </div>
        <div className="items-center lg:col-span-10 pl-14 px-3 w-full rounded-full flex bg-white  overflow-hidden">
          <label htmlFor="" className="text-[#0E0B29] font-bold text-nowrap">
            Company Email
          </label>
          <input
            placeholder="try to search meta tag with to fallowing filter examples below"
            className="w-full p-3 outline-none text-black"
            type="text"
            name=""
            id=""
          />
          <img src="/icons/Group 238691.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectHome;
