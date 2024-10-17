import { cn } from "@/lib/utils";

export default function Pillar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-10 md:w-[4.375rem] h-full left-0 bottom-0 z-0 relative bg-highlight-med scale-95 bg-opacity-30 rounded-b-full overflow-hidden",
        className
      )}
    >
      <svg
        className=" absolute w-full h-full  left-0 top-0"
        preserveAspectRatio="xMidYMax meet"
        viewBox="0 0 76 602"
        fill="none"
      >
        <path
          d="M75 601H1V1H75V601Z"
          fill="url(#paint0_linear_35_296)"
          stroke="#FEF7F7"
          stroke-opacity="0.19"
        />
        <defs>
          <linearGradient
            id="paint0_linear_35_296"
            x1="38"
            y1="1"
            x2="37.3143"
            y2="909.665"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="1" stop-color="#737373" stop-opacity="0.38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
