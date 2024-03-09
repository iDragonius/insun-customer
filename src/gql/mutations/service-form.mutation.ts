import { gql } from "@apollo/client";

const CREATE_SERVICE_FORM = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $message: String!
    $service: String!
  ) {
    createServiceForm(
      data: {
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        message: $message
        service: $service
      }
    ) {
      data {
        id
      }
    }
  }
`;

export default CREATE_SERVICE_FORM;
