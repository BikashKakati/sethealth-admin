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

//services
export interface Service {
  id: number;
  serviceName: string;
  symptoms: string[];
}
