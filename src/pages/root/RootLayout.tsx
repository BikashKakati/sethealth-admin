import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import Wrapper from "@/components/common/Wrapper";
import Navbar from "@/components/navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-center justify-center h-full flex-1">
        <Navbar />
        <Wrapper className="my-5">
          <Outlet />
        </Wrapper>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
