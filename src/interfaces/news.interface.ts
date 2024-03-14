import { ImageProps, YoutubeLinkProps } from "@/interfaces/shared.interface";

export interface NewsPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    thumbnail: ImageProps;
    youtubeLinks: YoutubeLinkProps[];

    category: string;
  };
}
export interface NewsResponse {
  newsP: {
    data: NewsPreviewItem[];
  };
}
