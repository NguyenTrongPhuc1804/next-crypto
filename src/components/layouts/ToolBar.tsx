import { TOTAL_ITEMS } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ToolBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="content">
        <p className="text-white text-base font-bold">Cryptocurrency Prices</p>
        <p className=" text-xs text-gray-400 my-2">Updated 1 minute ago</p>
      </div>

      <div className="dropdown flex items-center gap-2">
        <div className="select-box flex items-center ">
          <form className="max-w-sm mx-auto bg-third rounded-2xl p-1">
            <select
              id="countries"
              className="bg-red-800   text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-third dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={"US"}
            >
              {TOTAL_ITEMS.map((item) => (
                <option key={item.id} value={item.value}>
                  Show row: {item.value}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="rounded-2xl">
          <form className="max-w-md w-[400px] mx-auto rounded-2xl">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-400 rounded-2xl   focus:ring-blue-500 focus:border-blue-500 dark:bg-third dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
        </div>

        <div className="bg-third rounded-2xl p-2">
          <Button
            variant={"default"}
            className="bg-second px-2 cursor-pointer text-white rounded-lg "
          >
            <Image
              src="/assets/icons/List-Icon.png"
              width={24}
              height={24}
              alt="icons"
            />
          </Button>

          <Button
            variant={"default"}
            className="bg-third px-2 cursor-pointer text-white rounded-lg "
          >
            <Image
              src="/assets/icons/Heatmap-Icon.png"
              width={24}
              height={24}
              alt="icons"
            />
          </Button>

          <Button
            variant={"default"}
            className="bg-third px-2 cursor-pointer text-white rounded-lg "
          >
            <Image
              src="/assets/icons/Buble-Icon.png"
              width={24}
              height={24}
              alt="icons"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
