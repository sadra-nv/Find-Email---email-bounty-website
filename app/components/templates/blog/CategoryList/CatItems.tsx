"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function CatItems({
  data,
}: {
  data: {
    name: string;
    slug: string;
    description: string;
    count: number;
  }[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const catValue = event.currentTarget.getAttribute("data-cat"); // Accessing the data attribute

    router.push(`/blog/?page=1&filter_method=category&query=${catValue}`, {
      scroll: false,
    });
  };

  const handleAll = () => {
    router.push(`/blog`, {
      scroll: false,
    });
  };

  //   query: string | null;
  //   filter_method: "search" | "tags" | "category" | null;
  return (
    <>
      <Button
        onClick={handleAll}
        className={cn("px-10 py-2 rounded-lg text-xs ml-6  shrink-0", {
          "btn-hover bg-orange-grad-btn": !searchParams.get("query"),
        })}
      >
        All Tags
      </Button>
      {data.map((item, i) => (
        <Button
          key={i}
          data-cat={item.name}
          onClick={handleClick}
          className={cn("px-10 py-2 rounded-lg text-xs ml-6  shrink-0", {
            "btn-hover bg-orange-grad-btn":
              item.name === searchParams.get("query"),
          })}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
}
