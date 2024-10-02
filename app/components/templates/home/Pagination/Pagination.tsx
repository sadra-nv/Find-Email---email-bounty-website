// import Link from 'next/link'
import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center gap-1">
      <img src="/images/home/leftpagination.png" alt="" />
      <ul className="flex items-center">
        <li className="">
          <img src="/images/home/dotactiv.png" alt="" />
        </li>
        <li className="">
          <img src="/images/home/dot.png" alt="" />
        </li>
        <li className="">
          <img src="/images/home/dot.png" alt="" />
        </li>
        <li className="">
          <img src="/images/home/dot.png" alt="" />
        </li>
      </ul>
      <img src="/images/home/rightpagination.png" alt="" />
      <span></span>
    </div>
  );
};

export default Pagination;
