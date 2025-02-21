"use client";
import Image from "next/image";
import left from "@/public/images/home/leftpagination.png";
import right from "@/public/images/home/rightpagination.png";
import dot from "@/public/images/home/dot.png";
import activeDot from "@/public/images/home/dotactiv.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@headlessui/react";

export default function Pagination({
  meta,
}: {
  meta: {
    page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    next: null | number;
    prev: null | number;
  };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageValue = event.currentTarget.getAttribute("data-page");
    // console.log("Data Value:", pageValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageValue as string);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  //   const newMetaPage = meta.page + 1;
  //   console.log(meta.page);
  return (
    <>
      {meta.prev && (
        <Button
          onClick={handleClick}
          data-page={meta.page - 1}
          aria-label="page navigation previous button"
        >
          <Image
            width={45}
            height={45}
            src={left}
            alt="page navigation previous"
          />
        </Button>
      )}
      <div className="flex items-center">
        {meta.page - 2 > 0 && (
          <Button
            onClick={handleClick}
            data-page={meta.page - 2}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}

        {meta.page - 1 > 0 && (
          <Button
            onClick={handleClick}
            data-page={meta.page - 1}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}

        <Button data-page={meta.page} aria-label={"active page dot button"}>
          <Image width={20} height={20} src={activeDot} alt="active page dot" />
        </Button>

        {meta.page + 1 <= meta.total_pages && (
          <Button
            onClick={handleClick}
            data-page={meta.page + 1}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}

        {meta.page + 2 <= meta.total_pages && (
          <Button
            onClick={handleClick}
            data-page={meta.page + 2}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}

        {meta.page - 1 < 0 && meta.page + 3 <= meta.total_pages && (
          <Button
            onClick={handleClick}
            data-page={meta.page + 3}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}

        {meta.page - 2 < 0 && meta.page + 4 <= meta.total_pages && (
          <Button
            onClick={handleClick}
            data-page={meta.page + 3}
            aria-label={"page dot button"}
          >
            <Image width={20} height={20} src={dot} alt={"page dot"} />
          </Button>
        )}
      </div>
      {meta.next && (
        <Button
          onClick={handleClick}
          data-page={meta.page + 1}
          aria-label="page navigation next button"
        >
          <Image
            width={45}
            height={45}
            src={right}
            alt="page navigation next"
          />
        </Button>
      )}
    </>
  );
}
