import React from "react";
import { PaginationShad } from "../common/PaginationShad";
import { Button } from "../ui/button";
import Image from "next/image";

const PaginationFooter = () => {
  return (
    <div className="pagination flex justify-between">
      <div className="">
        <PaginationShad />
      </div>

      <div className="text-white ">
        <Button className="text-sm text-white">
          <div className=" border-2 border-gray-700 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="">Load more</span>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/Load-Icon.png"
          width={24}
          height={24}
          alt="icons"
        />
        <span className="font-bold">417</span>
        <span className="text-sm text-gray-400">Item</span>
      </div>
    </div>
  );
};

export default PaginationFooter;
