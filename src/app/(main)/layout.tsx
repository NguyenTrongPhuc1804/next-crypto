import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full grid grid-cols-[200px_1fr] bg-[#12181F]">
      <div className="h-full">
        <SideBar />
      </div>
      <div className="w-full">
        <Header />
        <main className="flex-1 mt-[6rem] bg-primary p-10">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
