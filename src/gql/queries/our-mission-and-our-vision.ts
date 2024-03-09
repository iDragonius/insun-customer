import { gql } from "@apollo/client";

const GET_OUR_MISSION_AND_OUR_VISION = gql`
  query ($locale: I18NLocaleCode!) {
    ourMissionAndOurVision(locale: $locale) {
      data {
        id
        attributes {
          visions {
            title
            description
          }
          missions {
            title
            description
          }
        }
      }
    }
  }
`;

export default GET_OUR_MISSION_AND_OUR_VISION;
