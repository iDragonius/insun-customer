import { NewsPreviewItem } from "@/interfaces/news.interface";
import { ImageProps, YoutubeLinkProps } from "@/interfaces/shared.interface";
export interface ImageAssets {
  id: string;
  attributes: {
    width: number;
    height: number;
    url: string;
    name: string;
  };
}
export interface NewsItemResponse {
  newsP: {
    data: NewsPreviewItem[];
  };
  news: {
    data: {
      id: string;
      attributes: {
        date: string;
        thumbnail: ImageProps;
        youtubeLinks: YoutubeLinkProps[];
        assets: {
          data: ImageAssets[];
        };
        content: string;
        title: string;
      };
    };
  };
}
