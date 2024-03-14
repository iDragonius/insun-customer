import { gql } from "@apollo/client";

export const GET_TEST = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    test(id: $id, locale: $locale) {
      data {
        id
        attributes {
          name
          questions {
            id
            text
            answers {
              id
              text
              score
            }
          }
          results {
            id
            max
            min
            result
          }
        }
      }
    }
  }
`;
