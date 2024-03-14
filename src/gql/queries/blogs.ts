import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query ($locale: I18NLocaleCode!) {
    blogs(locale: $locale, sort: "date:desc") {
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
export default GET_BLOGS;
