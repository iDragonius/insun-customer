import { gql } from "@apollo/client";

const GET_CONTACT_PAGE = gql`
  query {
    contactPage {
      data {
        id
        attributes {
          emails {
            id
            value
          }
          addresses {
            id
            value
          }
          phoneNumbers {
            id
            value
          }
        }
      }
    }
  }
`;

export default GET_CONTACT_PAGE;
