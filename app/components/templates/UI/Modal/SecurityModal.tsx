import { cn } from "@/lib/utils";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ReactNode } from "react";

export default function SecurityModal({
  className,
  isOpen,
  closeHandler,
  children,
  tapClose,
}: {
  className?: string;
  tapClose: boolean;
  isOpen: boolean;
  closeHandler: () => void;
  children: ReactNode;
}) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={tapClose ? closeHandler : () => {}}
    >
      <DialogBackdrop className="fixed inset-0 lg:w-[calc(100%_-_13rem)] ml-auto bg-black/80 backdrop-blur-sm" />

      <div className="fixed inset-0 z-10 w-full lg:w-[calc(100%_-_13rem)] ml-auto  overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6">
          <DialogPanel
            transition
            className={cn(
              "w-fit bg-fe-c-bg-light p-6 backdrop-blur-2xl",
              "relative sm:rounded-3xl rounded-2xl",
              "ease-out duration-300  data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 data-[closed]:translate-y-6",
              className
            )}
          >
            {children}
            <Button
              onClick={closeHandler}
              className="text-xs text-fe-c-text-title flex gap-2 rounded-lg btn-hover bg-neutral-400/30
               dark:bg-white/15 px-3.5 py-1.5 items-center absolute right-6 top-6 z-20"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M6.25 12.5C2.80233 12.5 0 9.69767 0 6.25C0 2.80233 2.80233 0 6.25 0C9.69767 0 12.5 2.80233 12.5 6.25C12.5 9.69767 9.69767 12.5 6.25 12.5ZM6.25 0.872093C3.28488 0.872093 0.872093 3.28488 0.872093 6.25C0.872093 9.21512 3.28488 11.6279 6.25 11.6279C9.21512 11.6279 11.6279 9.21512 11.6279 6.25C11.6279 3.28488 9.21512 0.872093 6.25 0.872093Z"
                  className="fill-fe-c-text-title"
                />
                <path
                  d="M8.75591 8.01939C8.95952 8.2231 8.95952 8.55222 8.75591 8.75591C8.70759 8.80435 8.65018 8.84276 8.58698 8.86895C8.52377 8.89513 8.45601 8.90857 8.3876 8.9085C8.2543 8.9085 8.12097 8.85747 8.01938 8.75591L6.45432 7.19075L4.88926 8.75593C4.84095 8.80436 4.78355 8.84277 4.72036 8.86896C4.65717 8.89515 4.58942 8.90859 4.52102 8.90852C4.45261 8.90859 4.38486 8.89515 4.32166 8.86897C4.25845 8.84278 4.20105 8.80437 4.15273 8.75593C3.94912 8.55222 3.94912 8.2231 4.15273 8.01939L5.7179 6.45432L4.15271 4.88926C3.9491 4.68555 3.9491 4.35642 4.15271 4.15273C4.35642 3.94912 4.68555 3.94912 4.88926 4.15273L6.45432 5.7179L8.01938 4.15271C8.2231 3.9491 8.55222 3.9491 8.75591 4.15271C8.95952 4.35642 8.95952 4.68555 8.75591 4.88926L7.19075 6.45432L8.75591 8.01939Z"
                  className="fill-fe-c-text-title"
                />
              </svg>

              <span>Close</span>
            </Button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
