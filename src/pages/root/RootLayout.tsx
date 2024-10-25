import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import Wrapper from "@/components/common/Wrapper";
import Navbar from "@/components/navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <main className="flex flex-col overflow-x-hidden h-full  items-center justify-center  flex-1">
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full ">
          <Navbar />
          <Wrapper className="my-5 pb-10">
            <Outlet />
          </Wrapper>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default RootLayout;
