import { ImageProps } from "@/interfaces/shared.interface";

export interface EducationPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    thumbnail: ImageProps;
  };
}
export interface EducationsResponse {
  educations: {
    data: EducationPreviewItem[];
  };
}
