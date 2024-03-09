import { ImageProps } from "@/interfaces/shared.interface";

export interface HeadsAppealResponse {
  headsAppeal: {
    data: {
      id: string;
      attributes: {
        content: string;
        contentTitle: string;
        fullName: string;
        position: string;
        image: ImageProps;
      };
    };
  };
}
