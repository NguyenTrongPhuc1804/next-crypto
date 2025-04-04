import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import InputSearch from "../common/InputSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SELECT_THEME } from "@/constants";
import ToggleSideBar from "../common/ToggleSideBar";

const Header = () => {
  return (
    <div className="bg-third  shrink-0   top-0 right-0 h-[6rem] w-full flex justify-between items-center lg:px-10 px-3">
      <div className="flex items-center gap-4">
        <ToggleSideBar />

        <InputSearch />
      </div>
      <div className="flex items-center">
        <Select defaultValue="english">
          <SelectTrigger className="w-[140px] cursor-pointer text-white border-none bg-primary lg:py-6 py-4 lg:text-base text-xs">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="bg-primary">
            {SELECT_THEME.map((item) => (
              <SelectItem
                key={item.value}
                className="text-white"
                value={item.value}
              >
                {item.icon}
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="ml-2 lg:block hidden ">
          <Button className=" mr-2 bg-primary rounded-2xl px-5 py-6 cursor-pointer text-white  ">
            <Image
              src={"/assets/icons/Wallet-Icon.png"}
              width={24}
              height={24}
              alt="icons"
            />
          </Button>
          <Button className="mr-2 bg-primary rounded-2xl px-5 py-6 cursor-pointer text-white  ">
            <Image
              src={"/assets/icons/Settings-Icon.png"}
              width={24}
              height={24}
              alt="icons"
            />
          </Button>
          <Button className="mr-2 relative bg-primary rounded-2xl px-5 py-6 cursor-pointer text-white  ">
            <Image
              src={"/assets/icons/Chat-Icon.png"}
              width={24}
              height={24}
              alt="icons"
            />
            <div className="absolute rounded-lg top-1 right-1 w-[20px] h-[20px] bg-[#FF3E46]">
              8
            </div>
          </Button>
        </div>
        <div className="ml-2 lg:hidden block ">
          <Button className="mr-2 bg-primary rounded-xl lg:px-5 lg:py-6 px-4 py-5 cursor-pointer text-white  ">
            <Image
              src={"/assets/icons/Settings-Icon.png"}
              width={20}
              height={20}
              alt="icons"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
