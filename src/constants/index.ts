import { store } from "@/store/store";
import {
    Calendar,
    Home,
    Inbox,
    LucideIcon,
    Luggage,
} from "lucide-react";


interface SidebarItemsType{
    title:string,
    url:string,
    icon:LucideIcon,
    isAddButton?:()=>void,
}

export const items: SidebarItemsType[]= [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Doctors",
      url: "/doctors",
      icon: Inbox,
      isAddButton: () => {},
    },
    {
      title: "Paitents",
      url: "/patients",
      icon: Calendar,
    },
    {
      title: "Services",
      url: "/services",
      icon: Luggage,
      isAddButton:()=>{},
    },
  ];

  export const dispatch = store.dispatch;