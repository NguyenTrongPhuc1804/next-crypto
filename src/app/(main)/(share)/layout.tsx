import PaginationFooter from "@/components/layouts/PaginationFooter";
import ToolBar from "@/components/layouts/ToolBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToolBar />
      <div className="">{children}</div>
      <PaginationFooter />
    </div>
  );
};

export default Layout;
