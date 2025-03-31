import PaginationFooter from "@/components/layouts/PaginationFooter";
import ToolBar from "@/components/layouts/ToolBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="">
        <ToolBar />
      </div>
      <div className="">{children}</div>
      <div className="">
        <PaginationFooter />
      </div>
    </div>
  );
};

export default Layout;
