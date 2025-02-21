"use client";

import DashInput from "@/app/components/templates/UI/Inputs/DashInput";
import { logout } from "@/lib/services/auth/logout";
import { submitNewTicket } from "@/lib/services/dashboard/tickets/submitNewTicket";
import useAuthStore from "@/lib/store/authStore";
import { cn } from "@/lib/utils";
import { type NewTicketForm, NewTicketFormSchema } from "@/lib/zod-schemas";
import { Button, Textarea } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function NewTicketForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<NewTicketForm>({
    defaultValues: {
      subject: "",
      message: "",
    },
    resolver: zodResolver(NewTicketFormSchema),
  });

  const [success, setSuccess] = useState(false);

  const token = useAuthStore((state) => state.token);
  const router = useRouter();

  const submitHandler: SubmitHandler<NewTicketForm> = async (formData) => {
    console.log(formData);
    const result = await submitNewTicket(formData, token ? token : "");
    // setSubscribe(false);
    setSuccess(false);

    if (result === 401) {
      await logout();
      return;
    } else if (result && result.ok) {
      setSuccess(true);
      router.push("/dashboard/tickets");
      // setSubscribe(true);
    } else if (result && result.code == 422) {
      result.errors?.map((error) => {
        setError(error.name, {
          type: "manual",
          message: error.msg,
        });
      });
      setSuccess(false);
    } else if (result && !result.ok) {
      setError("message", {
        type: "manual",
        message: result.message,
      });

      setSuccess(false);
    } else {
      setError("message", {
        type: "manual",
        message: "Failed to connect to server",
      });
      setSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DashInput
          {...register("subject")}
          dirty={dirtyFields.subject}
          error={errors.subject}
          label="Subject"
          placeholder="Subject"
          className="w-full sm:max-w-[21.875rem]"
        />
        <Textarea
          {...register("message")}
          placeholder="Write a message"
          cols={8}
          className="w-full rounded-lg  mt-5 sm:mt-6 bg-neutral-400/25 dark:bg-white/15
           py-3  px-4 h-44 lg:py-3 lg:px-5 text-fe-c-text-title text-xs/3 "
        />

        {errors.message && dirtyFields.message && (
          <p
            className={cn(
              "hidden gap-2 justify-start items-center text-sm text-red-500  ",
              {
                " mt-3 flex ": errors.message,
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
            {errors.message.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex gap-2 text-white items-center w-fit justify-center text-sm sm:text-sm 
        font-semibold py-4 px-6 rounded-lg mt-6 sm:mt-8 group
         bg-orange-grad-btn ml-auto shadow-md btn-hover"
        >
          {!isSubmitting && (
            <>
              <span className="">Send Ticket</span>
              <svg
                className="group-hover:translate-x-1 tran-fast"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M2.07724 13C1.33084 13 0.857679 12.7468 0.557787 12.4469C-0.0286699 11.8604 -0.441855 10.6142 0.877672 7.96847L1.45746 6.81555C1.53077 6.66227 1.53077 6.34238 1.45746 6.1891L0.877672 5.03618C-0.44852 2.39046 -0.0286699 1.13758 0.557787 0.557787C1.13758 -0.0286699 2.39046 -0.44852 5.02952 0.877672L10.7341 3.72998C12.1536 4.4364 12.9333 5.42271 12.9333 6.50233C12.9333 7.58194 12.1536 8.56825 10.7408 9.27467L5.03618 12.127C3.74331 12.7734 2.78366 13 2.07724 13ZM2.07724 1.00429C1.71737 1.00429 1.43747 1.09093 1.2642 1.2642C0.777708 1.74403 0.970972 2.99025 1.77069 4.58301L2.35048 5.7426C2.56374 6.17578 2.56374 6.82888 2.35048 7.26205L1.77069 8.41497C0.970972 10.0144 0.777708 11.254 1.2642 11.7338C1.74403 12.2203 2.99025 12.027 4.58968 11.2273L10.2943 8.37499C11.3406 7.85518 11.9337 7.16875 11.9337 6.49566C11.9337 5.82257 11.3339 5.13615 10.2876 4.61633L4.58301 1.77069C3.57004 1.2642 2.69702 1.00429 2.07724 1.00429Z"
                  fill="white"
                />
                <path
                  d="M5.69427 7.00257H2.09552C1.82229 7.00257 1.5957 6.77599 1.5957 6.50275C1.5957 6.22952 1.82229 6.00293 2.09552 6.00293H5.69427C5.9675 6.00293 6.19409 6.22952 6.19409 6.50275C6.19409 6.77599 5.9675 7.00257 5.69427 7.00257Z"
                  fill="white"
                />
              </svg>
            </>
          )}

          {isSubmitting && <span className="">Submitting...</span>}
        </Button>
      </form>
      {success && (
        <div className="  w-full text-green-600 text-center  mx-auto mt-4  ">
          Ticket Submited successfully
        </div>
      )}
    </>
  );
}
