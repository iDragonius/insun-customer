import { SpecialistItemProps, TagItemProps } from "@/interfaces/home.interface";
import { ImageProps } from "@/interfaces/shared.interface";

export interface SpecialistsResponse {
  specialists: {
    data: SpecialistItemProps[];
  };
}

export interface SpecialistResponse {
  specialist: {
    data: {
      id: string;
      attributes: {
        activityDirections: string;
        slogan: string;
        education: string;
        experience: number;
        field: string;
        fullName: string;
        image: ImageProps;
        tags: TagItemProps[];
      };
    };
  };
}
