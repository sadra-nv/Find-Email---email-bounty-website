import { cn } from "@/lib/utils";

export default function CreditItem({
  className,
  title,
  text,
}: {
  className?: string;
  title: string;
  text: string;
}) {
  return (
    <div className={cn("", className)}>
      <div className="flex gap-2 justify-start items-center lg:text-lg font-bold text-sm mb-4">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g clip-path="url(#clip0_327_8357)">
            <path
              d="M10.9987 22.8308C16.9804 22.8308 21.8295 17.9817 21.8295 12C21.8295 6.01835 16.9804 1.16925 10.9987 1.16925C5.01707 1.16925 0.167969 6.01835 0.167969 12C0.167969 17.9817 5.01707 22.8308 10.9987 22.8308Z"
              fill="#41C19E"
            />
            <path
              d="M16.7029 11.34C17.126 10.917 16.8891 10.1893 16.2968 10.1047L13.4537 9.6985C13.2168 9.66466 13.0137 9.51235 12.9122 9.30927L11.6429 6.73696C11.3722 6.19543 10.6106 6.19543 10.3568 6.73696L9.08755 9.30927C8.98601 9.52927 8.78293 9.66466 8.54601 9.6985L5.70293 10.1047C5.11062 10.1893 4.8737 10.917 5.29678 11.34L7.34447 13.3539C7.5137 13.5231 7.59831 13.76 7.54755 13.997L7.05678 16.8231C6.97216 17.4154 7.59831 17.8554 8.12293 17.5847L10.6614 16.2477C10.8645 16.1293 11.1183 16.1293 11.3383 16.2477L13.8768 17.5847C14.4014 17.8554 15.0275 17.4154 14.926 16.8231L14.4352 13.997C14.4014 13.76 14.4691 13.5231 14.6383 13.3539L16.7029 11.34Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_327_8357">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h3>{title}</h3>
      </div>
      <p className="lg:text-base leading-8 text-sm">{text}</p>
    </div>
  );
}
