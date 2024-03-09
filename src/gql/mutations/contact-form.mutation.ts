import { gql } from "@apollo/client";

const CREATE_CONTACT_FORM = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $message: String!
  ) {
    createContactForm(
      data: {
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        message: $message
      }
    ) {
      data {
        id
      }
    }
  }
`;

export default CREATE_CONTACT_FORM;
