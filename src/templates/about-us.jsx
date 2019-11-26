import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import Footer from '../components/Footer/Footer';

const AboutUsTemplate = ({ data, classes }) => (
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
    <div>
      <br />
      <br />
      <h1>About Us</h1>
    </div>
    <Footer />
  </div>
);

export default AboutUsTemplate;
