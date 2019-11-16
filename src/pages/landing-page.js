import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from './LandingPage/LandingPage';

export default ({ data }) => (
  <LandingPage data={data} />
);

export const pageQuery = graphql`
  query {
    categories: allStrapiCategory {
      edges {
        node {
          id
          Name
          Thumbnail {
            url
            name
          }
          Products {
            ProductCode
            ProductName
            ShortDescription
            Image {
              url
              name
            }
          }
        }
      }
    }
    promotions: allStrapiPromotion {
      edges {
        node {
          id
          Title
          Description
        }
      }
    }
  }
`;
