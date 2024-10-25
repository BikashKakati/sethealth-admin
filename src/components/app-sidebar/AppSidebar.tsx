import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items } from "@/constants";
import { PlusCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import InviteDoctorsModal from "../modals/InviteDoctorsModal";
import AddServicesModal from "../modals/AddServicesModal";

// Menu items.

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Logo</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      location.pathname === item.url &&
                      "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    }`}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.isAddButton && item && (
                    <SidebarMenuAction
                      className={`${
                        location.pathname === item.url &&
                        "text-white hover:text-black"
                      }`}
                    >
                      {item.title === "Doctors" && (
                        <InviteDoctorsModal hideTrigger>
                          <PlusCircle className="h-4 w-4" />
                        </InviteDoctorsModal>
                      )}
                      {item.title === "Services" && (
                        <AddServicesModal hideTrigger>
                          <PlusCircle className="h-4 w-4" />
                        </AddServicesModal>
                      )}
                    </SidebarMenuAction>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

/*

  <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>

            </SidebarMenuButton>
             <Collapsible>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className={`${
                      location.pathname === "services" &&
                      "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    }`}>
                  <span className="flex items-start gap-2 flex-1">
                    <Luggage />
                    <span>Servies</span>
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>Add Services</SidebarMenuSubItem>
                  <SidebarMenuSubItem></SidebarMenuSubItem>
                  <SidebarMenuSubItem>dd</SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible> 
            </SidebarMenuItem>
            </SidebarMenu>
            </SidebarGroup>

*/
