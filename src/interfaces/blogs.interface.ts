import { ImageProps, YoutubeLinkProps } from "@/interfaces/shared.interface";

export interface BlogPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    category: string;
    thumbnail: ImageProps;
    youtubeLinks: YoutubeLinkProps[];
  };
}
export interface BlogsResponse {
  blogs: {
    data: BlogPreviewItem[];
  };
}
