import { TestCategoryTestProps } from "@/interfaces/test-categories.interface";

export interface TestCategoryTestsResponse {
  testCategory: {
    data: {
      id: string;
      attributes: {
        name: string;
        description: string;
        tests: {
          data: TestCategoryTestProps[];
        };
      };
    };
  };
}
