import { store } from "@/store/store";
import { Service } from "@/types";
import { Calendar, Home, Inbox, LucideIcon, Luggage } from "lucide-react";

interface SidebarItemsType {
  title: string;
  url: string;
  icon: LucideIcon;
  isAddButton?: () => void;
}

export const items: SidebarItemsType[] = [
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
    isAddButton: () => {},
  },
];

export function getInitialServices(): Service[] {
  return [
    {
      id: 1,
      name: "General Consultation",
      symptoms: ["Fever", "Fatigue", "Headache"],
    },
    {
      id: 2,
      name: "Cardiology Check-up",
      symptoms: ["Chest Pain", "Shortness of Breath", "Irregular Heartbeat"],
    },
    {
      id: 3,
      name: "Dermatology Examination",
      symptoms: ["Rash", "Itching", "Skin Discoloration"],
    },
    {
      id: 4,
      name: "Orthopedic Assessment",
      symptoms: ["Joint Pain", "Swelling", "Limited Range of Motion"],
    },
    {
      id: 5,
      name: "Pediatric Care",
      symptoms: [
        "Growth Concerns",
        "Developmental Delays",
        "Childhood Illnesses",
      ],
    },
    {
      id: 6,
      name: "Neurology Consultation",
      symptoms: ["Headaches", "Dizziness", "Numbness"],
    },
    {
      id: 7,
      name: "Gastroenterology Screening",
      symptoms: ["Abdominal Pain", "Nausea", "Digestive Issues"],
    },
    {
      id: 8,
      name: "Ophthalmology Check-up",
      symptoms: ["Vision Changes", "Eye Pain", "Redness"],
    },
    {
      id: 9,
      name: "ENT Examination",
      symptoms: ["Ear Pain", "Sore Throat", "Sinus Pressure"],
    },
    {
      id: 10,
      name: "Endocrinology Consultation",
      symptoms: ["Fatigue", "Weight Changes", "Hormonal Imbalances"],
    },
  ];
}
export const dispatch = store.dispatch;
