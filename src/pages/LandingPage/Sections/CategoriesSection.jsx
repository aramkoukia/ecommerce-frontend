import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CategoriesSection = ({ data }) => (
  <div>
    Categories
    <div>
      <ul>
        {data && data.categories.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.Name}</Link>
              <img src={document.node.Thumbnail.url} alt={document.node.Name} />
            </h2>
            <p>
              {/* <Img fixed={document.node.Tumbnail} /> */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CategoriesSection;
