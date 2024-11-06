import { cn } from "@/lib/utils";
import { Field, Input, Label } from "@headlessui/react";
import { HTMLInputTypeAttribute } from "react";

export default function MainInput({
  className,
  label,
  placeholder,
  type,
}: {
  className?: string;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}) {
  return (
    <Field className={cn("", className)}>
      <Label className="text-white mb-4 block text-sm font-bold lg:text-lg">
        {label}
      </Label>
      <Input
        className="w-full rounded-lg bg-white/10 py-4 px-4 lg:py-5 lg:px-5 text-neutral-100 text-xs/3 lg:text-sm/3"
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </Field>
  );
}
