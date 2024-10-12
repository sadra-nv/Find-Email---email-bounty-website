export default function Home() {
  return (
    <div className="container">
        <div className=" flex justify-center items-center mt-40 xl:mt-60">
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
          <div className="hidden xl:flex xl:flex-col xl:gap-2">
            <img src="/icons/ArrowUpCircle2 1.svg" alt="" />
            <img src="/icons/ArrowUpCircle2 2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 p-3 rounded-full bg-gradient-to-r from-[#C24B76] to-[#FD8330]">
        <img className="w-5" src="/icons/Email.svg" alt="" />
        <select className="w-full bg-transparent outline-none text-gray-800">
          <option value="">Company Email</option>
          <option value="">Leaked Database</option>
          <option value="">News</option>
          <option value="">Tools</option>
        </select>
      </div>
    </div>
  );
}
