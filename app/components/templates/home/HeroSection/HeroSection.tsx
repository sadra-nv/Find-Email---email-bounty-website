import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="">
      <div className="container ">
        <div className="relative overflow-y-hidden pt-10 mt-56 overflow-hidden">
          {/* <video src="/videos/q-c3d7becf.webm" loop={true} autoPlay={true}></video> */}
          <video className="" autoPlay muted loop>
            <source src="/videos/q-c3d7becf.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute flex justify-center -top-60 w-full mx-auto">
            <img src="/vectors/Polygon 1.svg" alt="" className="" />
          </div>
          <div className="absolute flex justify-center -top-60 w-full mx-auto">
            <img src="/vectors/Polygon 2.svg" alt="" className="" />
          </div>
          <div className="absolute flex items-center top-0 left-1/2 -translate-x-1/2 ">
            <img className="w-12" src="/icons/Email.svg" alt="" />
            <h1 className=" text-4xl">Blog</h1>
          </div>
          <img
            className="absolute bottom-1/2 translate-y-1/2  left-1/2 -translate-x-1/2"
            src="/images/database.svg"
            alt=""
          />
          {/* galaxy */}
          <img
            className="absolute top-0 right-1 animate-spin "
            src="/vectors/galaxy.png"
            alt=""
          />
          <img
            className="absolute top-0 left-2 animate-spin"
            src="/vectors/galaxy.png"
            alt=""
          />
          <img
            className="absolute top-72 right-[270px] animate-spin"
            src="/vectors/galaxy.png"
            alt=""
          />
          <img
            className="absolute top-72 left-[270px] animate-spin"
            src="/vectors/galaxy.png"
            alt=""
          />
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-10 w-full">
          <Link
            href={"/"}
            className="px-10 py-2 rounded-lg text-xs  bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
          >
            All Tags
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <img className="w-5" src="/icons/Email.svg" alt="" />
            <h4 className="">Company Email</h4>
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <img className="w-5" src="/icons/LeakedDatabase.svg" alt="" />
            <h4 className="">Leaked Database</h4>
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <img className="w-5" src="/icons/news.svg" alt="" />
            <h4 className="">News</h4>
          </Link>
          <Link href={"/"} className="flex items-center gap-2">
            <img className="w-5" src="/icons/Tools.svg" alt="" />
            <h4 className="">Tools</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
