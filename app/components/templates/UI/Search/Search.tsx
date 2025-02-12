import { cn } from "@/lib/utils";
import { Button, Field, Input, Label } from "@headlessui/react";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface SearchInputType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  dirty: boolean | undefined;
  error: FieldError | undefined;
  placeHolder: string;
  isSubmitting: boolean;
}

export default forwardRef<HTMLInputElement, SearchInputType>(function Search(
  {
    className,
    placeHolder,
    dirty,
    error,
    isSubmitting,
    ...props
  }: SearchInputType,
  ref
) {
  return (
    <>
      <div
        className={cn(
          "animated-search w-full rounded-full bg-[#F3F3F3] dark:bg-white/10 block",
          // "border border-neutral-500/5 shadow-sm",
          className
        )}
      >
        <Field className="relative">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="absolute top-1/2 -translate-y-1/2 left-5"
          >
            {!isSubmitting && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M5.72143 11.4429C2.56767 11.4429 0 8.87519 0 5.72143C0 2.56767 2.56767 0 5.72143 0C8.87519 0 11.4429 2.56767 11.4429 5.72143C11.4429 8.87519 8.87519 11.4429 5.72143 11.4429ZM5.72143 0.837282C3.02538 0.837282 0.837282 3.03096 0.837282 5.72143C0.837282 8.4119 3.02538 10.6056 5.72143 10.6056C8.41748 10.6056 10.6056 8.4119 10.6056 5.72143C10.6056 3.03096 8.41748 0.837282 5.72143 0.837282Z"
                  className="fill-[#5B5B5B] dark:fill-neutral-300"
                />
                <path
                  d="M11.5805 12.001C11.4744 12.001 11.3684 11.9619 11.2847 11.8782L10.1683 10.7618C10.0064 10.5999 10.0064 10.332 10.1683 10.1701C10.3302 10.0082 10.5981 10.0082 10.76 10.1701L11.8763 11.2865C12.0382 11.4484 12.0382 11.7163 11.8763 11.8782C11.7926 11.9619 11.6866 12.001 11.5805 12.001Z"
                  className="fill-[#5B5B5B] dark:fill-neutral-300"
                />
              </svg>
            )}

            {isSubmitting && (
              <svg
                className="fill-[#5B5B5B] animate-spin dark:fill-neutral-300 size-3"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
              </svg>
            )}
          </Button>
          <Label
            className="px-5 py-3 cursor-text 
        flex justify-start items-center"
          >
            <Input
              ref={ref}
              {...props}
              className="bg-transparent text-xs ml-7 w-full placeholder:text-[#5B5B5B] text-[#5B5B5B] 
            dark:placeholder:text-neutral-300 dark:text-neutral-300
             outline-none focus:outline-none"
              placeholder={placeHolder}
              type="text"
            />
          </Label>
        </Field>
      </div>
      {error && dirty && (
        <p
          className={cn(
            "hidden gap-2 justify-center items-center text-sm text-red-500  ",
            {
              " mt-3 flex ": error,
            }
          )}
        >
          <svg
            width="16"
            height="16"
            className="fill-red-500"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          {error?.message}
        </p>
      )}
    </>
  );
});
