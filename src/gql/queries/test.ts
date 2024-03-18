import { gql } from "@apollo/client";

export const GET_TEST = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    test(id: $id, locale: $locale) {
      data {
        id
        attributes {
          name
          questions(pagination: { page: 1, pageSize: 5000 }) {
            id
            text
            answers(pagination: { page: 1, pageSize: 5000 }) {
              id
              text
              score
            }
          }
          results(pagination: { page: 1, pageSize: 5000 }) {
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
