import { ImageProps, YoutubeLinkProps } from "@/interfaces/shared.interface";

export interface EducationPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    category: string;
    youtubeLinks: YoutubeLinkProps[];
    thumbnail: ImageProps;
  };
}
export interface EducationsResponse {
  educations: {
    data: EducationPreviewItem[];
  };
}
