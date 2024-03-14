import { gql } from "@apollo/client";

const GET_HOME_PAGE = gql`
  query ($locale: I18NLocaleCode!) {
    partners {
      data {
        id
        attributes {
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
    specialists(locale: $locale) {
      data {
        id
        attributes {
          fullName
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
                name
                url
              }
            }
          }
          field
          experience
        }
      }
    }
    newsP(
      locale: $locale
      pagination: { page: 1, pageSize: 4 }
      sort: "date:desc"
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
    homeService(locale: $locale) {
      data {
        id
        attributes {
          seo {
            metaDescription
            metaTitle
            metaImage {
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
            metaSocial {
              description
              title
              image {
                data {
                  id
                  attributes {
                    url
                    name
                    height
                    width
                  }
                }
              }
              socialNetwork
            }
          }
          services {
            id
            color
            title
            description
            icon {
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
          }
        }
      }
    }
  }
`;

export default GET_HOME_PAGE;
