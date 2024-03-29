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
export interface BlogItemResponse {
  blogs: {
    data: NewsPreviewItem[];
  };
  blog: {
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
