import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function LoadingSec({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "w-full py-32 h-screen flex flex-col justify-center items-center",
        className
      )}
    >
      <Image
        className="animate-logo-spin"
        alt="find email logo"
        src={logo}
        width={100}
        height={100}
        placeholder="blur"
      />
      <div
        role="status"
        className="mt-8 inline-block h-10 w-10 animate-spin rounded-full border-[0.1875rem] border-solid border-fe-c-blue-main border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      ></div>
    </section>
  );
}
