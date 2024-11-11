// Auth

import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type ArtworkProptype = {
  mainImage: string;
  mainImageAlt: string;
  title: string;
  subtitle: string;
};

// Doctor modal

export type DoctorModalProptype = {
  hideTrigger?: boolean;
  children?: ReactNode;
};

//services
export type Service = {
  id: string;
  serviceName: string;
  symptoms: string[];
}
export type DoctorType = {
  id: string;
  name: string;
  email:string;
  phone:number;
  appointments:number;
  rating:number;
  revenue:number;
}

export type SidebarItemsType ={
  title: string;
  url: string;
  icon: LucideIcon;
  isAddButton?: () => void;
}
