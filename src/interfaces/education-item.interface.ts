import { ImageProps, YoutubeLinkProps } from "@/interfaces/shared.interface";
import { EducationPreviewItem } from "@/interfaces/educations.interface";
export interface ImageAssets {
  id: string;
  attributes: {
    width: number;
    height: number;
    url: string;
    name: string;
  };
}
export interface EducationItemResponse {
  educations: {
    data: EducationPreviewItem[];
  };
  education: {
    data: {
      id: string;
      attributes: {
        date: string;
        thumbnail: ImageProps;
        assets: {
          data: ImageAssets[];
        };
        youtubeLinks: YoutubeLinkProps[];
        content: string;
        title: string;
      };
    };
  };
}
