import React from 'react';
import { graphql } from 'gatsby';
import LandingPage from './LandingPage/LandingPage';

export default ({ data }) => (
  <LandingPage data={data} />
);


export const pageQuery = graphql`
  query SectionCategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          id
          Name
        }
      }
    }
  }
`;
