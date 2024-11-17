import pic from "@/public/icons/bluestar.png";
import pic2 from "@/public/images/fedff79ee5dc54fec40612d6a376d8cda42b11c3.jpg";
import Image from "next/image";

export default function NewsItem() {
  return (
    <li
      className="w-full h-fit border-t  pt-4 mt-4
    first:pt-4 first:mt-4 first:border-none
    border-neutral-500/20 dark:border-neutral-300/20"
    >
      <figure>
        <Image
          width={420}
          height={235}
          className="rounded-lg sm:rounded-2xl w-full h-auto mb-3 sm:mb-8"
          src={pic2}
          alt="news picture"
        />
      </figure>
      <figcaption>
        <div className="flex items-center gap-1 mb-1 sm:mb-4">
          <Image
            className="min-w-5"
            src={pic}
            width={30}
            height={30}
            alt="icon"
          />
          <h4 className="text-sm sm:text-base font-semibold text-fe-c-text-title">
            In Mail messages in LinkedIn Automation
          </h4>
        </div>
        <p className="text-justify font-semibold text-xs sm:text-sm text-fe-c-text-title leading-6">
          Ever wish you could still reach leads who haven&apos;t accepted your
          LinkedIn request?
        </p>
      </figcaption>
    </li>
  );
}
