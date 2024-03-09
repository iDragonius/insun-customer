import { gql } from "@apollo/client";

const GET_NEWS_ITEM = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    news(locale: $locale, id: $id) {
      data {
        id
        attributes {
          date
          thumbnail {
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
          assets {
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
          content
          title
        }
      }
    }
    newsP(
      locale: $locale
      pagination: { page: 1, pageSize: 3 }
      sort: "date:desc"
      filters: { id: { ne: $id } }
    ) {
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
export default GET_NEWS_ITEM;
