"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useSidebar } from "../ui/sidebar";

const ToggleSideBar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="link" onClick={toggleSidebar} className="cursor-pointer">
      <Image
        src={"/assets/icons/Mega-Menue.png"}
        width={0}
        height={0}
        alt="icons"
        className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]"
      />
    </Button>
  );
};

export default ToggleSideBar;
