import { gql } from "@apollo/client";

const GET_EDUCATIONS = gql`
  query ($locale: I18NLocaleCode!) {
    educations(locale: $locale, sort: "date:desc") {
      data {
        id
        attributes {
          title
          description
          date
          thumbnail {
            data {
              id
              attributes {
                url
                width
                height
                name
              }
            }
          }
        }
      }
    }
  }
`;
export default GET_EDUCATIONS;
