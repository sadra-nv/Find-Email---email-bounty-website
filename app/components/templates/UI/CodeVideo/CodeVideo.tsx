import { cn } from "@/lib/utils";

export default function CodeVideo({ className }: { className?: string }) {
  return (
    <video
      className={cn("hidden lg:block absolute h-4/5  opacity-50", className)}
      autoPlay
      muted
      loop
    >
      <source src="/videos/q-ba39153a.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
