"use client";

import PaymentBtn from "./PaymentBtn";
import coin from "@/public/images/pricing/dollarcoin.png";
import bitcoin from "@/public/images/pricing/bitcoin.png";
import paypal from "@/public/images/pricing/paypal.png";
import card from "@/public/images/pricing/credit-card.png";
import pm from "@/public/images/pricing/pm.png";
import bascket from "@/public/images/pricing/bascket.png";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Button, Input } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { startPaymentType } from "@/lib/services/payment/startPaymentType";

export default function PaymentType({
  conversion,
  auth,
}: {
  auth: null | string;
  conversion: number;
}) {
  const [methodActive, setMethodActive] = useState<
    "paypal" | "perfect_money" | "card" | "crypto"
  >("crypto");

  const mothodClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idStr = e.currentTarget.dataset.id;

    if (idStr === "crypto") {
      setMethodActive("crypto");
    } else if (idStr === "card") {
      setMethodActive("card");
    } else if (idStr === "money") {
      setMethodActive("perfect_money");
    } else if (idStr === "paypal") {
      setMethodActive("paypal");
    }
  };

  const [payType, setPayType] = useState<"credit" | "usd">("credit");

  const payTypeHandler = () => {
    if (payType === "credit") {
      setPayType("usd");
    } else {
      setPayType("credit");
    }
  };

  const [tokenAmount, setTokenAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");

  const validateNumber = (value: string) => {
    return value.match(/^\d*\.?\d*$/) ? value : "";
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = validateNumber(value);
    setTokenAmount(value);

    if (value) {
      setUsdAmount((parseFloat(value) * conversion).toFixed(9));
    } else {
      setUsdAmount("");
    }
  };

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = validateNumber(value);
    setUsdAmount(value);

    if (value) {
      setTokenAmount((parseFloat(value) / conversion).toFixed(9));
    } else {
      setTokenAmount("");
    }
  };

  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!auth) {
      router.push("/auth");
      return;
    }

    const result = await startPaymentType(
      {
        method: methodActive,
        type: payType,
        amount: payType === "credit" ? tokenAmount : usdAmount,
      },
      auth
    );

    if (result) {
      if (!result.ok) {
        setError(result.message);
        setSubmitting(false);
        return;
      }

      if (result.data.method === "crypto") {
        router.push(result.data.payment_url);
        return;
      }

      if (result.data.method === "perfect_money") {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = result.data.payment_url;

        const paymentData = {
          PAYEE_ACCOUNT: result.data.payee_account,
          PAYEE_NAME: result.data.payee_name,
          PAYMENT_UNITS: result.data.payment_units,
          PAYMENT_ID: result.data.payment_id,
          PAYMENT_URL: result.data.payment_url,
          NOPAYMENT_URL: result.data.callback_url,
          PAYMENT_AMOUNT: `${result.data.amount}`,
        };

        Object.entries(paymentData).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });

        document.body.appendChild(form);

        console.log("PERFECT money");
        form.submit();
      }

      setSubmitting(false);
    } else if (!result) {
      setError("Failed to connect to server");
      setSubmitting(false);
    }
  };

  return (
    <div
      className=" w-full  z-20
    mt-36 lg:mt-72"
    >
      <video
        className="mix-blend-lighten absolute  left-1/2 -translate-x-1/2 
        w-[31.25rem] min-w-[31.25rem] h-[17.8125rem] bottom-[calc(46%_-_6.5rem)] 
         sm:bottom-[calc(48%_-_6.5rem)] md:bottom-[calc(45%_-_6.5rem)]
          lg:w-[90.625rem] lg:min-w-[90.625rem] lg:h-[51.625rem] 
          lg:bottom-[13%] overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source src="/videos/q-c3d7becf.webm" type="video/webm" />
        Your browser does not support the video playback.
      </video>

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur rounded-xl lg:rounded-3xl bg-[#0a081ec0] relative z-30 
      flex-col flex justify-start items-center border border-neutral-700/30 
      px-5 sm:px-auto"
      >
        <div
          className="w-full lg:w-2/3 xl:w-3/6 mt-11 lg:mt-20 
        gap-4
        flex justify-between sm:flex-row flex-col items-center relative"
        >
          <div className="relative w-full ">
            <Input
              inputMode="numeric"
              value={tokenAmount}
              onChange={handleTokenChange}
              placeholder="Enter your amount."
              className={cn(
                "text-sm   outline-none text-neutral-600",
                " bg-white rounded-lg  py-4 sm:py-5 w-full px-3",
                "border-[0.1875rem] border-transparent",
                {
                  "border-green-600": payType === "credit",
                }
              )}
            />

            <div
              className={cn(
                "bg-back-dark absolute rounded-md  ",
                "flex justify-center items-center gap-1   w-[4.375rem] h-7",
                "right-3 top-1/2 -translate-y-1/2",
                {
                  "bg-gradient-to-t from-[#03721B] to-[#14B537]":
                    payType === "credit",
                }
              )}
            >
              <Image width={20} height={20} src={coin} alt="icon" />
              <span className="text-xs">Credit</span>
            </div>
          </div>

          <Button
            aria-label="select token or usd"
            onClick={payTypeHandler}
            className="border-dashed border border-neutral-200 rounded-sm"
          >
            <svg
              width="32"
              height="32"
              className="fill-neutral-50 basis-5 rotate-90 sm:rotate-0 shrink-0"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"></path>
            </svg>
          </Button>

          <div className="relative w-full ">
            <Input
              inputMode="numeric"
              value={usdAmount}
              onChange={handleUsdChange}
              placeholder="Enter your amount."
              className={cn(
                "text-sm   outline-none text-neutral-600",
                " bg-white rounded-lg  py-4 sm:py-5 w-full px-3",
                "border-[0.1875rem] border-transparent",
                {
                  "border-green-600": payType === "usd",
                }
              )}
            />
            <div
              className={cn(
                "bg-back-dark absolute rounded-md  ",
                "flex justify-center items-center gap-1.5  w-[4.375rem] h-7",
                "right-3 top-1/2 -translate-y-1/2",
                {
                  "bg-gradient-to-t from-[#03721B] to-[#14B537]":
                    payType === "usd",
                }
              )}
            >
              <Image width={20} height={20} src={card} alt="icon" />
              <span className="text-xs">USD</span>
            </div>
          </div>
        </div>

        <h3 className="font-bold lg:text-xl text-base lg:mb-6 mb-8 mt-8 lg:mt-12 w-fit mx-auto inline-block text-center">
          Select Payment Method
        </h3>

        <div
          className="flex flex-col
        w-full lg:w-2/3 xl:w-3/6
        justify-between sm:justify-center gap-2 sm:gap-4 mb-5 lg:mb-9 flex-wrap"
        >
          {process.env.NEXT_PUBLIC_PAYMENT_CRYPTO === "true" && (
            <PaymentBtn
              id="crypto"
              clickHandler={mothodClickHandler}
              active={methodActive === "crypto"}
              title="Crypto"
              className="flex-grow sm:flex-grow-0 w-full lg:w-full "
            >
              <Image
                className="min-w-fit scale-110 translate-x-2 -translate-y-1"
                alt="icon"
                src={bitcoin}
                width={25}
                height={25}
              />
            </PaymentBtn>
          )}

          {process.env.NEXT_PUBLIC_PAYMENT_CREDIT_CARD === "true" && (
            <PaymentBtn
              id="card"
              clickHandler={mothodClickHandler}
              active={methodActive === "card"}
              title="Credit Card"
              className="flex-grow sm:flex-grow-0 w-full lg:w-full"
            >
              <Image
                className="min-w-fit "
                alt="icon"
                src={card}
                width={28}
                height={17}
              />
            </PaymentBtn>
          )}

          {process.env.NEXT_PUBLIC_PAYMENT_MONEY === "true" && (
            <PaymentBtn
              id="money"
              clickHandler={mothodClickHandler}
              active={methodActive === "perfect_money"}
              title="Perfect Money"
              className="flex-grow sm:flex-grow-0 w-full lg:w-full"
            >
              <Image
                className="min-w-fit "
                alt="icon"
                src={pm}
                width={18}
                height={18}
              />
            </PaymentBtn>
          )}

          {process.env.NEXT_PUBLIC_PAYMENT_PAYPAL === "true" && (
            <PaymentBtn
              id="paypal"
              clickHandler={mothodClickHandler}
              active={methodActive === "paypal"}
              title="PayPal"
              className="flex-grow sm:flex-grow-0 w-full lg:w-full"
            >
              <Image
                className="min-w-fit "
                alt="icon"
                src={paypal}
                width={20}
                height={20}
              />
            </PaymentBtn>
          )}
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center btn-hover mb-10 lg:w-2/3 xl:w-3/6
         rounded-lg gap-2 w-full bg-orange-grad-btn py-3 text-xs lg:text-base font-bold sm:w-40"
        >
          {!submitting && (
            <>
              <Image
                className="min-w-fit"
                width={20}
                height={20}
                src={bascket}
                alt="icon"
              />
              <span>Pay</span>
            </>
          )}
          {submitting && (
            <svg
              className="size-5 fill-neutral-50 animate-spin"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path>
            </svg>
          )}
        </Button>

        {error && (
          <p className="w-full text-center sm:w-40 leading-loose text-xs font-semibold text-red-600 pb-5 lg:w-2/3 xl:w-3/6">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
