"use client";

import logo from "@/public/images/shield-red.png";
import { Button } from "@headlessui/react";
import SecurityModal from "../../UI/Modal/SecurityModal";
import { useState } from "react";
import Image from "next/image";

export default function LogoutBtn() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Button
        onClick={openModal}
        className="flex justify-center gap-2 items-center"
      >
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
          <path
            d="M9.41176 4V2.5C9.41176 2.10218 9.25063 1.72064 8.96381 1.43934C8.67699 1.15804 8.28798 1 7.88235 1H2.52941C2.12379 1 1.73477 1.15804 1.44795 1.43934C1.16113 1.72064 1 2.10218 1 2.5V11.5C1 11.8978 1.16113 12.2794 1.44795 12.5607C1.73477 12.842 2.12379 13 2.52941 13H7.88235C8.28798 13 8.67699 12.842 8.96381 12.5607C9.25063 12.2794 9.41176 11.8978 9.41176 11.5V10M4.82353 7H14M14 7L11.7059 4.75M14 7L11.7059 9.25"
            stroke="#FF0D00"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#FF0D00]">Exit</span>
      </Button>
      <SecurityModal
        isOpen={modal}
        tapClose
        closeHandler={closeModal}
        className="w-full min-w-fit lg:w-8/12"
      >
        <div className="sm:px-20">
          <Image
            width={52}
            height={62}
            placeholder="blur"
            className="mx-auto "
            src={logo}
            alt="logo"
          />
        </div>
        <p className="font-semibold text-fe-c-text-title text-center text-sm lg:text-base mb-9 mt-5">
          Exite account?
        </p>

        <div className="flex gap-4 justify-between items-center w-fit mx-auto">
          <Button
            className="h-10 lg:h-12 text-center bg-[#F3F3F3] 
          rounded-lg w-32 btn-hover text-fe-c-text-title dark:bg-white/10 text-sm font-semibold"
          >
            Cancel
          </Button>
          <Button
            className="h-10 lg:h-12 text-center bg-[#FF0D00] 
          rounded-lg w-32 btn-hover text-white text-sm font-semibold"
          >
            Exit
          </Button>
        </div>
      </SecurityModal>
    </>
  );
}
