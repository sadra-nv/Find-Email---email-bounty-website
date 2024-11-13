"use client";

import { Button, Field, Input, Label } from "@headlessui/react";
import Image from "next/image";
import PaymentBtn from "./PaymentBtn";
import coin from "@/public/images/pricing/dollarcoin.png";
import bitcoin from "@/public/images/pricing/bitcoin.png";
import paypal from "@/public/images/pricing/paypal.png";
import card from "@/public/images/pricing/credit-card.png";
import pm from "@/public/images/pricing/pm.png";
import bascket from "@/public/images/pricing/bascket.png";
import { useState } from "react";
import PaymentSelect, { Option } from "./PaymentSelect";

const paymentMethods = [
  { name: "Credit Card", pic: card },
  { name: "USD", pic: coin },
];
const options = [
  { value: "Credit Card", label: "Credit Card" },
  { value: "USD", label: "USD" },
];

export default function PaymentForm() {
  const [methodActive, setMethodActive] = useState({
    crypto: true,
    card: false,
    money: false,
    paypal: false,
  });

  const mothodClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idStr = e.currentTarget.dataset.id;

    if (idStr === "crypto") {
      setMethodActive({
        crypto: true,
        card: false,
        money: false,
        paypal: false,
      });
    } else if (idStr === "card") {
      setMethodActive({
        crypto: false,
        card: true,
        money: false,
        paypal: false,
      });
    } else if (idStr === "money") {
      setMethodActive({
        crypto: false,
        card: false,
        money: true,
        paypal: false,
      });
    } else if (idStr === "paypal") {
      setMethodActive({
        crypto: false,
        card: false,
        money: false,
        paypal: true,
      });
    }
  };

  const [selectedPic, setSelectedPic] = useState(coin);
  const handleSelectChange = (selectedOption: Option) => {
    paymentMethods.map((method) => {
      if (method.name === selectedOption.label) {
        setSelectedPic(method.pic);
      }
    });
    console.log("Selected option:", selectedOption);
  };
  return (
    <form
      className=" relative z-30 
flex-col flex justify-start items-center 
px-5 sm:px-0 sm:w-2/3 w-full mx-auto"
    >
      <Field className="w-full mt-11 lg:mt-20 relative">
        <Label
          className="bg-neutral-200 border border-neutral-500/5 shadow-sm
         dark:bg-white rounded-lg flex justify-start items-center py-4 sm:py-5 w-full px-6"
        >
          <Input
            placeholder="Enter your amount."
            className="text-sm w-full outline-none bg-transparent text-neutral-600"
          />
        </Label>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex gap-2 justify-end items-center">
          <div className=" flex gap-2 relative">
            <PaymentSelect
              options={options}
              placeholder={selectedPic}
              onChange={handleSelectChange}
            />
          </div>

          <div className="text-xs px-3 sm:px-5 text-white lg:px-8 py-2 lg:text-base font-sans bg-back-dark rounded-lg h-8 lg:h-10">
            0.00
          </div>
        </div>
      </Field>

      <h3 className="font-bold lg:text-xl text-base lg:mb-6 mb-8 mt-8 lg:mt-12 w-fit mx-auto inline-block text-center">
        Select Payment Method
      </h3>

      <div
        className="flex flex-col
w-full sm:gap-4 mb-5 lg:mb-9 flex-wrap
justify-between sm:justify-center gap-2"
      >
        <PaymentBtn
          id="crypto"
          clickHandler={mothodClickHandler}
          active={methodActive.crypto}
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
        <PaymentBtn
          id="card"
          clickHandler={mothodClickHandler}
          active={methodActive.card}
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
        <PaymentBtn
          id="money"
          clickHandler={mothodClickHandler}
          active={methodActive.money}
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
        <PaymentBtn
          id="paypal"
          clickHandler={mothodClickHandler}
          active={methodActive.paypal}
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
      </div>
      <Button
        className="flex items-center justify-center btn-hover mb-8 sm:mb-4 lg:mb-11 
rounded-lg gap-2 w-full bg-orange-grad-btn py-3 text-xs lg:text-base font-bold text-white"
      >
        <Image
          className="min-w-fit"
          width={20}
          height={20}
          src={bascket}
          alt="icon"
        />
        <span>Pay</span>
      </Button>
    </form>
  );
}
