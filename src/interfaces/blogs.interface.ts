import { ImageProps } from "@/interfaces/shared.interface";

export interface BlogPreviewItem {
  id: string;
  attributes: {
    date: string;
    description: string;
    title: string;
    thumbnail: ImageProps;
  };
}
export interface BlogsResponse {
  blogs: {
    data: BlogPreviewItem[];
  };
}
