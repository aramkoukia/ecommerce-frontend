import React from 'react';
import { Link, graphql } from 'gatsby';

const CategoryTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiCategory.Name}</h1>
    <ul>
      {data && data.strapiCategory.Products.map(product => (
        <li key={product.ProductCode}>
          <h2>
            <Link to={`/${product.ProductName}`}>
              {product.ProductCode}
              {product.ProductName}
            </Link>
          </h2>
          <p>
            {/* <Img fixed={document.node.Tumbnail} /> */}
          </p>
        </li>
      ))}
    </ul>

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
        ProductName
        Image {
          id
          url
        }
      }
    }
  }
`;
