import { ImageProps } from "@/interfaces/shared.interface";
import { NewsPreviewItem } from "@/interfaces/news.interface";

export interface ServiceItemProps {
  id: string;
  color: string;
  title: string;
  description: string;
  icon: ImageProps;
}
export interface PartnerItemProps {
  id: string;
  attributes: {
    link: string;
    logo: ImageProps;
    name: string;
  };
}
export interface TagItemProps {
  id: string;
  label: string;
}
export interface SpecialistItemProps {
  id: string;
  attributes: {
    fullName: string;
    field: string;
    experience: number;
    image: ImageProps;
    tags: TagItemProps[];
  };
}
export interface SocialSeoProps {
  title: string;
  description: string;
  image: ImageProps;
  socialNetwork: string;
}
export interface SeoProps {
  metaTitle: string;
  metaDescription: string;
  metaImage: ImageProps;
  metaSocial: SocialSeoProps[];
}
export interface HomeResponse {
  partners: {
    data: PartnerItemProps[];
  };
  specialists: {
    data: SpecialistItemProps[];
  };
  homeService: {
    data: {
      id: string;
      attributes: {
        services: ServiceItemProps[];
        seo: SeoProps;
      };
    };
  };
  newsP: {
    data: NewsPreviewItem[];
  };
}
