import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

export default function SpinnerSec({ className }: { className?: string }) {
  return (
    <div className={cn("w-full flex justify-center items-center", className)}>
      <Spinner />
    </div>
  );
}
