import { Button, Field, Input, Label } from "@headlessui/react";

export default function Search() {
  return (
    <form className="mr-auto w-1/3 hidden lg:block">
      <Field>
        <Label
          className="px-5 py-3 bg-white rounded-full cursor-text border border-neutral-500/5 shadow-sm
        flex justify-start items-center"
        >
          <Button className="mr-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M5.72143 11.4429C2.56767 11.4429 0 8.87519 0 5.72143C0 2.56767 2.56767 0 5.72143 0C8.87519 0 11.4429 2.56767 11.4429 5.72143C11.4429 8.87519 8.87519 11.4429 5.72143 11.4429ZM5.72143 0.837282C3.02538 0.837282 0.837282 3.03096 0.837282 5.72143C0.837282 8.4119 3.02538 10.6056 5.72143 10.6056C8.41748 10.6056 10.6056 8.4119 10.6056 5.72143C10.6056 3.03096 8.41748 0.837282 5.72143 0.837282Z"
                fill="#5B5B5B"
              />
              <path
                d="M11.5805 12.001C11.4744 12.001 11.3684 11.9619 11.2847 11.8782L10.1683 10.7618C10.0064 10.5999 10.0064 10.332 10.1683 10.1701C10.3302 10.0082 10.5981 10.0082 10.76 10.1701L11.8763 11.2865C12.0382 11.4484 12.0382 11.7163 11.8763 11.8782C11.7926 11.9619 11.6866 12.001 11.5805 12.001Z"
                fill="#5B5B5B"
              />
            </svg>
          </Button>
          <Input
            className="bg-transparent w-full placeholder:text-[#5B5B5B] text-[#5B5B5B]  outline-none focus:outline-none"
            placeholder="Search Project..."
            type="text"
          />
        </Label>
      </Field>
    </form>
  );
}
