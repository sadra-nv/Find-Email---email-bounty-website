import { cn } from "@/lib/utils";

export default function BGGlow({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      preserveAspectRatio="xMidYMax meet"
      viewBox="0 0 1221 1541"
      fill="none"
      className={cn("absolute w-full animate-blob ", className)}
    >
      <g opacity="0.2" filter="url(#filter0_f_1_340)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M765.421 492.013C837.05 503.14 904.449 519.843 960.798 562.257C1025.13 610.683 1100.38 666.347 1098.98 743.086C1097.59 819.383 1009.86 861.519 954.321 917.92C893.88 979.305 855.047 1077.81 765.421 1081.85C674.991 1085.94 611.115 1003.13 557.146 935.852C512.17 879.784 503.884 812.274 493.671 743.086C480.808 655.953 423.981 551.44 491.228 489.311C558.475 427.18 671.712 477.456 765.421 492.013Z"
          className={color ? color : "fill-highlight-light"}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_340"
          x="0.666687"
          y="0.666687"
          width="1556.67"
          height="1539.67"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="229.167"
            result="effect1_foregroundBlur_1_340"
          />
        </filter>
      </defs>
    </svg>
  );
}
