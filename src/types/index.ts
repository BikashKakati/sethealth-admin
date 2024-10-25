// Auth

export type ArtworkProptype = {
  mainImage: string;
  mainImageAlt: string;
  title: string;
  subtitle: string;
};

export interface Service {
  id: number;
  name: string;
  symptoms: string[];
}
