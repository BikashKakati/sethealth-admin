// Auth

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


export interface Service {
  id: number;
  name: string;
  symptoms: string[];
}