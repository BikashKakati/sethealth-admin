import { store } from "@/store/store";
import { SidebarItemsType } from "@/types";
import { Calendar, CalendarDays, CircleDollarSign, Home, Luggage, Stethoscope, Users } from "lucide-react";



export const items: SidebarItemsType[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Doctors",
    url: "/doctors",
    icon: Stethoscope,
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
    isAddButton: () => {},
  },
];

export const totalDataCountList = [
  {
    title: "doctors",
    icon: Stethoscope,
    iconBgColor: "bg-blue-200",
    iconTextColor:"text-blue-500",
    growth: 25,
    numbersData: 30,
  },
  {
    title: "patients",
    icon: Users,
    iconBgColor: "bg-green-200",
    iconTextColor:"text-green-500",
    growth: 25,
    numbersData: 30,
  },
  {
    title: "appointments",
    icon: CalendarDays,
    iconBgColor: "bg-indigo-200",
    iconTextColor:"text-indigo-500",
    growth: 25,
    numbersData: 30,
  },
  {
    title: "Earnings",
    icon: CircleDollarSign,
    iconBgColor: "bg-purple-200",
    iconTextColor:"text-purple-500",
    growth: 25,
    numbersData: 30,
  },
]

export const dispatch = store.dispatch;
