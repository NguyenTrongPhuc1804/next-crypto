"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, icon }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li className="w-full h-[60px]">
      <div
        className={`flex items-center justify-start rounded-2xl p-4 w-full ${
          isActive
            ? "text-white bg-second scale-110"
            : "hover:text-second hover:bg-second/10 text-white transition-all"
        }`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <Link
          href={href}
          className={`w-full  ${
            isActive ? "font-bold text-xs" : "font-normal text-sm"
          }`}
        >
          {label}
        </Link>
      </div>
    </li>
  );
};

export default MenuItem;
