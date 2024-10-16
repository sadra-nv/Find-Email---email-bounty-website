import { cn } from "@/lib/utils";
import halo from "@/public/images/halo (2).png";
import Image from "next/image";

export default function Halo({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-1 relative", className)}>
      <Image
        src={halo}
        alt="halo"
        width={530}
        height={350}
        placeholder="blur"
        className="relative z-20"
      />
      <Image
        className="rotate-180 blur-sm scale-y-75 scale-x-[85%] relative z-20"
        src={halo}
        alt="halo"
        width={530}
        height={350}
        placeholder="blur"
      />
    </div>
  );
}
