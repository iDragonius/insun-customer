import { gql } from "@apollo/client";

const GET_PARTNERS = gql`
  query {
    partners {
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
