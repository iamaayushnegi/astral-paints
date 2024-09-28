import { gql } from '@apollo/client';

export const GET_COLOUR_CATEGORY_DATA = gql`
  {
    allColourCategory(where: { slug: "popular" }) {
      nodes {
        name
        colours {
          nodes {
            title
            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
  }
`;