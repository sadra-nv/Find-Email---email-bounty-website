import Image from "next/image";
import pic from "@/public/images/home/grad-bulp.png";
import star from "@/public/icons/star.png";

export default function APIPic() {
  return (
    <div className="flex justify-start items-center flex-col">
      <Image
        className="mb-16"
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
            placeholder="blur"
          />
          <span>Identification of VPN/Hosting/tor of the accessed IP</span>
        </div>
        <div className="">
          <Image
            className="inline-block mr-2"
            alt="star"
            src={star}
            width={23}
            height={19}
            placeholder="blur"
          />
          <span> Detection Of malicious dinaub links</span>
        </div>
        <div className="">
          <Image
            className="inline-block mr-2"
            alt="star"
            src={star}
            width={23}
            height={19}
            placeholder="blur"
          />
          <span>
            Management of attack surface vulnerabilities withing an
            organizational infrastructure
          </span>
        </div>
      </div>
    </div>
  );
}
