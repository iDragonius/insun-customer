import { gql } from "@apollo/client";

const CREATE_SPECIALIST_FORM = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $message: String!
    $specialist: String!
  ) {
    createSpecialistForm(
      data: {
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        message: $message
        specialist: $specialist
      }
    ) {
      data {
        id
      }
    }
  }
`;

export default CREATE_SPECIALIST_FORM;
