import { cn } from "@/lib/utils";
import star from "@/public/icons/bluestar.png";
import Image from "next/image";

export default function ExplItem({
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
        <Image width={25} height={20} src={star} alt="icon" />
        <h3>{title}</h3>
      </div>
      <p className="lg:text-base leading-8 text-sm">{text}</p>
    </div>
  );
}
