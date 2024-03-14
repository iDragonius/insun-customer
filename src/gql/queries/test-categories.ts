import { gql } from "@apollo/client";

const GET_TEST_CATEGORIES = gql`
  query ($locale: I18NLocaleCode!) {
    testCategories(locale: $locale, pagination: { page: 1, pageSize: 10000 }) {
      data {
        id
        attributes {
          tests {
            data {
              id
              attributes {
                name
              }
            }
          }
          name
          category
          description
          image {
            data {
              id
              attributes {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_TEST_CATEGORIES;
