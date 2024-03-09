import { gql } from "@apollo/client";

const GET_SPECIALISTS = gql`
  query ($locale: I18NLocaleCode!) {
    specialists(locale: $locale) {
      data {
        id
        attributes {
          fullName
          tags {
            id
            label
          }
          image {
            data {
              id
              attributes {
                width
                height
                name
                url
              }
            }
          }
          field
          experience
        }
      }
    }
  }
`;

export default GET_SPECIALISTS;
