import Header from "@/components/layouts/Header";
import SideBarEffect from "@/components/layouts/SideBarEffect";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <SideBarEffect />
      <div className="w-screen bg-[#12181F] ">
        <SidebarInset>
          <div className="w-full">
            <Header />
            <main className="flex-1 w-full bg-primary md:p-10 p-4">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
