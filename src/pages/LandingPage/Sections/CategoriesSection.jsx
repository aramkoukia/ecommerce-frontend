import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CategoriesSection = ({ data }) => (
  <div>
    Categories
    <div>
      <ul>
        {data && data.allStrapiCategory.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.Name}</Link>
            </h2>
            <p>
              {/* <Img fixed={document.node.Tumbnail}/> */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CategoriesSection;