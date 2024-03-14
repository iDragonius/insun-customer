import { gql } from "@apollo/client";

const GET_LAYOUT = gql`
  query ($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
      data {
        id
        attributes {
          navigations {
            id
            label
            path
            hasLink
            status
            subs {
              id
              label
              path
              status
            }
          }
        }
      }
    }
    socialLink {
      data {
        id
        attributes {
          whatsapp
          links {
            id
            name
            logo {
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
            link
          }
        }
      }
    }
  }
`;

export default GET_LAYOUT;
