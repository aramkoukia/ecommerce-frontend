import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

const ProductsByCategoryTemplate = ({ data }) => (
  <h1>Products By Category</h1>
);

export default ProductsByCategoryTemplate;

// export const query = graphql`
//   query ProductsByCategoryTemplate($id: String!) {
//     strapiProducts(id: {eq: $id}) {
//       edges {
//         node {
//           id
//           ProductCode
//           ProductName
//           ShortDescription
//           LongDescription
//         }
//       }
//     }
//   }
// `;
