export interface QuestionProps {
  id: string;
  text: string;
  answers: AnswerProps[];
}

export interface AnswerProps {
  id: string;
  text: string;
  score: number;
}
export interface ResultProps {
  id: string;
  max: number;
  min: number;
  result: string;
}
export interface TestProps {
  name: string;
  questions: QuestionProps[];
  results: ResultProps[];
}
export interface TestResponse {
  test: {
    data: {
      id: string;
      attributes: TestProps;
    };
  };
}
