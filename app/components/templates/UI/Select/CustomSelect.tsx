import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export type Option = {
  value: string;
  label: string;
};

const CustomSelect = ({
  options,
  placeholder,
  onChange,
}: {
  options: Option[];
  placeholder: StaticImageData;
  onChange: (option: Option) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    // setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-14 sm:w-16 z-40 ">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full  bg-orange-grad-btn outline-none h-8 lg:h-10 rounded-lg px-2 sm:px-4 sm:pr-6 py-2 text-left"
      >
        <Image width={20} height={20} src={placeholder} alt="icon" />
        {/* {selectedOption ? selectedOption.label : placeholder} */}
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <path
            d="M4.50002 5C4.30014 5 4.10026 4.93038 3.94245 4.7812L0.228812 1.2705C-0.0762708 0.982086 -0.0762708 0.504711 0.228812 0.216296C0.533896 -0.0720987 1.03886 -0.0720987 1.34394 0.216296L4.50002 3.1999L7.65606 0.216296C7.96114 -0.0720987 8.4661 -0.0720987 8.77119 0.216296C9.07627 0.504711 9.07627 0.982086 8.77119 1.2705L5.05759 4.7812C4.89979 4.93038 4.6999 5 4.50002 5Z"
            fill="white"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-1/2 -translate-x-1/2 w-fit space-y-1 bg-[#152945] rounded mt-2 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-nowrap text-center text-sm hover:bg-white/10 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
