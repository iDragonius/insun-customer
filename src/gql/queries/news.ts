import { gql } from "@apollo/client";

const GET_NEWS = gql`
  query ($locale: I18NLocaleCode!) {
    newsP(
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
export default GET_NEWS;
