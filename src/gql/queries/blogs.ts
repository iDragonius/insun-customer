import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query ($locale: I18NLocaleCode!) {
    blogs(
      locale: $locale
      sort: "date:desc"
      pagination: { page: 1, pageSize: 10000 }
    ) {
      data {
        id
        attributes {
          title
          description
          date
          category
          youtubeLinks {
            link
          }
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
