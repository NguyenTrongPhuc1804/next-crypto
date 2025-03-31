import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { MENU_ITEMS } from "@/constants";
import MenuItem from "../common/MenuItem";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];

const SideBarEffect = () => {
  return (
    <Sidebar side="left">
      <SidebarContent className="bg-third scroll-hidden">
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu className="bg-third">
              <div className="bg-third top-0 left-0 w-full  ">
                <div className="w-full h-[6rem] relative p-8 border-b border-r border-gray-600 flex items-center justify-center">
                  <Image
                    className="w-[123px] h-full object-contain"
                    src={"/assets/Logo.png"}
                    width={123}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <div className="p-5 top-0">
                  <div className="flex flex-col mb-5 items-center justify-between">
                    <Image
                      src={"/assets/Avatar-Image.png"}
                      width={70}
                      height={70}
                      alt="Picture of the author"
                    />
                    <h6 className="font-bold text-white text-base mt-5">
                      Erfan Amade
                    </h6>
                    <Image
                      src={"/assets/Verified.png"}
                      width={70}
                      height={21}
                      alt="Picture of the author"
                      className="mt-2"
                    />
                  </div>

                  <ul className="flex flex-col gap-2 ">
                    {MENU_ITEMS.map((item) => (
                      <MenuItem key={item.href} {...item} />
                    ))}
                  </ul>

                  <div className="mt-2">
                    <p className="text-white text-sm ">Insignts</p>
                    <div
                      className={`flex items-center justify-start rounded-2xl p-4 mt-2 w-full hover:text-second hover:bg-second/10 text-white transition-all`}
                    >
                      <span className="mr-2">
                        <Image
                          src="/assets/icons/Chat-Icon.png"
                          width={24}
                          height={24}
                          alt="icons"
                        />
                      </span>
                      <Link
                        href={"/insights"}
                        className={`w-full font-normal text-sm`}
                      >
                        Inbox
                        <span className="px-2 py-1 bg-red-500 rounded-lg ml-2">
                          8
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="toggle flex items-center justify-around mt-10 bg-primary w-full py-2 rounded-2xl">
                    <Button className="text-white text-xs cursor-pointer p-1">
                      <Image
                        src="/assets/icons/Light-Icon.png"
                        width={16}
                        height={16}
                        alt="icons"
                      />
                      Light
                    </Button>
                    <Button
                      variant={"link"}
                      className="bg-second rounded-2xl text-white text-xs cursor-pointer p-3"
                    >
                      <Image
                        src="/assets/icons/Dark-Icon.png"
                        width={16}
                        height={16}
                        alt="icons"
                      />
                      Dark
                    </Button>
                  </div>
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBarEffect;
