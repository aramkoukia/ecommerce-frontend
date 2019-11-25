import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import Footer from '../components/Footer/Footer';

const CategoryTemplate = ({ data, classes }) => (
  <div>
    <Header
      color="primary"
      brand="LED Lights And Parts"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white',
      }}
    />
    {/* <Parallax filter image={require('../../assets/img/page-bg.jpg')}>
      <div />
    </Parallax> */}
    <div>
      <br />
      <br />
      <h1>{data.strapiCategory.Name}</h1>
      <ul>
        {data && data.strapiCategory.Products.map(product => (
          <li key={product.ProductCode}>
            <h2>
              {product.ProductCode}
              <Link to={`/${product.ProductName}`}>
                {product.ProductName}
              </Link>
              {product.ShortDescription}
            </h2>
            <p>
          url:
              {' '}
              {product.Image[0].url}
            </p>
            <p>
              <img src={product.Image[0].url} alt={product.ProductName} />
              <Img fixed={product.Image[0]} />
            </p>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
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
