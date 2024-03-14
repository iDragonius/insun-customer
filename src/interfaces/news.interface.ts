import { ImageProps } from "@/interfaces/shared.interface";

export interface NewsPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    thumbnail: ImageProps;
    category: string;
  };
}
export interface NewsResponse {
  newsP: {
    data: NewsPreviewItem[];
  };
}
