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

const Header = () => {
  return (
    <div className="bg-third fixed top-0 right-0 left-[200px] h-[6rem]  flex justify-between items-center px-10">
      <div className="flex items-center gap-4">
        <Button variant="link" className="cursor-pointer">
          <Image
            src={"/assets/icons/Mega-Menue.png"}
            width={24}
            height={24}
            alt="icons"
          />
        </Button>
        <InputSearch />
      </div>
      <div className="flex items-center">
        <Select defaultValue="english">
          <SelectTrigger className="w-[140px] cursor-pointer text-white border-none bg-primary py-6">
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
        <div className="ml-2">
          <Button className="mr-2 bg-primary rounded-2xl px-5 py-6 cursor-pointer text-white  ">
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
      </div>

      <div className="absolute left-[-1.5rem]">
        <Button className="rounded-full bg-primary px-5 py-6 cursor-pointer text-white  ">
          {"<"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
