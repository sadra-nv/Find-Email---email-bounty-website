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
        
      </div>
    </div>
  );
}
