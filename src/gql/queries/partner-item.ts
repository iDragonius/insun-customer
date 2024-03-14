import { gql } from "@apollo/client";

const GET_PARTNER_ITEM = gql`
  query ($id: ID!) {
    partner(id: $id) {
      data {
        id
        attributes {
          name
          description
          link
          links {
            logo {
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
            link
            name
            id
          }
          logo {
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
        }
      }
    }
    partners(
      pagination: { page: 1, pageSize: 3 }
      sort: "date:desc"
      filters: { id: { ne: $id } }
    ) {
      data {
        id
        attributes {
          name
          description
          link
          links {
            logo {
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
            link
            name
            id
          }
          logo {
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
        }
      }
    }
  }
`;
export default GET_PARTNER_ITEM;
