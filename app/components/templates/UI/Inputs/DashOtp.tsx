import { cn } from "@/lib/utils";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ShadOtp";

export default function DashOtp({ className }: { className?: string }) {
  return (
    <InputOTP
      type="tel"
      autoFocus
      maxLength={6}
      className={cn(
        "mx-auto w-full justify-between",
        "flex gap-2 mb-6 sm:mb-8",
        className
      )}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
