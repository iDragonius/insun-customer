import { ImageProps } from "@/interfaces/shared.interface";

export type TestCategoryTestProps = {
  id: string;
  attributes: {
    name: string;
  };
};
export type TestCategoryProps = {
  id: string;
  attributes: {
    name: string;
    description: string;
    image: ImageProps;
    tests: {
      data: TestCategoryTestProps[];
    };
  };
};

export interface TestCategoriesResponse {
  testCategories: {
    data: TestCategoryProps[];
  };
}
