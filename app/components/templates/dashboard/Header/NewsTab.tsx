import { cn } from "@/lib/utils";
import NewsItem from "./NewsItem";

export default function NewsTab({ className }: { className?: string }) {
  return (
    <ul className={cn("", className)}>
      <NewsItem />
      <NewsItem />
    </ul>
  );
}
