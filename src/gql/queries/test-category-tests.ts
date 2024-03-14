import { gql } from "@apollo/client";

const GET_TEST_CATEGORY_TESTS = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    testCategory(id: $id, locale: $locale) {
      data {
        id
        attributes {
          name
          description
          tests {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_TEST_CATEGORY_TESTS;
