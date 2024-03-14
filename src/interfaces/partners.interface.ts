import { ImageProps } from "@/interfaces/shared.interface";

export interface LinkProps {
  id: string;
  name: string;
  link: string;
  logo: ImageProps;
}
export interface PartnerPreviewItem {
  id: string;
  attributes: {
    name: string;
    description: string;
    logo: ImageProps;
    link: string;
    links: LinkProps[];
  };
}
export interface PartnersResponse {
  partners: {
    data: PartnerPreviewItem[];
  };
}
