import { gql } from "@apollo/client";

export const CREATE_TEST_RESULT = gql`
  mutation (
    $result: String!
    $score: Float!
    $feedback: String!
    $phoneNumber: String!
  ) {
    createTestResult(
      data: {
        phoneNumber: $phoneNumber
        score: $score
        result: $result
        feedback: $feedback
      }
    ) {
      data {
        id
      }
    }
  }
`;

export default CREATE_TEST_RESULT;
