import { gql } from "@apollo/client";

export const GET_BLOGS_DATA = gql`
  {
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
        date
      }
    }
  }
`;
