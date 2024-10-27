import Image from "next/image";
import pic from "@/public/images/home/grad-bulp.png";
import star from "@/public/icons/star.png";

export default function APIPic() {
  return (
    <div
      className="flex justify-start items-center flex-col relative after:absolute after:w-32 after:h-32
    after:top-28 after:left-1/2 after:bg-highlight-light after:blur-3xl after:-translate-x-1/2 after:z-10
     after:animate-blob after:hidden lg:after:block"
    >
      <Image
        className="hidden lg:block mb-16 animate-3d-qa relative z-20"
        alt="light-bulp"
        src={pic}
        placeholder="blur"
        width={356}
        height={342}
      />
      <div className="flex flex-col justify-start items-start space-y-4">
        <div className="">
          <Image
            className="inline-block mr-2"
            alt="star"
            src={star}
            width={23}
            height={19}
          />
          <span className="leading-loose">
            Identification of VPN/Hosting/tor of the accessed IP
          </span>
        </div>
        <div className="">
          <Image
            className="inline-block mr-2"
            alt="star"
            src={star}
            width={23}
            height={19}
          />
          <span className="leading-loose">
            Detection Of malicious dinaub links
          </span>
        </div>
        <div className="">
          <Image
            className="inline-block mr-2"
            alt="star"
            src={star}
            width={23}
            height={19}
          />
          <span className="leading-loose">
            Management of attack surface vulnerabilities withing an
            organizational infrastructure
          </span>
        </div>
      </div>

      <div className="flex flex-col xs:flex-row justify-between lg:justify-center items-center gap-4 w-full mt-6 lg:mt-8">
        <button className="w-full lg:w-fit group py-4 px-6 btn-hover bg-orange-grad-btn  text-sm rounded-md">
          <span>Get Started</span>
          <svg
            width="16"
            height="16"
            className="fill-neutral-50 ml-2 inline-block tran-fast group-hover:translate-x-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
        <button className="w-full lg:w-fit bg-[#0a142f] btn-hover text-sm  py-4 px-6 rounded-md">
          Code Samples
        </button>
      </div>
    </div>
  );
}
