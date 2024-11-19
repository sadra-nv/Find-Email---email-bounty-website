import { cn } from "@/lib/utils";
import owl from "@/public/images/chat-owl.png";
import guy from "@/public/images/guy.png";
import Image from "next/image";

export default function ChatItem({ support }: { support: boolean }) {
  return (
    <li
      className={cn(
        "text-xs  sm:text-sm font-semibold leading-5 sm:leading-7 ",
        "gap-4 flex justify-start items-start",
        { "justify-end": !support }
      )}
    >
      {support && (
        <Image
          className="size-9 rounded-full object-cover sm:size-12"
          width={50}
          height={50}
          src={owl}
          alt="profile"
        />
      )}
      <div className=" w-full sm:w-2/3">
        <p
          className={cn(
            "dark:bg-white/10 px-6 py-5 text-fe-c-text-title shadow-md rounded-xl bg-fe-c-bg-light rounded-tr-none",
            {
              " rounded-tl-none rounded-tr-xl ": support,
            }
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra
        </p>
        <div
          className={cn(
            "ml-auto w-fit pt-3 text-xs flex justify-start gap-1 items-center",
            {
              "mr-auto ml-0": support,
            }
          )}
        >
          {!support && (
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path
                d="M3.83198 7.99966C3.61776 7.99966 3.41424 7.91693 3.26429 7.77216L0.232968 4.84571C-0.0776561 4.54583 -0.0776561 4.04947 0.232968 3.74959C0.543593 3.44971 1.05773 3.44971 1.36835 3.74959L3.83198 6.12797L9.33753 0.812803C9.64815 0.51292 10.1623 0.51292 10.4729 0.812803C10.7835 1.11269 10.7835 1.60904 10.4729 1.90893L4.39967 7.77216C4.24972 7.91693 4.0462 7.99966 3.83198 7.99966Z"
                fill="url(#paint0_linear_396_3705)"
              />
              <path
                d="M7.1269 7.99966C6.91268 7.99966 6.70917 7.91693 6.55921 7.77216L3.52789 4.84571C3.21727 4.54583 3.21727 4.04947 3.52789 3.74959C3.83851 3.44971 4.35265 3.44971 4.66328 3.74959L7.1269 6.12797L12.6325 0.812803C12.9431 0.51292 13.4572 0.51292 13.7678 0.812803C14.0785 1.11269 14.0785 1.60904 13.7678 1.90893L7.6946 7.77216C7.54464 7.91693 7.34113 7.99966 7.1269 7.99966Z"
                fill="url(#paint1_linear_396_3705)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_396_3705"
                  x1="5.34513"
                  y1="0.587891"
                  x2="5.34513"
                  y2="7.99966"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008B1E" />
                  <stop offset="1" stopColor="#03721B" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_396_3705"
                  x1="8.64005"
                  y1="0.587891"
                  x2="8.64005"
                  y2="7.99966"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#008B1E" />
                  <stop offset="1" stopColor="#03721B" />
                </linearGradient>
              </defs>
            </svg>
          )}
          <span>Sat 6:00 PM</span>
        </div>
      </div>

      {!support && (
        <Image
          className="size-9 rounded-full object-cover sm:size-12"
          width={50}
          height={50}
          src={guy}
          alt="profile"
        />
      )}
    </li>
  );
}
