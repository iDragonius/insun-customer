import { gql } from "@apollo/client";

const GET_HEADS_APPEAL = gql`
  query ($locale: I18NLocaleCode!) {
    headsAppeal(locale: $locale) {
      data {
        id
        attributes {
          fullName
          position
          content
          contentTitle
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
        }
      }
    }
  }
`;

export default GET_HEADS_APPEAL;
