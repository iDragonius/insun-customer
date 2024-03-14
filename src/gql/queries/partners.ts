import { gql } from "@apollo/client";

const GET_PARTNERS = gql`
  query {
    partners(pagination: { page: 1, pageSize: 10000 }) {
      data {
        id
        attributes {
          name
          logo {
            data {
              id
              attributes {
                name
                url
                width
                height
              }
            }
          }
          category
          description
          link
          links {
            id
            name
            logo {
              data {
                id
                attributes {
                  name
                  url
                  width
                  height
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
export default GET_PARTNERS;
