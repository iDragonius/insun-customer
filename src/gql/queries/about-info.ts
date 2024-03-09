import { gql } from "@apollo/client";

const GET_ABOUT_INFO = gql`
  query ($locale: I18NLocaleCode!) {
    aboutInfo(locale: $locale) {
      data {
        id
        attributes {
          mainTitle
          mainDescription
          subInfos {
            title
            description
          }
        }
      }
    }
  }
`;

export default GET_ABOUT_INFO;
