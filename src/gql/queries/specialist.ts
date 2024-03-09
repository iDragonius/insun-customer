import { gql } from "@apollo/client";

const GET_SPECIALIST = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    specialist(locale: $locale, id: $id) {
      data {
        id
        attributes {
          fullName
          field
          education
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
                url
                name
              }
            }
          }
          education
          activityDirections
          slogan
          experience
        }
      }
    }
  }
`;

export default GET_SPECIALIST;
