"use client";
import { useRouter } from "next/navigation";
import { Button } from "@headlessui/react";

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
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const catValue = event.currentTarget.getAttribute("data-cat"); // Accessing the data attribute

    router.push(`/blog/?page=1&filter_method=category&query=${catValue}`, {
      scroll: false,
    });
    // router.push(`${pathname}?${params.toString()}`, { scroll: false });
    // http://localhost:3000/blog?page=6
  };

  //   query: string | null;
  //   filter_method: "search" | "tags" | "category" | null;
  return (
    <>
      {data.map((data, i) => (
        <li key={i} className="w-full">
          <Button
            data-cat={data.name}
            onClick={handleClick}
            className="flex w-full justify-between items-center p-4 bg-[#131332] rounded-lg"
          >
            <span className="text-xs">{data.name}</span>
            <span className="text-[10px]">({data.count})</span>
          </Button>
        </li>
      ))}
    </>
  );
}
