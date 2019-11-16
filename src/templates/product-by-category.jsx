import React from 'react';
import { graphql } from 'gatsby';

const CategoryTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiCategory.Name}</h1>
  </div>
);

export default CategoryTemplate;

export const query = graphql`
  query CategoryTemplate($id: String!) {
    strapiCategory(id: {eq: $id}) {
      id
      Name
      Products {
        ProductCode
      }
    }
  }
`;
