import { ImageProps } from "@/interfaces/shared.interface";

export interface NavigationElementSubProps {
  id: string;
  label: string;
  path: string;
  status: boolean;
}

export interface NavigationElementProps {
  id: string;
  label: string;
  path: string;
  status: boolean;
  hasLink: boolean;
  subs: NavigationElementSubProps[];
}
export interface NavigationProps {
  data: {
    id: string;
    attributes: {
      navigations: NavigationElementProps[];
    };
  };
}
export interface SocialLinkElementProps {
  id: string;
  link: string;
  logo: ImageProps;
  name: string;
}
export interface SocialLinkProps {
  data: {
    id: string;
    attributes: {
      links: SocialLinkElementProps[];
      whatsapp: string;
    };
  };
}
export interface LayoutResponse {
  navigation: NavigationProps;
  socialLink: SocialLinkProps;
}
