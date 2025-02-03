// "use client";

// import { submitLike } from "@/lib/services/blogs/submitLike";
// import { cn } from "@/lib/utils";
// import { Button } from "@headlessui/react";

// export default function LikeBtn({
//   id,
//   isLiked,
// }: {
//   id: string;
//   isLiked: boolean;
// }) {
//   const clickHandler = async () => {
//     console.log("dwndww;");
//     await submitLike({ id: id });
//   };
//   return (
//     <Button onClick={clickHandler} className="py-3">
//       <svg className="size-6" viewBox="0 0 256 256">
//         <rect width="256" height="256" fill="none" />
//         <path
//           d="M128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L128,80,109.36,62.64a50,50,0,0,0-70.72,70.72Z"
//           className={cn("stroke-red-600 fill-background", {
//             "fill-red-600": isLiked,
//           })}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="16"
//         />
//       </svg>
//     </Button>
//   );
// }

"use client";

import { submitLike } from "@/lib/services/blogs/submitLike";
import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import { startTransition, useState } from "react";

export default function LikeBtn({
  id,
  isLiked: initialIsLiked,
}: {
  id: string;
  isLiked: boolean;
}) {
  // const [optimisticIsLiked, setOptimisticIsLiked] =
  //   useOptimistic(initialIsLiked);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const clickHandler = async () => {
    if (initialIsLiked) return;

    startTransition(() => {
      setIsLiked(true);
    });

    try {
      await submitLike({ id });
    } catch (error) {
      startTransition(() => {
        setIsLiked(false);
      });
      console.error("Error submitting like:", error);
    }
  };

  return (
    <Button onClick={clickHandler} className="py-3">
      <svg className="size-6" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path
          d="M128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L128,80,109.36,62.64a50,50,0,0,0-70.72,70.72Z"
          className={cn("stroke-red-600 fill-background", {
            "fill-red-600": isLiked,
          })}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </Button>
  );
}
