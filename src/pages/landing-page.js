import React from 'react';
import { Link } from 'gatsby';
import LandingPage from './LandingPage/LandingPage';

export default ({ data }) => (
  <div>
  <ul>
    {data.allStrapiCategory.edges.map(document => (
      <li key={document.node.id}>
        <h2>
          <Link to={`/${document.node.id}`}>
            {document.node.Name}

          </Link>
        </h2>
      </li>
    ))}
  </ul>
  <LandingPage />
</div>
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
